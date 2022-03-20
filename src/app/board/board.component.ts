import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

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

  onClick(i: number){
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

  isVictoire(){
    
    for(let victorie of this.victories){
      // console.log('valeur victorie : '+victorie);
      let valeur1 = this.board[victorie[0]] ;
      let valeur2 = this.board[victorie[1]] ;
      let valeur3 = this.board[victorie[2]] ;

      // console.log('valeur1:'+valeur1);
      // console.log('valeur2:'+valeur2);
      // console.log('valeur3:'+valeur3);


      if(valeur1 !== '' && valeur2 !== '' && valeur3 !== ''){
        if (valeur1 === valeur2 && valeur2 === valeur3){
            this.winner = true;
            console.log('-----------------------gagnee-------------------------');              
        }  
      }
    }
  }

   

}
