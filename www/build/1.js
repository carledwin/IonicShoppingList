webpackJsonp([1],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditListItemPageModule", function() { return EditListItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_list_item__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditListItemPageModule = /** @class */ (function () {
    function EditListItemPageModule() {
    }
    EditListItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_list_item__["a" /* EditListItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_list_item__["a" /* EditListItemPage */]),
            ],
        })
    ], EditListItemPageModule);
    return EditListItemPageModule;
}());

//# sourceMappingURL=edit-list-item.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditListItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditListItemPage = /** @class */ (function () {
    function EditListItemPage(navCtrl, navParams, shoppingListService, toastService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shoppingListService = shoppingListService;
        this.toastService = toastService;
    }
    EditListItemPage.prototype.ionViewWillUnload = function () {
        this.item = this.navParams.get('item');
    };
    EditListItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditListItemPage: ', this.navParams.get('item'));
    };
    EditListItemPage.prototype.editItem = function (item) {
        var _this = this;
        this.shoppingListService.editItem(item)
            .then(function () {
            _this.toastService.show(item.name + " saved!", 5000);
            _this.navCtrl.setRoot('HomePage');
        });
    };
    EditListItemPage.prototype.removeItem = function (item) {
        var _this = this;
        this.shoppingListService.removeItem(item)
            .then(function () {
            _this.toastService.show(item.name + " removed!", 5000);
            _this.navCtrl.setRoot('HomePage');
        });
    };
    EditListItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-list-item',template:/*ion-inline-start:"/home/carledwin/Documents/Curso de Ionic/crud-ionic-3-firebase/projetos/IonicShoppingList/src/pages/edit-list-item/edit-list-item.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{item?.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>Name: </ion-label>\n    <ion-input [(ngModel)]="item.name" placeholdeer="iPad Pro"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Quantity: </ion-label>\n    <ion-input [(ngModel)]="item.quantity" type="number" placeholdeer="1"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Price: </ion-label>\n    <ion-input [(ngModel)]="item.price" type="number" placeholdeer="700"></ion-input>\n  </ion-item>\n\n  {{item | json}}\n\n  <button ion-button block clear (click)="editItem(item)" >Edit</button>\n  <button ion-button block clear color="danger" (click)="removeItem(item)" >Remove</button>\n</ion-content>\n'/*ion-inline-end:"/home/carledwin/Documents/Curso de Ionic/crud-ionic-3-firebase/projetos/IonicShoppingList/src/pages/edit-list-item/edit-list-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__["a" /* ToastService */]])
    ], EditListItemPage);
    return EditListItemPage;
}());

//# sourceMappingURL=edit-list-item.js.map

/***/ })

});
//# sourceMappingURL=1.js.map