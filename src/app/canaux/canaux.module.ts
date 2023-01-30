import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplatesModule } from '../templates/templates.module';
import { CanauxRoutingModule } from './canaux-routing.module';
import { FormMessageComponent } from './form-message/form-message.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { DisplayCanauxComponent } from './pages/display-canaux/display-canaux.component';

@NgModule({
  declarations: [
    DisplayCanauxComponent,
    MessageBoxComponent,
    FormMessageComponent,
  ],
  imports: [
    CommonModule,
    CanauxRoutingModule,
    TemplatesModule,
    ReactiveFormsModule,
  ],
})
export class CanauxModule {}
