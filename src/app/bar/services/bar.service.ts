import { IShowList } from './../../show-list/contractors/show-list';
import { Injectable } from '@angular/core';

@Injectable()
export class BarService implements IShowList {

  constructor() { }
  showList(): any[]{
    let namesList: string[] = ["captain america", "iron man"];
    return namesList;
  }

}
