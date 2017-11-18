import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { SharedComponent } from './shared.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    MenuComponent,
    SharedComponent,
    FooterComponent],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }
