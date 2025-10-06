import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private url: string = `${environment.HOST}/projects`;

  constructor(private http: HttpClient){}  

  findAll(){
    return this.http.get<Project[]>(this.url);
  }
}
