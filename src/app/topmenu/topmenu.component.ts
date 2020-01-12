import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  menu : any = [];
  @Input() public customAlert;
  openMenu = (item : any)=>{};

  constructor(private _menuService: MenuService) { }

  ngOnInit() {
    //this.customAlert("hello from top Menu");
    this.menu = this._menuService.menu;
    this.openMenu = this._menuService.openMenu;
  }

  
}
