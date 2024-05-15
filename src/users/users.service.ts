import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as winston from 'winston'; 

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(
    @InjectRepository(User)
    public usersRepository: Repository<User>,
    
  ) {}

  async findAll() {
    try {
      const users = await this.usersRepository.find();
      
      this.logger.log(`Users getting successfully ! `, 'UsersService');

      return users;
    } catch (error) {
      this.logger.error(`An error occurred while getting users: ${error}`);
      throw new Error('An error occurred while getting users');
    }
  }

  async findOneById(id: number) {
    try {
        const user = await this.usersRepository.findOneByOrFail({userId : id});
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        return user;
    } catch (error) {
        console.error(error);
        throw new Error(`An error occurred while getting user ${id}`);
    }
}
  async findOneBy(userName: string , password: string) {
    try {
        const user = await this.usersRepository.findOneByOrFail({username : userName} && {password : password});
        if (!user) {
            throw new Error(`User with id ${userName} not found`);
        }
        return user;
    } catch (error) {
        console.error(error);
        throw new Error(`An error occurred while getting user ${userName}`);
    }
}


  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = await this.usersRepository.save(createUserDto);
      return newUser;
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred while creating a new user');
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      await this.usersRepository.update({userId : id}, updateUserDto);
      const updatedUser = await this.usersRepository.findOneByOrFail({userId : id});
      if (!updatedUser) {
        throw new Error(`User with id ${id} not found`);
      }
      return updatedUser;
    } catch (error) {
      console.error(error);
      throw new Error(`An error occurred while updating user ${id}`);
    }
  }

  async remove(id: number) {
    try {
      const user = await this.usersRepository.findOneByOrFail({userId : id});
      if (!user) {
        throw new Error(`User with id ${id} not found`);
      }
      await this.usersRepository.remove(user);
      return `User with id ${id} has been removed`;
    } catch (error) {
      console.error(error);
      throw new Error(`An error occurred while removing user ${id}`);
    }
  }
}
