import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { tttService } from '../service/ttt-service';
import { Hero } from 'src/app/heroes/hero';
import { MarvelApiService } from 'src/app/shared/services/marvel-api.service';

@Component({
  selector: 'ttt-main',
  templateUrl: './ttt-main.component.html',
  styleUrls: ['./ttt-main.component.css']
})
export class TttMainComponent implements OnInit {

  constructor(private _tttService: tttService,
    private _marvelApiService: MarvelApiService) {
    this.startGame();
  }

  @Output() restartGameEmitter: EventEmitter<any> = new EventEmitter();
  
  battlefield:Array<any>;
  winner:any;
  draw:any;
  currentPlayer:boolean = true; //true = x | false = o 
  winnerName: string = "";
  currentPlayerLabel:any;

  // hero's player
  public player1: Hero;
  public player2: Hero;

  ngOnInit(): void {
    this._marvelApiService.getPlayer1().subscribe(res => {
      this.player1 = res;
      this.player1.value = true;
      this.player1.victories = 0;
    });
    this._marvelApiService.getPlayer2().subscribe(res => {
      this.player2 = res;
      this.player2.value = false;
      this.player2.victories = 0;
    });
  }
  
  startGame(){
    // hard code
    this.battlefield = [
      // y: 0  y: 1  y: 2
      [null, null, null], // x: 0
      [null, null, null], // x: 1
      [null, null, null]  // x: 2
    ];

    let battleField:any = document.querySelectorAll('.square');

    for (let index:number = 0; index < battleField.length; index++) {
      battleField[index].innerHTML = '';
    }

    this.winner = this.draw = false;
    this.currentPlayerLabel = this.returnCurrentPlayer(this.currentPlayer);
  }
   
  play(x:number, y:number, currentPlayer:boolean){
    if(typeof(this.battlefield[x][y]) !== "string"){
      if(currentPlayer)
        this.battlefield[x][y] = 'X';
      else
        this.battlefield[x][y] = 'O';
      
      this.checkGame(this.battlefield);

      this.currentPlayer = !this.currentPlayer;
      this.currentPlayerLabel = this.returnCurrentPlayer(this.currentPlayer);
    }
  }

  checkGame(battlefield:any){
    let gameStatus:any = this._tttService.checkGame(battlefield) || false;
    
    if(gameStatus && gameStatus.endGame){
      gameStatus.winner = this.returnCurrentPlayer(this.currentPlayer);
      this.winner = gameStatus;
    }else if(gameStatus && gameStatus.draw){
      this.draw = gameStatus.draw;
    }

    if(this.winner) {
      if(this.currentPlayer) {
        this.player1.victories++;
        this.winnerName = this.player1.name;
      } 
      else {
        this.player2.victories++;
        this.winnerName = this.player2.name;
      }
    }
  }
  
  returnCurrentPlayer(currentPlayer:any){
    if((currentPlayer && typeof(currentPlayer) === 'boolean')|| (currentPlayer && typeof(currentPlayer) === 'string') && currentPlayer === 'X')
      return '<img src="/../../assets/images/ic_X.svg" alt="X">'; 
    else
      return '<img src="/../../assets/images/ic_O.svg" alt="O">';
  }

  restartGame() {
    this.restartGameEmitter.emit();
  }
  
}

