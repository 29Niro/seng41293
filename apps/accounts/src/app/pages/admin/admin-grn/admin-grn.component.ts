import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {
  Firestore,
  addDoc,
  collectionData,
  collection,
} from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
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

  firestore: Firestore = inject(Firestore);

  grns$: Observable<GRN[]>;

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

  grnCollection = collection(this.firestore, 'grn');

  // constructor() {
  //   this.grns$ = collectionData(this.grnCollection) as Observable<GRN[]>;
  //   // this.grns$.subscribe((d)=>{
  //   //   console.log(d);
  //   // })
  // }

  //this constructor for get date properly
  constructor() {
    this.grns$ = collectionData(this.grnCollection).pipe(
      map((grns: any[]) => {
        return grns.map((grn: any) => ({
          ...grn,
          date: grn.date.toDate(),
        }));
      })
    );
  }

  async onSave() {
    const date = new Date(this.dateCtrl.value);
    // console.log(this.grnFormGroup.value);
    const toSave = {
      ...this.grnFormGroup.value,
      date,
    };
    await addDoc(this.grnCollection, toSave);
  }

  // same as above
  // async onSave() {
  //   await addDoc(this.grnCollection,
  //     {
  //       date: new Date(this.dateCtrl.value),
  //       customer: {
  //         name: this.nameCtrl.value,
  //         phone: this.phoneCtrl.value,
  //       },
  //     }
  //   );
  // }
}
