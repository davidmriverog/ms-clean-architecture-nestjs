import { BaseDto } from '../../business/dto/requests/base-dto.dto';
import { IRemoveUseCase } from './../../app/use-cases/remove.usecase';
import { IEditUseCase } from './../../app/use-cases/edit.usecase';
import { ICreateUseCase } from './../../app/use-cases/create.usecase';
import { IFindByIdUseCase } from './../../app/use-cases/findById.usecase';
import { IFindAllUseCase } from './../../app/use-cases/findAll.usecase';

export abstract class AbstractService<I> {
  _findAllUseCase: IFindAllUseCase<I>;
  _findByIdUseCase: IFindByIdUseCase<I>;
  _createUseCase: ICreateUseCase<I>;
  _editUseCase: IEditUseCase;
  _removeUseCase: IRemoveUseCase;

  constructor(
    findAllUseCase: IFindAllUseCase<I>,
    findByIdUseCase: IFindByIdUseCase<I>,
    createUseCase: ICreateUseCase<I>,
    editUseCase: IEditUseCase,
    removeUseCase: IRemoveUseCase,
  ) {
    this._findAllUseCase = findAllUseCase;
    this._findByIdUseCase = findByIdUseCase;
    this._createUseCase = createUseCase;
    this._editUseCase = editUseCase;
    this._removeUseCase = removeUseCase;
  }

  async findAll() {
    return await this._findAllUseCase.execute();
  }

  async findById(id: number) {
    return await this._findByIdUseCase.execute(id);
  }

  async create(attrs: BaseDto) {
    return await this._createUseCase.execute(attrs);
  }

  async edit(id: number, attrs: BaseDto) {
    return this._editUseCase.execute(id, attrs);
  }

  async remove(id: number) {
    return await this._removeUseCase.execute(id);
  }
}
