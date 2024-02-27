import { Test, TestingModule } from '@nestjs/testing';
import { Provider } from '@nestjs/common';
import { UpdatePermissionUseCase } from '../../../application/use-cases/update-permission.uc';
import { PERMISSION_SERVICE } from '../../../domain/consts/permission.const';
import { PermissionBO } from '@modules/permission/domain/model/permission.bo';
import { CreatePermissionDto } from '@modules/permission/infrastructure/http/dto/permission.dto';

describe('UpdatePermissionUseCase', () => {
  let updateMock: jest.Mock<any>;

  let updatePermissionUseCase: UpdatePermissionUseCase;

  beforeEach(async () => {
    updateMock = jest.fn();

    const PermissionServiceMocked = {
      provide: PERMISSION_SERVICE,
      useValue: {
        update: updateMock,
      },
    } as Provider;

    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdatePermissionUseCase, PermissionServiceMocked],
    }).compile();

    updatePermissionUseCase = module.get<UpdatePermissionUseCase>(
      UpdatePermissionUseCase,
    );
  });

  it('should be instance', () => {
    expect(updatePermissionUseCase).toBeDefined();
  });

  it('a update permission successful', async () => {
    const permissionDto: CreatePermissionDto = {
      name: 'test',
      description: 'test',
      code: 'test',
    };

    const permission: PermissionBO = {
      id: 1,
      name: 'test',
      code: 'test',
      description: 'test',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    };

    // simular el update como si estuviese ejecutandose realmente
    updateMock.mockImplementation(() => permission);

    const result = await updatePermissionUseCase.exec(1, permissionDto);

    expect(result.isSuccessful).toBeTruthy();
    expect(result.value).toEqual(permission);
  });

  it('a update permission with errors', async () => {
    const permissionDto: CreatePermissionDto = {
      name: 'test',
      description: 'test',
      code: 'test',
    };

    // simular el update como si estuviese ejecutandose realmente
    updateMock.mockRejectedValue(new Error('Error connected to database'));

    const result = await updatePermissionUseCase.exec(1, permissionDto);

    expect(result.isFaliure).toBeTruthy();
    expect(result.error).toEqual('Error connected to database');
  });
});
