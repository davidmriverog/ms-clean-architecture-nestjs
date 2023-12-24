import { Test } from '@nestjs/testing';
import { Result } from '@libs/infra';
import { RoleProviderEnum } from './../../domain/enums/role-provider.enum';

import { RoleBO } from './../../domain/role.bo';
import { RoleDto } from './../../domain/dto/role.dto';
import { RoleCreateUseCase } from './role-create.uc';

describe('RoleCreate Use Case', () => {
  let roleCreateUseCase: RoleCreateUseCase;

  let createMocked: jest.Mock<any>;

  beforeEach(async () => {
    createMocked = jest.fn();

    const RoleRepositoryAdapterPort = {
      provide: RoleProviderEnum.ROLE_ADAPTER_PORT,
      useValue: {
        create: createMocked,
      },
    };

    const moduleRef = await Test.createTestingModule({
      providers: [RoleRepositoryAdapterPort, RoleCreateUseCase],
    }).compile();

    roleCreateUseCase = moduleRef.get<RoleCreateUseCase>(RoleCreateUseCase);
  });

  it('should be define', () => {
    expect(roleCreateUseCase).toBeDefined();
  });

  it('Should be created success', async () => {
    const expectResult = <RoleBO>{
      roleId: 1,
      description: 'Test',
      roleCode: 'Test',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    createMocked.mockResolvedValue(Result.success(expectResult));

    const results = await roleCreateUseCase.execute(<RoleDto>{
      description: 'Test',
      roleCode: 'Test',
    });

    expect(results.isSuccessful).toBeTruthy();
    expect(results.value).toBe(expectResult);
  });

  it('Should be fails created', async () => {
    createMocked.mockResolvedValue(Result.fail('Error'));

    const results = await roleCreateUseCase.execute(<RoleDto>{
      description: 'Test',
      roleCode: 'Test',
    });

    expect(results.isFaliure).toBeTruthy();
    expect(results.error).toEqual('Error');
  });
});
