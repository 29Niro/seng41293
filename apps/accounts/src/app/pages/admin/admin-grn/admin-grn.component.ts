import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
interface GRN {
  date: Date;
  customer: {
    name: string;
    phone: string;
  };
}
@Component({
  selector: 'seng41293-admin-grn',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.scss'],
})
export class AdminGrnComponent {
  @Input({ required: true }) label!: string;

  dateCtrl = new FormControl();
  nameCtrl = new FormControl();
  phoneCtrl = new FormControl();

  customerCtrl = new FormGroup({
    name: this.nameCtrl,
    phone: this.phoneCtrl,
  });

  grnFormGroup = new FormGroup({
    date: this.dateCtrl,
    customer: this.customerCtrl,
  });

  onSave(){
    console.log(this.grnFormGroup.value);
  }
}
