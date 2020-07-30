import { Module } from '@nestjs/common';


import { TypeOrmModule } from '@nestjs/typeorm';
import * as typeOrmConfig from '../ormconfig';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
