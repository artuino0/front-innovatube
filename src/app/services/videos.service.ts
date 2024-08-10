import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  private videoUrl = 'http://localhost:3000/api/v1/videos';
  constructor(private http: HttpClient) {}

  getMostPopular(): Observable<any> {
    return this.http.get(`${this.videoUrl}/list`);
  }
}
