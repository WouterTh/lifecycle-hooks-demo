import { Component } from '@angular/core';

import { LoggerService } from '../logger.service';

@Component({
  selector: 'counter-parent',
  templateUrl: './counter-parent.component.html',
  providers: [LoggerService]
})
export class CounterParentComponent  {
  value: number = 0;
  spyLog: string[] = [];

  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.spyLog = logger.logs;
    this.reset();
  }

  updateCounter() {
    this.value += 1;
    this.logger.tick();
  }

  reset() {
    this.logger.log('-- reset --');
    this.value = 0;
    this.logger.tick();
  }
}
