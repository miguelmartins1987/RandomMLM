import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateRandomStringService {
  private randomStringUrl = 'api/randomstring';

  getRandomString(stringLength: number, selectedCharacterSets: any[]): Observable<string> {
    var randomStringOptions: RandomStringOptions = { stringLength: stringLength, characterSets: selectedCharacterSets };
    var headers = { 'Content-Type': 'application/json' }
    return this.httpClient.post(this.randomStringUrl, JSON.stringify(randomStringOptions), { headers: headers, responseType: 'text' });
  }

  constructor(private httpClient: HttpClient) { }
}

class RandomStringOptions {

}
