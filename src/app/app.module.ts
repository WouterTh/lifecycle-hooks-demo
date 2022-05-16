import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AfterContentParentComponent } from './after-content-parent/after-content-parent.component';
import { AfterContentComponent, ChildComponent } from './after-content/after-content.component';
import { AfterViewParentComponent } from './after-view-parent/after-view-parent.component';
import { AfterViewComponent, ChildViewComponent } from './after-view/after-view.component';
import { AppComponent } from './app.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { DoCheckParentComponent } from './do-check-parent/do-check-parent.component';
import { DoCheckComponent } from './do-check/do-check.component';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { PeekABooParentComponent } from './peek-a-boo-parent/peek-a-boo-parent.component';
import { PeekABooComponent } from './peek-a-boo/peek-a-boo.component';
import { SpyParentComponent } from './spy-parent/spy-parent.component';
import { SpyParentDirective } from './spy-parent/spy-parent.directive';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    PeekABooParentComponent,
    SpyParentComponent,
    OnChangesParentComponent,
    DoCheckParentComponent,
    AfterViewParentComponent,
    AfterContentParentComponent,
    CounterParentComponent,
    PeekABooComponent,
    SpyParentDirective,
    OnChangesComponent,
    DoCheckComponent,
    AfterViewComponent,
    ChildViewComponent,
    AfterContentComponent,
    ChildComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
