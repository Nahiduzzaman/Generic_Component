import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooListComponent } from './components/foo-list/foo-list.component';
import { FooService } from './services/foo.service';
import { ShowListModule } from './../show-list/show-list.module';

const routes = [
  {
      path     : 'foo',
      component: FooListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ],
  declarations: [FooListComponent],
  providers: [{
    
    provide: 'IShowList',
    useClass: FooService
  },
    FooService
  ],

  exports:[FooListComponent]
})
export class FooModule { }
