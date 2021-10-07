import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';

@Module({
  imports: [ProductModule, MongooseModule.forRoot('mongodb://localhost/api-coder-nestjs', {
    useNewUrlParser: true
  }), MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
