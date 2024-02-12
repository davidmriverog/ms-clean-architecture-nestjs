import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { PermissionError } from '../../../domain/errors/permission.error';
import { permissionMapping } from './mapping-errors.mapping';

@Catch(PermissionError)
export class PermissionExceptionFilter implements ExceptionFilter {
  catch(exception: PermissionError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    Logger.error(
      `PermissionController (${request.method}) at {${request.url} error: ${exception.message}`,
    );

    response.status(HttpStatus.NOT_FOUND).json({
      status: HttpStatus.NOT_FOUND,
      code: exception.message,
      message: permissionMapping.get(exception.message),
    });
  }
}
