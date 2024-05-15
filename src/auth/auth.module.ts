import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';


import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { jwtConstants } from './constants';
import { User } from 'src/users/entities/users.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),

],
  controllers: [AuthController],
  providers: [AuthService ,UsersService ],
})
export class AuthModule {}


