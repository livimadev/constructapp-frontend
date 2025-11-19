import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../model/supplier';
import { Subject } from 'rxjs';
import { GenericService } from './generic-service';

@Injectable({
  providedIn: 'root'
})

// http://localhost:9090/suppliers
export class SupplierService extends GenericService<Supplier> {
  //private url: string =  `${environment.HOST}/suppliers`;
  private supplierChange: Subject<Supplier[]> = new Subject<Supplier[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor() {
    super(
      inject(HttpClient),
      `${environment.HOST}/suppliers`
    );
  }

  //constructor(private http: HttpClient){}

  /*findAll(){
    // lista de proveedores
    // return this.http.get(this.url);
    return this.http.get<Supplier[]>(this.url);
  }

  findById(id: number){
      return this.http.get<Supplier>(`${this.url}/${id}`);
    }
  
    save(customer: Supplier){
      return this.http.post(this.url, customer);
    }
  
    update(id: number, customer: Supplier){
      return this.http.put(`${this.url}/${id}`, customer);
    }
  
    delete(id: number){
      return this.http.delete(`${this.url}/${id}`);
    }
  */

    //////////////////////////
    setSupplierChange(data: Supplier[]){
      this.supplierChange.next(data);
    }
  
    getSupplierChange(){
      return this.supplierChange.asObservable();
    }
  
    setMessageChange(data: string){
      this.messageChange.next(data);
    }
  
    getMessageChange(){
      return this.messageChange.asObservable();
    }
}
