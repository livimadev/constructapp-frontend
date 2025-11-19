import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Project } from '../model/project';
import { GenericService } from './generic-service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService  extends GenericService<Project>{ 
  //private url: string = `${environment.HOST}/projects`;

  constructor() {
    super(
      inject(HttpClient),
      `${environment.HOST}/projects`
    );
  }

  /*constructor(private http: HttpClient){}  

  findAll(){
    return this.http.get<Project[]>(this.url);
  }
    */
}
