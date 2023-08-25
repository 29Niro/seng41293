import { Module } from '@nestjs/common';
import { DailyStockService } from './services/daily-stock.service';
import { DailyStockController } from './controllers/daily-stock.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DailyStockSchema } from './schema/daily-stock.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'DailyStock', schema: DailyStockSchema }])],
  controllers: [DailyStockController],
  providers: [DailyStockService],
})
export class DailyStockModule {}
