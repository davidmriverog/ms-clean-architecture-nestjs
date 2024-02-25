import { Test, TestingModule } from '@nestjs/testing';
import { PermissionBO } from '../../../domain/model/permission.bo';
import { PERMISSION_SERVICE } from '../../../domain/consts/permission.const';

import { CreatePermissionDto } from '../../../infrastructure/http/dto/permission.dto';
import { CreatePermissionUseCase } from '../../../application/use-cases/create-permission.uc';

describe('CreatePermissionUseCase', () => {
  let createMock: jest.Mock<any>;

  let createPermissionUseCase: CreatePermissionUseCase;

  beforeEach(async () => {
    createMock = jest.fn();

    const PermissionServiceMock = {
      provide: PERMISSION_SERVICE,
      useValue: {
        create: createMock,
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [CreatePermissionUseCase, PermissionServiceMock],
    }).compile();

    createPermissionUseCase = module.get<CreatePermissionUseCase>(
      CreatePermissionUseCase,
    );
  });

  it('should be defined', () => {
    expect(createPermissionUseCase).toBeDefined();
  });

  it('should be create a new permission', async () => {
    const permissionDto: CreatePermissionDto = {
      name: 'test',
      code: 'test',
      description: 'test',
    };

    const resultExpect = <PermissionBO>{
      id: 1,
      name: 'test',
      code: 'test',
      description: 'test',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    };

    createMock.mockImplementation(() => resultExpect);

    const result = await createPermissionUseCase.exec(permissionDto);

    expect(result.isSuccessful).toBeTruthy();
    expect(result.value).toEqual(resultExpect);
  });

  it('should be errors at create permissions', async () => {
    createMock.mockRejectedValueOnce(new Error('error'));

    const permissionDto: CreatePermissionDto = {
      name: 'test',
      code: 'test',
      description: 'test',
    };

    const result = await createPermissionUseCase.exec(permissionDto);

    expect(result.isFaliure).toBeTruthy();
    expect(result.error).toEqual('error');
  });
});
