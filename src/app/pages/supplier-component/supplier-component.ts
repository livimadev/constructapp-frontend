import { Component, ViewChild } from '@angular/core';
import { SupplierService } from '../../services/supplier-service';
import { Supplier } from '../../model/supplier';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../../material/material-module';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-supplier',
  imports: [MaterialModule, RouterLink],
  templateUrl: './supplier-component.html',
  styleUrl: './supplier-component.css',
})
export class SupplierComponent {
  // suppliers: Supplier[];
  dataSource: MatTableDataSource<Supplier>;

  columnsDefinitions = [
    { def: 'idSupplier', label: 'idSupplier', hide: true },
    { def: 'ruc', label: 'ruc', hide: false },
    { def: 'name', label: 'name', hide: false },
    { def: 'phone', label: 'phone', hide: false },
    { def: 'email', label: 'email', hide: false },
    { def: 'address', label: 'address', hide: false },
    { def: 'actions', label: 'actions', hide: false },
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private supplierService: SupplierService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.supplierService.findAll().subscribe(data => this.createTable(data));
  }

  createTable(data: Supplier[]) {
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
