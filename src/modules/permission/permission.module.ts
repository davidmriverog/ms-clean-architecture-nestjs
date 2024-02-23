import { Module } from '@nestjs/common';
import { DatabaseModule } from '@libs/infra';
import { ConfigModule } from '@nestjs/config';

import { PermissionController } from './infrastructure/http/controller/permission.controller';

import { PermissionExceptionFilter } from './infrastructure/http/exception-filters/permission-exception.filter';
import { PERMISSION_SERVICE_PROVIDERS } from './infrastructure/providers/ports/inbound.provider';
import { PERMISSION_ENTITY_PROVIDER } from './infrastructure/providers/persistence/entity.provider';
import { PERMISSION_PORT_PROVIDERS } from './infrastructure/providers/ports/outbound.provider';
import { USE_CASES_PROVIDERS } from './infrastructure/providers/use-cases/use-cases.provider';
import { PERMISSION_MAPPER_PROVIDERS } from './infrastructure/providers/mappers/mapper.provider';

@Module({
  imports: [DatabaseModule, ConfigModule],
  controllers: [PermissionController],
  providers: [
    PermissionExceptionFilter,
    ...PERMISSION_ENTITY_PROVIDER,
    ...PERMISSION_PORT_PROVIDERS,
    ...PERMISSION_SERVICE_PROVIDERS,
    ...USE_CASES_PROVIDERS,
    ...PERMISSION_MAPPER_PROVIDERS,
  ],
  exports: [
    ...PERMISSION_ENTITY_PROVIDER,
    ...PERMISSION_PORT_PROVIDERS,
    ...PERMISSION_SERVICE_PROVIDERS,
    ...USE_CASES_PROVIDERS,
    ...PERMISSION_MAPPER_PROVIDERS,
  ],
})
export class PermissionModule {}
