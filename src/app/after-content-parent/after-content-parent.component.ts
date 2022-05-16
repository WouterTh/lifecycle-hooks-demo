import { Component } from '@angular/core';

import { LoggerService } from '../logger.service';

@Component({
  selector: 'after-content-parent',
  templateUrl: './after-content-parent.component.html',
  providers: [LoggerService]
})
export class AfterContentParentComponent {
  logs: string[];
  show = true;

  constructor(private logger: LoggerService) {
    this.logs = logger.logs;
  }

  reset() {
    this.logs.length = 0;
    // quickly remove and reload AfterContentComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }
}
