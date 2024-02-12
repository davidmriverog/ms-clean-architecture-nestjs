import { HttpException, HttpStatus } from '@nestjs/common';

export class PermissionError extends HttpException {
  constructor(mesage) {
    super(mesage, HttpStatus.NOT_FOUND);
  }
}
