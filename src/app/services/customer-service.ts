import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';
import { Subject } from 'rxjs';
import { GenericService } from './generic-service';

@Injectable({
  providedIn: 'root'
})

export class CustomerService extends GenericService<Customer> {
  //private url: string = `${environment.HOST}/customers`;
  private customerChange: Subject<Customer[]> = new Subject<Customer[]>;
  private messageChange: Subject<string> = new Subject<string>;

  constructor() {
    super(
      inject(HttpClient),
      `${environment.HOST}/customers`
    );
  }

  listPageable(p: number, s: number) {
    return this.http.get<any>(`${environment.HOST}/customers/pageable?page=${p}&size=${s}`);
  }

  //constructor(private http: HttpClient){}
  
  /*findAll(){
    return this.http.get<Customer[]>(this.url);
  }

  findById(id: number){
    return this.http.get<Customer>(`${this.url}/${id}`);
  }

  save(customer: Customer){
    return this.http.post(this.url, customer);
  }

  update(id: number, customer: Customer){
    return this.http.put(`${this.url}/${id}`, customer);
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
*/

  //////////////////////////
  setCustomerChange(data: Customer[]){
    this.customerChange.next(data);
  }

  getCustomerChange(){
    return this.customerChange.asObservable();
  }

  setMessageChange(data: string){
    this.messageChange.next(data);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
