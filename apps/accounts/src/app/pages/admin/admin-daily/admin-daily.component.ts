import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyStockService } from '../../../services/daily-stock/daily-stock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'seng41293-admin-daily',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-daily.component.html',
  styleUrls: ['./admin-daily.component.scss']
})
export class AdminDailyComponent {
  dailyStock$: Observable<unknown>;
  constructor(private dailyStockService: DailyStockService) {
    this.dailyStock$ = this.dailyStockService.findAll();
  }
}
