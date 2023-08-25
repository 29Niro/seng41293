import { Injectable } from '@nestjs/common';
import { CreateDailyStockDto } from '../dto/create-daily-stock.dto';
import { UpdateDailyStockDto } from '../dto/update-daily-stock.dto';
import { DailyStock, DailyStockDocument } from '../schema/daily-stock.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DailyStockService {
  constructor(@InjectModel(DailyStock.name) private dailyStockModel: Model<DailyStock>) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_createDailyStockDto: CreateDailyStockDto) {
    return 'This action adds a new dailyStock';
  }

  findAll():Promise<DailyStockDocument[]> {
    return this.dailyStockModel.find().exec();
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
