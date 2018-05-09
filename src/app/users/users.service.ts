import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


//rxjs
import { Observable } from 'rxjs/Observable';

// Models
import { User } from '../models/user';
//complete demo   http://brianflove.com/2017/07/16/mean-app-unplugged/
//https://github.com/blove/mean-material-reactive/blob/master/client/src/app/models/hero.ts
@Injectable()
export class UsersService {

  private readonly URL = "http://localhost:8080/api/heros"

  constructor(
    protected httpClient:HttpClient
  ) { }

  public create(hero: User): Observable<User> {
    return this.httpClient.post<User>(this.URL, hero);
  }

  public delete(hero: User): Observable<User> {
    return this.httpClient.delete<User>(`${this.URL}/${hero._id}`);
  }

  public get(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.URL}/${id}`);
  }

  public list(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(this.URL);
  }

  public update(hero: User): Observable<User> {
    return this.httpClient.put<User>(`${this.URL}/${hero._id}`, hero);
  }

}
