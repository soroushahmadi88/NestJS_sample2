import { Injectable } from '@nestjs/common';
import { User } from './users.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(cat: User) {
    this.users.push(cat);
  }

  findAll(): User[] {
    return this.users;
  }
}
