import { Module } from '@nestjs/common';
import { DailyStockModule } from './daily-stock/daily-stock.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getEnvPath } from './app.helper';

const envFilePath: string = getEnvPath(`${__dirname}/environments`);
console.log(`envFilePath: ${envFilePath}`);

@Module({
  imports: [
    DailyStockModule,
    ConfigModule.forRoot({ envFilePath }),
    // MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGO_URL'),
      }),
    }),
  ],
})
export class AppModule {}
