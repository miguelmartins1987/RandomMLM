import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GenerateRandomStringService } from './generate-random-string.service';

@Component({
  selector: 'app-generate-random-string',
  templateUrl: './generate-random-string.component.html',
  styleUrls: ['./generate-random-string.component.css']
})
export class GenerateRandomStringComponent implements OnInit {
  
  characterSets: CharacterSet[] = [{ name: "uppercase", displayName: "Uppercase (A-Z)" }, { name: "lowercase", displayName: "Lowercase (a-z)" }, { name: "digits", displayName: "Digits (0-9)" }, { name: "dash", displayName: "Dash (-)" }, { name: "underscore", displayName: "Underscore (_)" }];
  selectedCharacterSets: any[];
  stringLength: number = 10;
  generatedStrings: string[] = [];
  displayMessage: string;
  inProgress: boolean = false;

  constructor(private generateRandomStringService: GenerateRandomStringService) { }

  ngOnInit() {
  }

  onHitMe() {
    this.inProgress = true;
    if (this.selectedCharacterSets && this.selectedCharacterSets.length > 0) {
      this.generateRandomStringService.getRandomString(this.stringLength, this.selectedCharacterSets).subscribe(value => this.appendGeneratedString(value), error => this.onError(error));
    }
    else {
      this.showMessage("Please specify at least one character class.");
    }
  }

  appendGeneratedString(value: string): void {
    this.generatedStrings.push(value)
    this.showMessage("Successfully generated string: " + value);
  }

  onError(error: HttpErrorResponse): void {
    this.showMessage("Could not generate random string. Please try again later.");
  }

  showMessage(message: string) {
    this.displayMessage = message;
    this.inProgress = false;
  }
}

class CharacterSet {

}
