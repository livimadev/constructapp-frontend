import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material-module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CustomerService } from '../../../services/customer-service';
import { Customer } from '../../../model/customer';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-customer-edit',
  imports: [MaterialModule, ReactiveFormsModule, RouterLink],
  templateUrl: './customer-edit-component.html',
  styleUrl: './customer-edit-component.css',
})
export class CustomerEditComponent {
  form: FormGroup;
  id: number;
  isEdit: boolean;

  constructor(
    private route: ActivatedRoute, // Tomar y conocer algo de la url activa
    private customerService: CustomerService,
    private router: Router // Sirve para navegar a otra ruta
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      idCustomer: new FormControl(),
      dni: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl(''),
    });

    this.route.params.subscribe((data) => {
      this.id = data['id'];
      this.isEdit = data['id'] != null;
      this.initForm();
    });
  }

  initForm() {
    if (this.isEdit) {
      this.customerService.findById(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idCustomer: new FormControl(data.idCustomer),
          dni: new FormControl(data.dni),
          firstName: new FormControl(data.firstName),
          lastName: new FormControl(data.lastName),
          phone: new FormControl(data.phone),
          email: new FormControl(data.email),
          address: new FormControl(data.address),
        });
      });
    }
  }

  operate() {
    const customer: Customer = new Customer();
    customer.idCustomer = this.form.value['idCustomer'];
    // const x = this.form.controls['idCustomer'].value;
    // const y = this.form.get['idCustomer'].value;
    customer.dni = this.form.value['dni'];
    customer.firstName = this.form.value['firstName'];
    customer.lastName = this.form.value['lastName'];
    customer.phone = this.form.value['phone'];
    customer.email = this.form.value['email'];
    customer.address = this.form.value['address'];

    if (this.isEdit) {
      // EDIT
      // this.customerService.update(this.id, customer).subscribe();
      // PRACTICA COMUN, NO IDEAL
      this.customerService.update(this.id, customer).subscribe(() => {
        this.customerService.findAll().subscribe((data) => {
          this.customerService.setCustomerChange(data);
          this.customerService.setMessageChange('CUSTOMER UPDATED!');
        });
      });      
    } else {
      // SAVE
      // this.customerService.save(customer).subscribe();
      // PRACTICA IDEAL
      this.customerService
        .save(customer)
        .pipe(switchMap(() => this.customerService.findAll()))
        .subscribe((data) => {
          this.customerService.setCustomerChange(data);
          this.customerService.setMessageChange('CUSTOMER CREATED!');
        });
    }

    this.router.navigate(['pages/customer']);
  }
}
