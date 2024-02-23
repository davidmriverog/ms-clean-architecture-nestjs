import { Test, TestingModule } from '@nestjs/testing';
import { PermissionBO } from '../../../domain/model/permission.bo';
import { PERMISSION_SERVICE } from '../../../domain/consts/permission.const';
import { GetAllPermissionUseCase } from '../../../application/use-cases/getAll.uc';

describe('GetAllPermissionUseCase', () => {
  let getAllMock: jest.Mock<any>;

  let getAllPermissionUseCase: GetAllPermissionUseCase;

  beforeEach(async () => {
    getAllMock = jest.fn();

    const PermissionServiceMock = {
      provide: PERMISSION_SERVICE,
      useValue: {
        getAll: getAllMock,
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [GetAllPermissionUseCase, PermissionServiceMock],
    }).compile();

    getAllPermissionUseCase = module.get<GetAllPermissionUseCase>(
      GetAllPermissionUseCase,
    );
  });

  it('should be defined', () => {
    expect(getAllPermissionUseCase).toBeDefined();
  });

  it('should get all permssions', async () => {
    const roles: PermissionBO[] = [
      {
        id: 1,
        name: 'test',
        code: 'code',
        description: 'test',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ];

    getAllMock.mockImplementation(() => roles);

    const result = await getAllPermissionUseCase.exec();

    expect(result.isSuccessful).toBeTruthy();
    expect(result.value).toEqual(roles);
  });

  it('should be errors get all permissions with message not_record_found', async () => {
    getAllMock.mockImplementation(() => []);

    const result = await getAllPermissionUseCase.exec();

    expect(result.isFaliure).toBeTruthy();
    expect(result.error).toEqual('Record not found');
  });

  it('should be errors get all permissions cause by portErrors', async () => {
    getAllMock.mockRejectedValueOnce(new Error('error'));

    const result = await getAllPermissionUseCase.exec();

    expect(result.isFaliure).toBeTruthy();
    expect(result.error).toEqual('error');
  });
});
