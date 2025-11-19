import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../../material/material-module';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { Supplier } from '../../../model/supplier';
import { SupplierService } from '../../../services/supplier-service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-supplier-dialog-component',
  imports: [
    MaterialModule,
    MatDialogModule,
    FormsModule
  ],
  templateUrl: './supplier-dialog-component.html',
  styleUrl: './supplier-dialog-component.css'
})
export class SupplierDialogComponent {
  supplier: Supplier;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Supplier,
    private _dialogRef: MatDialogRef<SupplierDialogComponent>,
    private supplierService: SupplierService,
  ) {}

  ngOnInit(): void {
    this.supplier = {... this.data}; //spread operator
    //this.supplier = this.data;
    /*this.supplier = new Supplier();
    this.supplier.idSupplier = this.data.idSupplier;
    this.supplier.name = this.data.name;
    this.supplier.phone = this.data.phone;
    this.supplier.ruc = this.data.ruc;
    this.supplier.email = this.data.email;*/
  }

  close(){
    this._dialogRef.close();
  }

  operate(){
    if(this.supplier != null && this.supplier.idSupplier > 0){
      //UPDATE
      this.supplierService.update(this.supplier.idSupplier, this.supplier)
        .pipe(switchMap ( () => this.supplierService.findAll()))
        .subscribe(data => {
          this.supplierService.setSupplierChange(data);
          this.supplierService.setMessageChange('UPDATED!');
        });
    }else{
      //INSERT
      this.supplierService.save(this.supplier)
        .pipe(switchMap ( () => this.supplierService.findAll()))
        .subscribe(data => {
          this.supplierService.setSupplierChange(data);
          this.supplierService.setMessageChange('CREATED!');
        });
    }

    this.close();
  }
}
