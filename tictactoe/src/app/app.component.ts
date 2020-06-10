import { Component } from '@angular/core';
import { Symbols } from './symbols';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tictactoe';
  result = '';
  end = false;
  public current: Symbols = Symbols.X;
  public board: Symbols[] = [Symbols.Unknown,
  Symbols.Unknown, Symbols.Unknown, Symbols.Unknown,
  Symbols.Unknown, Symbols.Unknown, Symbols.Unknown,
  Symbols.Unknown, Symbols.Unknown, Symbols.Unknown,];

  public onClick(item: number) {
    if (this.board[item] === Symbols.Unknown && !this.end) {
      // set the current Symbols
      this.board[item] = this.current;

      // check if we won the match
      if (this.isMatchWon()) {
        this.result = 'won the match';
        this.end = true;
      } else {
        // check if the board is full
        if (this.isBoardFull()) {
          this.result = 'match is drawn';
          this.end = true;
        }
      }



      // change the Symbols for next
      this.current = this.current === Symbols.X ? Symbols.O : Symbols.X;
    }
  }

  private isBoardFull(): boolean {
    let isFull = true;
    for (let i = 0; i < this.board.length; i++) {
      if (i !== 0 && this.board[i] === Symbols.Unknown) {
        isFull = false;
      }
    }
    return isFull;
  }

  private isMatchWon(): boolean {
    if (this.board[1] === this.current && this.board[2] === this.current && this.board[3] === this.current) {
      return true;
    }
    if (this.board[4] === this.current && this.board[5] === this.current && this.board[6] === this.current) {
      return true;
    }
    if (this.board[7] === this.current && this.board[8] === this.current && this.board[9] === this.current) {
      return true;
    }

    if (this.board[1] === this.current && this.board[4] === this.current && this.board[7] === this.current) {
      return true;
    }
    if (this.board[2] === this.current && this.board[5] === this.current && this.board[8] === this.current) {
      return true;
    }
    if (this.board[3] === this.current && this.board[6] === this.current && this.board[9] === this.current) {
      return true;
    }

    if (this.board[1] === this.current && this.board[5] === this.current && this.board[9] === this.current) {
      return true;
    }
    if (this.board[2] === this.current && this.board[5] === this.current && this.board[8] === this.current) {
      return true;
    }
    return false;
  }

  public is_x(item: number) {
    return this.board[item] === Symbols.X;
  }

  public is_o(item: number) {
    return this.board[item] === Symbols.O;
  }
}
