import { inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Menu } from '../model/menu';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic-service';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends GenericService<Menu> {
  private menuChange = new Subject<Menu[]>();

   constructor() { 
      super(
        inject(HttpClient),
        `${environment.HOST}/menus`
      );
    }

    getMenusByUser(username: string){
      return this.http.post<Menu[]>(`${environment.HOST}/menus/user`, username);
    }

    getMenuChange(){
      return this.menuChange.asObservable();
    }

    setMenuChange(menus: Menu[]){
      this.menuChange.next(menus);
    }
}
