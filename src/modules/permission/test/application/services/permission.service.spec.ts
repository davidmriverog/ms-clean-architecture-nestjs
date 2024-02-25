import { Provider } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { PERMISSION_PORT } from '../../../domain/consts/permission.const';
import { PermissionDomainService } from '../../../application/services/permission.service';

describe('PermissionDomainService', () => {
  let permissionDomainService: PermissionDomainService;

  let getAllMock: jest.Mock<any>;

  beforeEach(async () => {
    getAllMock = jest.fn();

    const PermissionPortMock = {
      provide: PERMISSION_PORT,
      useValue: {
        getAll: getAllMock,
      },
    } as Provider;

    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [PermissionPortMock, PermissionDomainService],
    }).compile();

    permissionDomainService = module.get<PermissionDomainService>(
      PermissionDomainService,
    );
  });

  it('should be defined', () => {
    expect(permissionDomainService).toBeDefined();
  });

  // tests
});
