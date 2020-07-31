import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { getRepository, Repository, EntityRepository } from 'typeorm';
import { AbstractRepository } from './common';

@Injectable()
@EntityRepository(User)
export class UsersRepository extends AbstractRepository {
  constructor(private userRepository: Repository<User>) {
    super();
    this.userRepository = getRepository(User);
  }

  public async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
