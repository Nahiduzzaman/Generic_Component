import { Component } from '@angular/core';
import { AppService } from './app-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Generic Component Testing';

  list:any[];

  constructor(private appService: AppService){
    //this.list = appService.showList();
  }

}
