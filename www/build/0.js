webpackJsonp([0],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/** lazy load */
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomePage */])]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(75);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** lazy load */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, shoppingListService) {
        this.navCtrl = navCtrl;
        this.shoppingListService = shoppingListService;
        this.shoppingList$ = this.shoppingListService.getShoppingList() //DB LIST
            .snapshotChanges() //Key and Value
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/carledwin/Documents/Curso de Ionic/crud-ionic-3-firebase/projetos/IonicShoppingList/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Shopping List\n    </ion-title>\n\n    <ion-buttons end>\n      <button navPush="AddListItemPage" ion-button>\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-list>\n    <ion-list-header>Itens</ion-list-header>\n    \n    <!--\n\n    <ion-item *ngFor="let item of shoppingList$ | async" detailPush>\n      {{item.name}}\n    </ion-item>\n     -->\n    <ion-item *ngFor="let item of shoppingList$" detailPush navPush="EditListItemPage" [navParams]="{item: item}">\n      {{item.name}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/carledwin/Documents/Curso de Ionic/crud-ionic-3-firebase/projetos/IonicShoppingList/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map