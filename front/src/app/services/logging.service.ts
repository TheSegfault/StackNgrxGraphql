import { Injectable } from '@angular/core';

// tslint:disable:readonly-array
@Injectable()
export class Log {
  public static debug(msg: string, ...optionalParams: any[]): void {
    this.emitLogMessage('debug', msg, optionalParams);
  }

  public static info(msg: string, ...optionalParams: any[]): void {
    this.emitLogMessage('info', msg, optionalParams);
  }

  public static warn(msg: string, ...optionalParams: any[]): void {
    this.emitLogMessage('warn', msg, optionalParams);
  }

  public static error(msg: string, ...optionalParams: any[]): void {
    this.emitLogMessage('error', msg, optionalParams);
  }

  private static emitLogMessage(
    msgType: 'debug' | 'info' | 'warn' | 'error',
    msg: string,
    optionalParams?: any[],
  ): void {
    if (optionalParams.length > 0) {
      console[msgType](msg, optionalParams);
    } else {
      console[msgType](msg);
    }
  }
}
