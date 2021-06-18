"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductComponent = void 0;
var core_1 = require("@angular/core");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(productservice, activatedRoute, toastrService) {
        this.productservice = productservice;
        this.activatedRoute = activatedRoute;
        this.toastrService = toastrService;
        this.products = [];
        this.dataLoaded = false;
        this.filterText = ' ';
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params['categoryId']) {
                _this.getProductsByCategory(params['categoryId']);
            }
            else {
                _this.getProducts();
            }
        });
    };
    ProductComponent.prototype.getProducts = function () {
        var _this = this;
        this.productservice.getProducts().subscribe(function (response) {
            _this.products = response.data;
            _this.dataLoaded = true;
        });
    };
    ProductComponent.prototype.getProductsByCategory = function (categoryId) {
        var _this = this;
        this.productservice
            .getProductsByCategory(categoryId)
            .subscribe(function (response) {
            _this.products = response.data;
            _this.dataLoaded = true;
        });
    };
    ProductComponent.prototype.addToCart = function (product) {
        if (product.productId === 3) {
            this.toastrService.error('bu Ürün sepete ekklenemez ! ');
        }
        else {
            this.toastrService.success('sepete eklendi!', product.productName);
        }
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
        })
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
