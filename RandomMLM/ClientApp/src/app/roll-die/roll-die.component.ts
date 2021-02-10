import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RollDieService } from './roll-die.service';

@Component({
  selector: 'app-roll-die',
  templateUrl: './roll-die.component.html',
  styleUrls: ['./roll-die.component.css']
})
export class RollDieComponent implements OnInit {

  constructor(private rollDieService: RollDieService) { }

  ngOnInit() {
  }

  displayText: string = 'Click the "Hit me!" button below to roll.';
  inProgress: boolean = false;

  onHitMe() {
    this.inProgress = true;
    this.rollDieService.getRandomRedditNumber().subscribe(value => this.updateDisplayText(value), error => this.onError(error));
  }
  onError(error: HttpErrorResponse): void {
    this.displayText = 'Unable to roll. Please try again later.';
    this.inProgress = false;
  }

  updateDisplayText(rollValue: number) {
    this.displayText = 'You rolled a ' + rollValue;
    this.inProgress = false;
  }
}
