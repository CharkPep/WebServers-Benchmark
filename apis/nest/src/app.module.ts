import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {BannerService} from "./app.service";


@Module({
  imports: [],
  controllers: [AppController],
  providers: [BannerService],
})
export class AppModule {}
