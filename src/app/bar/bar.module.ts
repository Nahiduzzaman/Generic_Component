import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BarListComponent } from './components/bar-list/bar-list.component';
import { BarService } from './services/bar.service';
import { ShowListModule } from './../show-list/show-list.module';

const routes = [
  {
      path     : 'foo',
      component: BarListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ],
  declarations: [BarListComponent],
  providers: [{
    
    provide: 'IShowList',
    useClass: BarService
  },
    BarService
  ],

  exports:[BarListComponent]
})
export class FooModule { }
