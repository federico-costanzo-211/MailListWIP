import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MailListComponent } from './components/mail-list/mail-list.component';
import { MailListItemComponent } from './components/mail-list-item/mail-list-item.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';

import { MailItemService } from './services/mail-item.service';
import { AddPageComponent } from './pages/add-page/add-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MailListComponent,
    MailListItemComponent,
    MainPageComponent,
    EditPageComponent,
    AddPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MailItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
