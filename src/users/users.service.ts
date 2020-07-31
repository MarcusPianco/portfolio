import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  public async getAllUsers(): Promise<User[]> {
    /// apply business logic and...
    return this.userRepository.getAllUsers();
  }
}
