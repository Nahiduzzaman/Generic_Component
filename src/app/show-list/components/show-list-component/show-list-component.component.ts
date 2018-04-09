import { Component, OnInit, Inject } from '@angular/core';
import { IShowList } from '../../contractors/show-list';

@Component({
  selector: 'app-show-list-component',
  templateUrl: './show-list-component.component.html',
  styleUrls: ['./show-list-component.component.css']
})
export class ShowListComponentComponent implements OnInit {

  constructor(@Inject('IShowList') private showList) { }

  list: any[];
  

  ngOnInit() {

    this.list = this.showList.showList();
    console.log(this.list);
  }

}
