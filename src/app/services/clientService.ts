import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thoughts } from '../shared/models/thoughts.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private httpClient: HttpClient) {}

  public create(thoughts: Thoughts): Observable<Thoughts> {
    return this.httpClient.post<Thoughts>(this.API, thoughts);
  }

  public list(
    page: number,
    filter: string,
    favorite?: boolean
  ): Observable<Thoughts[]> {
    const totalItemsPage = 9;

    let params = new HttpParams()
      .set('_page', page)
      .set('_limit', totalItemsPage);

    if (favorite) {
      params = params.set('favorite', favorite);
    }

    if (filter.trim().length > 2) {
      params = params.set('q', filter);
    }

    return this.httpClient.get<Thoughts[]>(this.API, { params });
  }

  public delete(id: string): Observable<Thoughts> {
    return this.httpClient.delete<Thoughts>(`${this.API}/${id}`);
  }

  public edit(thought: Thoughts): Observable<Thoughts> {
    return this.httpClient.put<Thoughts>(`${this.API}/${thought.id}`, thought);
  }

  public getDataById(id: string): Observable<Thoughts> {
    return this.httpClient.get<Thoughts>(`${this.API}/${id}`);
  }
}
