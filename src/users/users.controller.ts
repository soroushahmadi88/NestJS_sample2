import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.interface';

@Controller('users')
export class UsersController {
  /*

  */
  constructor(private userService: UsersService ) {}

  @Post()
  async create(@Body() user: User) {
    this.userService.create(user);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
