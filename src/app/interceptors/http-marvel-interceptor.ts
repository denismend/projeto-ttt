import { tap, catchError, switchMap } from 'rxjs/operators';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

const login = '/login';
const loginRefresh = '/login/refresh';

@Injectable()
export class HttpMarvelInterceptor implements HttpInterceptor {

    constructor() { 
        
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.search(login) === -1 && request.url.search(loginRefresh) === -1) {
            request = this.addHeaderToken(request);
        }

        return this.sendRequest(request, next);
    }

    /**
     * Function responsável em adicionar os parâmetros obrigatórios da requisição;
     * @param request 
     */
    private addHeaderToken(request: HttpRequest<any>): HttpRequest<any> {
         request = request.clone({
                setParams: {
                    'ts': '1578343276',
                    'apikey': 'f32ac1b0df64265ee51b6a0148bf98c1',
                    'hash': 'b63d05cb853a66e0c8b97a5ea3d1fb2e',
                   // ...request.params
                }
            });

        return request;
    }

    /**
     * Função responsável em enviar a requisição para ser executada.
     * @param request 
     * @param next 
     */
    private sendRequest(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(x => this.handleAuthError(x)));
    }

    private handleAuthError(err: HttpErrorResponse): Observable<HttpEvent<any>> {
        return throwError(err);
    };
}