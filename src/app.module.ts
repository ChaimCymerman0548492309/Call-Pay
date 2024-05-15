import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/users.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'floppy.db.elephantsql.com',
      port: 5432, 
      username: 'occwqvgp',
      password: 'OEdRSaRRqe8n2Gg9y3yJvynzQ1ItH0P4',
      database: 'occwqvgp',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {}
