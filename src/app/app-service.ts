import { Injectable } from '@angular/core';
import { IShowList } from './show-list/contractors/show-list';

@Injectable()
export class AppService implements IShowList{

    showList(): any[]{
        let namesList: string[] = ["rafi", "rhin"];
        return namesList;
    }
}
