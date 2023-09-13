import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from './config/database.config';


@Module({
  imports: [
    ArticlesModule,
    ConfigModule.forRoot({ isGlobal: true, load: [databaseConfig] }),
    MongooseModule.forRootAsync({
      useFactory: (config) => ({
        uri: config.get('database.uri'),
      }),
      inject: [ConfigService],
    }),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
