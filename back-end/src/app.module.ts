import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaintingModule } from './painting/painting.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeorm.config';
import { UserModule } from './user/user.module';

@Module({
  imports: [PaintingModule, TypeOrmModule.forRoot(typeOrmConfig), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
