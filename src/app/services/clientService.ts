import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thoughts } from '../shared/thoughts.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private httpClient: HttpClient) {}

  public create(thoughts: Thoughts): Observable<Thoughts> {
    return this.httpClient.post<Thoughts>(this.API, thoughts);
  }

  public list(): Observable<Thoughts[]> {
    return this.httpClient.get<Thoughts[]>(this.API);
  }

  public delete(id: string): Observable<Thoughts> {
    return this.httpClient.delete<Thoughts>(`${this.API}/${id}`);
  }

  public edit(thought: Thoughts): Observable<Thoughts> {
    return this.httpClient.patch<Thoughts>(
      `${this.API}/${thought.id}`,
      thought
    );
  }

  public getDataById(id: string): Observable<Thoughts> {
    return this.httpClient.get<Thoughts>(`${this.API}/${id}`);
  }
}
