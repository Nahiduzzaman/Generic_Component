import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AppService} from './app-service';
import { ShowListModule } from './show-list/show-list.module';

const appRoutes: Routes = [
  {
      path        : '',
      loadChildren: './foo/foo.module#FooModule'
  },
  {
      path      : '',
      redirectTo: '',
      pathMatch : 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShowListModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {
        provide: 'IShowList',
        useClass: AppService
    },
    AppService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
