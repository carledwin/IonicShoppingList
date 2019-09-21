webpackJsonp([2],{

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListItemPageModule", function() { return AddListItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_list_item__ = __webpack_require__(442);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddListItemPageModule = /** @class */ (function () {
    function AddListItemPageModule() {
    }
    AddListItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_list_item__["a" /* AddListItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_list_item__["a" /* AddListItemPage */]),
            ],
        })
    ], AddListItemPageModule);
    return AddListItemPageModule;
}());

//# sourceMappingURL=add-list-item.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddListItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shopping_list_shopping_list_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddListItemPage = /** @class */ (function () {
    function AddListItemPage(navCtrl, navParams, shoppingListService, toastService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shoppingListService = shoppingListService;
        this.toastService = toastService;
        this.item = {
            name: '',
            quantity: undefined,
            price: undefined,
        };
    }
    AddListItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddListItemPage');
    };
    AddListItemPage.prototype.addItem = function (item) {
        var _this = this;
        this.shoppingListService.addItem(item)
            .then(function (ref) {
            console.log('Item Key: ', ref.key);
            _this.toastService.show(item.name + " added!", 5000);
            _this.navCtrl.setRoot('HomePage', { 'key': ref.key });
        });
    };
    AddListItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-add-list-item',template:/*ion-inline-start:"/home/carledwin/Documents/Curso de Ionic/crud-ionic-3-firebase/projetos/IonicShoppingList/src/pages/add-list-item/add-list-item.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Add Item</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>Name: </ion-label>\n    <ion-input [(ngModel)]="item.name" placeholdeer="iPad Pro"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Quantity: </ion-label>\n    <ion-input [(ngModel)]="item.quantity" type="number" placeholdeer="1"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Price: </ion-label>\n    <ion-input [(ngModel)]="item.price" type="number" placeholdeer="700"></ion-input>\n  </ion-item>\n\n  {{item | json}}\n\n  <button ion-button block clear (click)="addItem(item)" >Add</button>\n</ion-content>\n'/*ion-inline-end:"/home/carledwin/Documents/Curso de Ionic/crud-ionic-3-firebase/projetos/IonicShoppingList/src/pages/add-list-item/add-list-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service__["a" /* ToastService */]])
    ], AddListItemPage);
    return AddListItemPage;
}());

//# sourceMappingURL=add-list-item.js.map

/***/ })

});
//# sourceMappingURL=2.js.map