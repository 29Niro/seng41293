import { Injectable } from '@nestjs/common';
import { CreateDailyStockDto } from './dto/create-daily-stock.dto';
import { UpdateDailyStockDto } from './dto/update-daily-stock.dto';
import { DailyStock } from './entities/daily-stock.entity';

@Injectable()
export class DailyStockService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_createDailyStockDto: CreateDailyStockDto) {
    return 'This action adds a new dailyStock';
  }

  findAll():Array<DailyStock> {
    return [
      {
        date: new Date(),
        amount: 100,
      },
      {
        date: new Date(),
        amount: 200,
      },
      {
        date: new Date(),
        amount: 300,
      },
      {
        date: new Date(),
        amount: 400,
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} dailyStock`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateDailyStockDto: UpdateDailyStockDto) {
    return `This action updates a #${id} dailyStock`;
  }

  remove(id: number) {
    return `This action removes a #${id} dailyStock`;
  }
}
