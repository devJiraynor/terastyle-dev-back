import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PocketmonModule } from './pocketmon/pocketmon.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/pocketmon'), 
    PocketmonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
