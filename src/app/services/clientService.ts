import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thought } from '../shared/models/thought.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly API = 'http://localhost:3000/quotes';

  constructor(private httpClient: HttpClient) {}

  public create(thoughts: Thought): Observable<Thought> {
    return this.httpClient.post<Thought>(this.API, thoughts);
  }

  public list(
    page: number,
    filter: string,
    favorite?: boolean
  ): Observable<Thought[]> {
    const totalItemsPage = 99;

    let params = new HttpParams()
      .set('_page', page)
      .set('_limit', totalItemsPage);

    if (favorite) {
      params = params.set('favorite', favorite);
    }

    if (filter.trim().length > 2) {
      params = params.set('q', filter);
    }

    return this.httpClient.get<Thought[]>(this.API, { params });
  }

  public delete(id: string): Observable<Thought> {
    return this.httpClient.delete<Thought>(`${this.API}/${id}`);
  }

  public edit(thought: Thought): Observable<Thought> {
    return this.httpClient.put<Thought>(`${this.API}/${thought.id}`, thought);
  }

  public getDataById(id: string): Observable<Thought> {
    return this.httpClient.get<Thought>(`${this.API}/${id}`);
  }
}
