import { DataSource } from 'typeorm';

export const postgreDatasource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_URL ? 'database' : 'localhost',
  port: 5432,
  username: 'ROOT',
  password: 'PASSWORD',
  database: 'DATABASE',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts, .js}'],
  synchronize: true,
  migrationsRun: false,
});
