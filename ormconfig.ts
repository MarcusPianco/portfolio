import { ConnectionOptions } from 'typeorm';
import * as config from 'config';

const dbConfig = config.get('db');
const configuration: ConnectionOptions = {
  type: dbConfig.type,
  host: process.env.DB_HOST || dbConfig.host,
  port: process.env.DB_PORT || dbConfig.port,
  username: process.env.DB_USERNAME || dbConfig.username,
  password: process.env.DB_PASSWORD || dbConfig.password,
  database: process.env.DB_NAME || dbConfig.database,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
  migrationsRun: false,
  dropSchema: false || dbConfig.dropSchema,
  logging: true,
  logger: 'simple-console',
  migrations: [__dirname + '/src/database/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export = configuration;
