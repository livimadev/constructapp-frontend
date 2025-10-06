import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../model/supplier';

@Injectable({
  providedIn: 'root'
})

// http://localhost:9090/suppliers
export class SupplierService {
  constructor(private http: HttpClient){}

  private url: string =  `${environment.HOST}/suppliers`;

  findAll(){
    // lista de proveedores
    // return this.http.get(this.url);
    return this.http.get<Supplier[]>(this.url);
  }
}
