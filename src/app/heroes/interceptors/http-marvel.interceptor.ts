import { catchError } from 'rxjs/operators';
import { config } from '../../core/config/config';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

import { Injectable } from "@angular/core";
import { Md5Hasher } from '../../core/utils/md5-hasher';

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
        let dateString: string = new Date().toDateString();
        let hash: string = `${dateString}${config.marvel.api.privateKey}${config.marvel.api.publicKey}`
         request = request.clone({
                setParams: {
                    'ts': new Date().toDateString(),
                    'apikey': config.marvel.api.publicKey,
                    'hash': Md5Hasher.hashString(hash),
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