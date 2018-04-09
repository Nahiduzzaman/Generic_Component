import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppService} from './app-service';
import { ShowListModule } from './show-list/show-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ShowListModule
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
