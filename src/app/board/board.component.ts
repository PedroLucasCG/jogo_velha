import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SquareComponent } from "../square/square.component";
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NgIf, NgFor, SquareComponent, MaterialModule],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'] 
})
export class BoardComponent implements OnInit {
  squares: any[] = [];
  xIsNext: boolean = true;
  winner: string = '';
  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit executed.');
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = '';
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(squareID: number) { 
    if (!this.squares[squareID] && !this.winner) {
      this.squares[squareID] = this.player;
      this.xIsNext = !this.xIsNext;  
      this.winner = this.calculateWinner();
    }
  }

  calculateWinner(): string {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return '';
  }
}
