import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer-service';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class CustomerComponent {
  customers: Customer[];

  constructor(private customerService: CustomerService){}

  ngOnInit(): void{
    this.customerService.findAll().subscribe(data => this.customers = data);
  }
}
