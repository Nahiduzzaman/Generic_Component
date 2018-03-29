import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowListComponentComponent } from './components/show-list-component/show-list-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShowListComponentComponent],
  exports:[ShowListComponentComponent]
})
export class ShowListModule { }
