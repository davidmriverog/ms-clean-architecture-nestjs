import { Test } from '@nestjs/testing';
import { Result } from '@libs/infra';
import { RoleProviderEnum } from './../../domain/enums/role-provider.enum';

import { RoleDto } from './../../domain/dto/role.dto';
import { RoleEditUseCase } from './role-edit.uc';

describe('RoleEdit Use Case', () => {
  let roleEditUseCase: RoleEditUseCase;

  let editUseCaseMock: jest.Mock<any>;

  beforeEach(async () => {
    editUseCaseMock = jest.fn();

    const RoleRepositoryAdapterPort = {
      provide: RoleProviderEnum.ROLE_ADAPTER_PORT,
      useValue: {
        update: editUseCaseMock,
      },
    };

    const moduleRef = await Test.createTestingModule({
      providers: [RoleRepositoryAdapterPort, RoleEditUseCase],
    }).compile();

    roleEditUseCase = moduleRef.get<RoleEditUseCase>(RoleEditUseCase);
  });

  it('should be define', () => {
    expect(roleEditUseCase).toBeDefined();
  });

  it('Should be edit success', async () => {
    editUseCaseMock.mockResolvedValue(
      Result.success({
        affected: true,
      }),
    );

    const results = await roleEditUseCase.execute(1, <RoleDto>{
      description: 'Test',
      roleCode: 'Test',
    });

    expect(results.isSuccessful).toBeTruthy();
    expect(results.value).toEqual({
      affected: true,
    });
  });

  it('Should be fails created', async () => {
    editUseCaseMock.mockResolvedValue(Result.fail('Error'));

    const results = await roleEditUseCase.execute(1, <RoleDto>{
      description: 'Test',
      roleCode: 'Test',
    });

    expect(results.isFaliure).toBeTruthy();
    expect(results.error).toEqual('Error');
  });
});
