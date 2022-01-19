import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  env: process.env.APP_ENV,
  name: process.env.APP_NAME,
  port: process.env.APP_PORT,
  title: process.env.APP_TITLE,
  desc: process.env.APP_DESC,
  version: process.env.APP_VERSION,
  mongodb: `mongodb://${process.env.DB_USR}:${process.env.DB_PSW}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DB}?authSource=admin&readPreference=primary&directConnection=true&ssl=false`,
}));