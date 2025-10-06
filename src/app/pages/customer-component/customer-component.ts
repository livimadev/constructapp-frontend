import { Component, inject } from '@angular/core';
import { CustomerService } from '../../services/customer-service';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer-component.html',
  styleUrl: './customer-component.css'
})
export class CustomerComponent {
  customers: Customer[];

  // constructor(private customerService: CustomerService){}
  private customerService = inject(CustomerService);

  ngOnInit(): void{
    this.customerService.findAll().subscribe(data => this.customers = data);
  }
}
