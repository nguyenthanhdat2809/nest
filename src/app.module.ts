import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as connectionOptions from './config/database.config';
import { UserModule } from './components/user/user.module';
import { CoreModule } from './core/core.module';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './core/exception-filters/http-exception.filter';

@Module({
  imports: [TypeOrmModule.forRoot(connectionOptions), UserModule, CoreModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
