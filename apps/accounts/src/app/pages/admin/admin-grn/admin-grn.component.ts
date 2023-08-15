import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AppService } from '../../../services/app/app.service';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngxs/store';
import { ShowLoading, UpdateEmail } from '../../../state/app/app.actions';
import { MatInputModule } from '@angular/material/input';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'seng41293-admin-grn',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.scss'],
})
export class AdminGrnComponent {
  @Input({ required: true }) label!: string;
  @Output() update = new EventEmitter<string>();

  emailCtrl = new FormControl();

  constructor(private store: Store) {}
  toggle() {
    this.store.dispatch(new ShowLoading(true));
  }

  updateValue() {
    this.store.dispatch(new UpdateEmail(this.emailCtrl.value));
    console.log(this.emailCtrl.value);
  }
}
