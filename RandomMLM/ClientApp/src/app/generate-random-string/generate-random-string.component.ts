import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-random-string',
  templateUrl: './generate-random-string.component.html',
  styleUrls: ['./generate-random-string.component.css']
})
export class GenerateRandomStringComponent implements OnInit {
  //characterSets: string[] = ['Uppercase (A-Z)', 'Lowercase (a-z)', 'Digits (0-9)', 'Dash (-)', 'Underscore (_)'];

  characterSets: CharacterSet[] = [{ name: "uppercase", displayName: "Uppercase (A-Z)" }, { name: "lowercase", displayName: "Lowercase (a-z)" }];
  selectedCharacterSets: any[];
  stringLength: number = 10;
  generatedStrings: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  onHitMe() {
    var generatedString = "ABCD";
    this.generatedStrings.push(generatedString);
  }
}

class CharacterSet {

}
