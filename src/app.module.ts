import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ArticlesModule } from './articles/articles.module';

import { AppConfigModule } from './config/config.module';
import { AppConfigService } from './config/config.service';

@Module({
  imports: [ArticlesModule, AppConfigModule, MongooseModule.forRootAsync({
    imports: [AppConfigModule],
    useFactory:async (configService:AppConfigService) => ({
      uri: configService.mongodb,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    inject: [AppConfigService]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}