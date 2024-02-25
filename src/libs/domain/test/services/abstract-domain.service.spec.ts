import { QueryRunner } from 'typeorm';
import { IPortOutbound } from '../../../domain/ports/outbound.port';
import { AbstractDomainService } from '../../services/abstract-domain.service';

class Dummy {
  id: string | number;
}

class AbtractDummy extends AbstractDomainService<Dummy> {}

class DummyPort implements IPortOutbound<Dummy> {
  async getAll(): Promise<Dummy[]> {
    const dummies: Array<Dummy> = new Array<Dummy>();

    return dummies;
  }

  async getById(id: number): Promise<Dummy> {
    const dummies: Array<Dummy> = new Array<Dummy>();

    dummies.push({ id: 1 });

    const find = dummies.find((item) => item.id === id);

    return find;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(entityDto: Dummy, tr?: QueryRunner): Promise<Dummy> {
    const dummies: Array<Dummy> = new Array<Dummy>();

    dummies.push(entityDto);

    return entityDto;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: number, entityDto: Dummy, tr?: QueryRunner): Promise<Dummy> {
    const dummies: Array<Dummy> = new Array<Dummy>();

    dummies.push(entityDto);

    const find = dummies.find((item) => item.id === id);

    return find;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async remove(id: number, tr?: QueryRunner): Promise<boolean> {
    const dummies: Array<Dummy> = new Array<Dummy>();

    dummies.push({ id: 1 });

    const find = dummies.find((item) => item.id === id);

    return find ? true : false;
  }
}

describe('AbstractDomainService', () => {
  let dummy: AbtractDummy;
  let dummyPort: DummyPort;

  beforeEach(() => {
    dummyPort = new DummyPort();
    dummy = new AbtractDummy(dummyPort);
  });

  it('should be defined', () => {
    expect(dummy).toBeDefined();
    expect(dummyPort).toBeDefined();
  });

  it('getAll', async () => {
    const dummies: Array<Dummy> = new Array<Dummy>();

    dummies.push({ id: 1 });

    jest.spyOn(dummyPort, 'getAll').mockResolvedValue(dummies);

    const results = await dummy.getAll();

    expect(results).toEqual(dummies);
  });

  it('getById', async () => {
    const dummyObj = new Dummy();
    dummyObj.id = 1;

    jest.spyOn(dummyPort, 'getById').mockResolvedValue(dummyObj);

    const results = await dummy.getById(1);

    expect(results).toEqual(dummyObj);
  });

  it('create', async () => {
    const dummyObj = new Dummy();
    dummyObj.id = 1;

    jest.spyOn(dummyPort, 'create').mockResolvedValue(dummyObj);

    const results = await dummy.create(dummyObj);

    expect(results).toEqual(dummyObj);
  });

  it('update', async () => {
    const dummyObj = new Dummy();
    dummyObj.id = 1;

    jest.spyOn(dummyPort, 'update').mockResolvedValue(dummyObj);

    const results = await dummy.update(1, dummyObj);

    expect(results).toEqual(dummyObj);
  });

  it('remove', async () => {
    jest.spyOn(dummyPort, 'remove').mockResolvedValue(true);

    const results = await dummy.remove(1);

    expect(results).toBeTruthy();
  });
});
