import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class Logger extends ConsoleLogger {
  log(message: string, context?: string) {
    super.log(message, context);
  }
}