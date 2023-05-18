import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../model/User';


@Injectable({
    providedIn: 'root'
  })

export class UserService {
  
    constructor(private readonly http: HttpClient) { }    

  /**
   * Service List Users
   * @returns list Users.
   */
  public getListUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/testbusiness/users");
  }

  /**
   * Service List Users
   * @returns list Users.
   */
  public getUser(id:string): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/testbusiness/users/${id}`);
  }

}