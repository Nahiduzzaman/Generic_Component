import { IShowList } from './../../show-list/contractors/show-list';
import { Injectable } from '@angular/core';

@Injectable()
export class FooService implements IShowList {

  constructor() { }
  showList(): any[]{
    let namesList: string[] = ["captain america", "iron man"];
    return namesList;
  }

}
