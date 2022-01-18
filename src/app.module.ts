import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [ArticlesModule, MongooseModule.forRoot('mongodb://monguinho:alfaiateMongo@192.168.100.67:27017/backend?authSource=admin&readPreference=primary&directConnection=true&ssl=false')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
