import { BaseDto } from '../base-dto.dto';

describe('BaseDto', () => {
  let baseDto: BaseDto;

  beforeEach(() => {
    baseDto = new BaseDto();
  });

  it('should be defined', () => {
    expect(baseDto).toBeDefined();
  });
});
