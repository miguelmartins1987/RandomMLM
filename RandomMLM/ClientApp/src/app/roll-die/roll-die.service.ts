import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RollDieService {
  private randomRedditNumberUrl = 'api/randomredditnumber';

  getRandomRedditNumber(): Observable<number> {
    return this.httpClient.get<number>(this.randomRedditNumberUrl);
  }

  constructor(private httpClient: HttpClient) { }
}
