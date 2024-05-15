// import { Injectable } from '@nestjs/common';
// import * as winston from 'winston';
// import { loggerConfig } from './logger.config';

// @Injectable()
// export class MyLogger {
//   private readonly logger: winston.Logger;

//   constructor() {
//     this.logger = winston.createLogger(loggerConfig);
//   }

//   log(message: string) {
//     this.logger.info(message);
//   }

//   error(message: string, trace: string) {
//     this.logger.error(message, trace);
//   }

//   warn(message: string) {
//     this.logger.warn(message);
//   }

//   debug(message: string) {
//     this.logger.debug(message);
//   }

//   verbose(message: string) {
//     this.logger.verbose(message);
//   }

//   success(message: string) {
//     this.logger.info(message); // Log success messages with 'info' level
//   }
// }
