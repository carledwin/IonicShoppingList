import { ToastService } from './../../services/toast/toast.service';
import { ShoppingListService } from './../../services/shopping-list/shopping-list.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';

@IonicPage()
@Component({
  selector: 'page-add-list-item',
  templateUrl: 'add-list-item.html',
})
export class AddListItemPage {

  item: Item = {
    name: '',
    quantity: undefined,
    price: undefined,
  };

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private shoppingListService: ShoppingListService,
              private toastService: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddListItemPage');
  }

  addItem(item: Item){

    this.shoppingListService.addItem(item)
                              .then(ref => {

                                console.log('Item Key: ', ref.key)
                                this.toastService.show(`${item.name} added!`, 5000);
                                this.navCtrl.setRoot('HomePage', {'key': ref.key})
                              });
  }
}
