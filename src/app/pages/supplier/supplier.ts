import { Component } from '@angular/core';
import { SupplierService } from '../../services/supplier-service';
import { Supplier } from '../../model/supplier';

@Component({
  selector: 'app-supplier',
  imports: [],
  templateUrl: './supplier.html',
  styleUrl: './supplier.css'
})

export class SupplierComponent {
  suppliers: Supplier[];

  constructor(private supplierService: SupplierService){}

  ngOnInit():void{
    // this.supplierService.findAll().subscribe(data => console.log(data));
    this.supplierService.findAll().subscribe(data => this.suppliers = data);
  }
}
