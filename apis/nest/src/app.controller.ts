import { Controller, Get } from '@nestjs/common';
import {BannerService} from "./app.service";

@Controller('api')
export class AppController {
  constructor(private bannerService : BannerService) {
  }
  @Get('banner')
  async getHello(): Promise<string> {
    const response = await this.bannerService.getBanner()
    return JSON.stringify(response);
  }
}
