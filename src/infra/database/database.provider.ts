import { DataSource, getMetadataArgsStorage } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from './database.strategy';

export const DatabaseProvider = [
  {
    provide: DataSource,
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        applicationName: 'Guayaba-API',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_DATABASE'),
        entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
        synchronize: false,
        logging: Boolean(configService.get('DB_LOGGING')),
        namingStrategy: new SnakeNamingStrategy(),
        useUTC: true,
      });

      if (!dataSource.isInitialized) await dataSource.initialize();

      return dataSource;
    },
    inject: [ConfigService],
  },
];
