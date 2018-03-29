import { Injectable } from '@angular/core';
import { ShowList } from './show-list/contractors/show-list';

@Injectable()
export class AppService implements ShowList{

    showList(): any[]{
        let namesList: string[] = ["rafi", "rhin"];
        return namesList;
    }
}
