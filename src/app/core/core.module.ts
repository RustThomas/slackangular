import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CanauxModule } from '../canaux/canaux.module';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { UiModule } from '../ui/ui.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavComponent],
  imports: [CommonModule],
  exports: [
    UiModule,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    TemplatesModule,
    IconsModule,
    CanauxModule,
  ],
})
export class CoreModule {}
