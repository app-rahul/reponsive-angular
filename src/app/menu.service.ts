import { Injectable } from '@angular/core';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  menu: any[] = [
    { Id: 0, Name: "Home", IsActive: true },
    { Id: 0, Name: "Menu1", IsActive: false },
    { Id: 0, Name: "Menu2", IsActive: false },
    { Id: 0, Name: "About", IsActive: false }
  ];

  openMenu = (item: any) => {
    _.map(this.menu, (item) => { item.IsActive = false });
    item.IsActive = true;
  }

  selectedMenu = ()=>{
    return _.find(this.menu, {'IsActive':true})
  }  
}
