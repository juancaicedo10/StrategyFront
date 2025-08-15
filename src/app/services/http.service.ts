import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvResolver } from '../core/resolvers/EnvResolver';

@Injectable({

providedIn: 'root'
})
export class HttpService {
  constructor(private readonly http$: HttpClient) {}

  get<T>(url: string, params?: HttpParams): Observable<T> {
    const baseUrl = new EnvResolver().resolveUrl();
    return this.http$.get<T>(`${baseUrl}/${url}`, { params });
  }
}
