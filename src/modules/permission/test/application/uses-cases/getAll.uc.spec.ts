import { Test, TestingModule } from '@nestjs/testing';
import { PermissionModule } from '../../../permission.module';
import { GetAllPermissionUseCase } from '../../../application/use-cases/getAll.uc';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@libs/infra';

describe('GetAllPermissionUseCase', () => {
  let getAllPermissionUseCase: GetAllPermissionUseCase;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, PermissionModule, DatabaseModule],
    }).compile();

    getAllPermissionUseCase = module.get<GetAllPermissionUseCase>(
      GetAllPermissionUseCase,
    );
  });

  it('should be defined', () => {
    expect(getAllPermissionUseCase).toBeDefined();
  });
});
