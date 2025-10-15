import { Component, inject, ViewChild } from '@angular/core';
import { CustomerService } from '../../services/customer-service';
import { Customer } from '../../model/customer';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MaterialModule } from '../../material/material-module';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer',
  imports: [MaterialModule, RouterOutlet, RouterLink],
  templateUrl: './customer-component.html',
  styleUrl: './customer-component.css',
})
export class CustomerComponent {
  // customers: Customer[];
  dataSource: MatTableDataSource<Customer>;
  // displayedColumns: string[] = ['idCustomer', 'dni', 'firstName', 'lastName', 'phone','address'];
  columnsDefinitions = [
    { def: 'idCustomer', label: 'idCustomer', hide: true },
    { def: 'dni', label: 'dni', hide: false },
    { def: 'firstName', label: 'firstName', hide: false },
    { def: 'lastName', label: 'lastName', hide: false },
    { def: 'phone', label: 'phone', hide: false },
    { def: 'email', label: 'email', hide: false },
    { def: 'address', label: 'address', hide: false },
    { def: 'actions', label: 'actions', hide: false },
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // constructor(private customerService: CustomerService){}
  private customerService = inject(CustomerService);

  ngOnInit(): void {
    // this.customerService.findAll().subscribe(data => this.customers = data);
    
    /*this.customerService.findAll().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });*/
    this.customerService.findAll().subscribe( data => this.createTable(data));
    this.customerService.getCustomerChange().subscribe(data => this.createTable(data));
  }

  createTable(data: Customer[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getDisplayedColumns() {
    return this.columnsDefinitions.filter((cd) => !cd.hide).map((cd) => cd.def);
  }

  applyFilter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
