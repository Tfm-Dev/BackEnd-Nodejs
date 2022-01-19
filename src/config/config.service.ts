import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}
  
  get name(): string {
    return this.configService.get<string>('app.name');
  }
  get env(): string {
    return this.configService.get<string>('app.env');
  }
  get port(): number {
   return Number(this.configService.get<number>('app.port'));
  }
  get title(): string {
    return this.configService.get<string>('app.title');
  }
  get desc(): string {
    return this.configService.get<string>('app.desc');
  }
  get version(): string {
    return this.configService.get<string>('app.version')
  }
  get mongodb(): string {
    return this.configService.get<string>('app.mongodb');
  }
}