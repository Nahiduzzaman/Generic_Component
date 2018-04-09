import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooListComponent } from './foo-list/foo-list.component';
import { FooService } from './foo.service';
import { ShowListModule } from './../show-list/show-list.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooListComponent],
  providers: [{
    
    provide: 'IShowList',
    useClass: FooService
  },
    FooService
  ]
})
export class FooModule { }
