import { RoleDto } from './../../domain/dto/role.dto';
import { RoleBO } from './../../domain/role.bo';
import { Test } from '@nestjs/testing';
import { RoleCreateUseCase } from './role-create.uc';
import { RoleProviderEnum } from './../../domain/enums/role-provider.enum';
import { Result } from '@libs/infra';

describe('RoleCreate Use Case', () => {
  let roleCreateUseCase: RoleCreateUseCase;

  let createMocked: jest.Mock<any>;
  let transactionMocked: jest.Mock<any>;

  beforeEach(async () => {
    createMocked = jest.fn();
    transactionMocked = jest.fn();

    const RoleRepositoryPort = {
      provide: RoleProviderEnum.ROLE_ADAPTER_PORT,
      useValue: {
        create: createMocked,
        transaction: transactionMocked,
      },
    };

    const moduleRef = await Test.createTestingModule({
      providers: [RoleRepositoryPort, RoleCreateUseCase],
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
    transactionMocked.mockResolvedValue(Result.success(expectResult));

    const results = await roleCreateUseCase.execute(<RoleDto>{
      description: 'Test',
      roleCode: 'Test',
    });

    expect(results.isSuccessful).toBeTruthy();
    expect(results.value).toBe(expectResult);
  });

  it('Should be fails created', async () => {
    createMocked.mockResolvedValue(Result.fail('Error'));
    transactionMocked.mockResolvedValue(Result.fail('Error'));

    const results = await roleCreateUseCase.execute(<RoleDto>{
      description: 'Test',
      roleCode: 'Test',
    });

    expect(results.isFaliure).toBeTruthy();
    expect(results.error).toEqual('Error');
  });
});
