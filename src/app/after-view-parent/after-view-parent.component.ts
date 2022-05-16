import { Component } from '@angular/core';

import { LoggerService } from '../logger.service';

@Component({
  selector: 'after-view-parent',
  templateUrl: './after-view-parent.component.html',
  providers: [LoggerService]
})
export class AfterViewParentComponent {
  logs: string[];
  show = true;

  constructor(private logger: LoggerService) {
    this.logs = logger.logs;
  }

  reset() {
    this.logs.length = 0;
    // quickly remove and reload AfterViewComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }
}
