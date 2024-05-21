import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://reqres.in'
  constructor(private httpClient: HttpClient) { }
  getUsers<T>() {
    return lastValueFrom(this.httpClient.get<T>(this.url + '/api/users?page=2'))
  }
}
