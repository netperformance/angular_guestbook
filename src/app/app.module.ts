import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MessageCreationComponent } from './message-creation/message-creation.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageEditComponent } from './message-list/message-edit/message-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessageCreationComponent,
    MessageListComponent,
    MessageEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
