import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as connectionOptions from './config/database.config';
import { UserModule } from './components/user/user.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [TypeOrmModule.forRoot(connectionOptions), UserModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
