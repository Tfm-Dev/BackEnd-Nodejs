import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Home')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({
    description: "Back-end Challenge 2021 🏅 - Space Flight News",
    type: String
  })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
