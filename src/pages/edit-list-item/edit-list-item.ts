import { Item } from './../../models/item/item.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { ToastService } from './../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-edit-list-item',
  templateUrl: 'edit-list-item.html',
})
export class EditListItemPage {

  item: Item;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private shoppingListService: ShoppingListService,
              private toastService: ToastService) {
  }

  ionViewWillUnload(){
   this.item = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditListItemPage: ', this.navParams.get('item'));
  }

  editItem(item: Item){

    this.shoppingListService.editItem(item)
                              .then(() => {
                                this.toastService.show(`${item.name} saved!`, 5000);  
                                this.navCtrl.setRoot('HomePage');
                              });
  }

  removeItem(item: Item){

    this.shoppingListService.removeItem(item)
                              .then(() => {
                                this.toastService.show(`${item.name} removed!`, 5000);  
                                this.navCtrl.setRoot('HomePage');
                              });
  }

}
