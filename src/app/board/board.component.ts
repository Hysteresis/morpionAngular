import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  btnReplay: boolean = false;
  isReplay: boolean = false;
  btnPlay: boolean = false;
  isPlay: boolean = true;

  displayPlayer: string ='';
  displayError: string = '';
  isError: boolean = false;

  btnColor = "rgb(46, 46, 46)";
  caseValue: any;

  player1: string = "X";
  player2: string = "O";

  isPlayer1: boolean = true;
  board: any = [
    '','','',
    '','','',
    '','',''
  ] ;

  victories = [
    ['0','1','2'],
    ['0','4','8'],
    ['0','3','6'],
    ['1','4','7'],
    ['2','5','8'],
    ['2','4','6'],
    ['3','4','5'],
    ['6','7','8']                    
]

  squares: string[];
  winner: boolean = false;

  constructor() {
    this.squares = Array(9).fill(null);
    
   }

  ngOnInit(): void {}

  // replay(){
  //   this.btnPlay = false;
  //   this.isPlay = true;
  //   this.isReplay = false;
  //   this.squares = Array(9).fill(null);
  // }
  
  onStart(){
    this.displayPlayer = "Que la partie commence : Player X réflechis...";
    this.isPlayer1 = true;
    this.winner = false;
    this.btnPlay = true; 
    this.isPlay = false;
    this.isReplay = false;
    this.squares = Array(9).fill(null);
    this.board= [
      '','','',
      '','','',
      '','',''
    ] ;
    this.isPlayer1 = true;
   
  }

  onClick(i: number){
    if(this.winner === false){
      if(this.isPlayer1 ){
        this.displayPlayer = "Player 0 réflechis...";
      } else {
        this.displayPlayer = "Player X réflechis...";
      }

}   


    if(this.btnPlay === true){
      this.isError = false;
      this.caseValue = i;
      

      if(this.squares[i] == null && this.isPlayer1 ){
  
        this.board[this.caseValue] = this.player1;
        this.squares[this.caseValue] = this.player1;
        console.log(this.squares);
        this.isPlayer1 = false;


      } else if (this.squares[i] == null && !this.isPlayer1 ) {

        this.board[this.caseValue] = this.player2;
        this.squares[this.caseValue] = this.player2;

        console.log(this.squares);
        this.isPlayer1 = true;

      } else {

        this.isError = true;
        this.displayError = '! Case deja occupée !';
        console.log( this.isError);
      }

      if(this.winner == false){

        console.log('winner:'+this.winner);
        this.isVictoire();
      }
    }

      

  }

  isVictoire(){
    
    for(let victorie of this.victories){
     
      let valeur1 = this.board[victorie[0]] ;
      let valeur2 = this.board[victorie[1]] ;
      let valeur3 = this.board[victorie[2]] ;

      if(valeur1 !== '' && valeur2 !== '' && valeur3 !== ''){
        if (valeur1 === valeur2 && valeur2 === valeur3){
            this.winner = true;
            this.btnPlay = false;
            this.isReplay = true;
            
            if(this.isPlayer1){
              this.displayPlayer = "Player X a gagné";
            } else {
              this.displayPlayer = "Player O a gagné";
            }
            console.log('-----------------------gagnee-------------------------');              
        }  
      }
    }
    
  }

   

}
