import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { AppConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema: Joi.object({
        APP_NAME: Joi.string().default('BackEnd'),
        APP_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        APP_PORT: Joi.number().default(3000),
        APP_TITLE: Joi.string().default('Challenge Space Flight News 🏅'),
        APP_DESC: Joi.string().default('The challenge backend of Coodash'),
        APP_VERSION: Joi.string().default('1.0'),
        DB_HOST: Joi.string().default('localhost'),
        DB_PORT: Joi.number().default(27017),
        DB_USR: Joi.string().default(''),
        DB_PSW: Joi.string().default(''),
        DB_DB: Joi.string().default('backend')
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}