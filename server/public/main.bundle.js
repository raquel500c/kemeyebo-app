webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/add-article/add-article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-touched {\n  border-color: blue;\n}\n\n.ng-touched.ng-invalid {\n  border-color: red;\n}\n\n.ng-touched.ng-valid {\n  border-color: green;\n}\n\n.form-container{\n  background-color: white ;\n}\n\n.card-panel{\n  margin-top:50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-article/add-article.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n      <div class=\"card-panel white\">\n        <div class='form-container'>\n          <form class=\"col s12\">\n            <div class=\"form-group\">\n              <h2 class='red-text text-lighten-1'> Nueva prenda </h2>\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type=\"text\" [(ngModel)]=\"newArticle.name\" name=\"name\" required />\n                  <label> Nombre* </label>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <select materialize='material_select' class=\"form-control col s6\" id=\"season\" [(ngModel)]=\"newArticle.season\" name=\"season\">\n                  <option value=\"\" disabled selected>Elige temporada</option>\n                  <option *ngFor=\"let s of season\" [value]=\"s\">{{s}}</option>\n                </select>\n                <select materialize='material_select' class=\"form-control col s6\" id=\"color\" [(ngModel)]=\"newArticle.colorsRange\" name=\"color\">\n                  <option value=\"\" disabled selected>Elige gama de color</option>\n                  <option *ngFor=\"let c of color\" [value]=\"c\">{{c}}</option>\n                </select>\n              </div>\n\n              <div class=\"row\">\n                <select materialize='material_select' class=\"form-control col s6\" id=\"style\" [(ngModel)]=\"newArticle.style\" name=\"style\">\n                  <option value=\"\" disabled selected>Elige estilo </option>\n                  <option *ngFor=\"let s of style\" [value]=\"s\">{{s}}</option>\n                </select>\n                <select materialize='material_select' class=\"form-control col s6\" id=\"category\" [(ngModel)]=\"newArticle.category\" name=\"category\">\n                  <option value=\"\" disabled selected>Elige tipo de prenda </option>\n                  <option *ngFor=\"let c of category\" [value]=\"c\">{{c}}</option>\n                </select>\n              </div>\n\n              <div class=\"input-field col s12\">\n                <label> Notas </label>\n                <input type=\"text\" [(ngModel)]=\"newArticle.notes\" name=\"notes\" />\n              </div>\n\n              <button (click)=\"submit()\" class=\"waves-effect waves-light btn blue-grey btn-margin\">\n                guardar\n                <i class=\"material-icons right\">send</i>\n              </button>\n            </div>\n          </form>\n        </div>\n        <p> {{ feedback }} </p>\n      </div>\n\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/add-article/add-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddArticleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddArticleComponent = (function () {
    function AddArticleComponent(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.season = ['primavera', 'verano', 'otoño', 'invierno', 'entre tiempo', 'todas'];
        this.color = ['blanco', 'crema', 'gris', 'negro', 'azul', 'rojo', 'amarillo',
            'verde', 'morado', 'naranja', 'rosa', 'plateado', 'dorado', 'marrón', 'multicolor'];
        this.style = ['informal', 'casual', 'trabajo', 'deporte', 'fiesta', 'formal', 'formal-playa', 'etiqueta', 'varios'];
        this.category = ['parte de arriba', 'parte de abajo', 'cuerpo entero', 'calzado', 'accesorio', 'ropa interior', 'otra'];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
            url: 'http://localhost:3000/api/articles/'
        });
        this.newArticle = {
            owner: '',
            name: '',
            season: '',
            colorsRange: '',
            style: '',
            category: '',
            notes: ''
        };
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    AddArticleComponent.prototype.ngOnInit = function () {
        //$('select').material_select();
        // this.uploader.onSuccessItem = (item, response) => {
        //   this.feedback = JSON.parse(response).message;
        // }
        //
        // this.uploader.onErrorItem = (item, response, status, headers) => {
        //   this.feedback = JSON.parse(response).message;
        // };
    };
    AddArticleComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.newArticle);
        this.newArticle.owner = this.user._id;
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('owner', _this.newArticle.owner);
            form.append('name', _this.newArticle.name);
            form.append('season', _this.newArticle.season);
            form.append('colorsRange', _this.newArticle.colorsRange);
            form.append('style', _this.newArticle.style);
            form.append('category', _this.newArticle.category);
            form.append('notes', _this.newArticle.notes);
        };
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function () { return _this.router.navigate(['/articles']); };
    };
    return AddArticleComponent;
}());
AddArticleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-article',
        template: __webpack_require__("../../../../../src/app/add-article/add-article.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-article/add-article.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AddArticleComponent);

var _a, _b;
//# sourceMappingURL=add-article.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".brand-logo, p {\n  margin-left: 20px\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\" nav-wrapper text-lighten-4 \">\n    <a [routerLink]=\"['/']\" class=\"brand-logo\"><img id =\"logo\"src=\"\" alt=\"\">KeMeYeBo</a>\n    <a href=\"#\"  data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n    <ul *ngIf=\"!user\" class=\"right hide-on-med-and-down\">\n      <li><a [routerLink]=\"['/']\">Home</a></li>\n      <li><a [routerLink]=\"['/login']\"><i class=\"material-icons left\">perm_identity</i>Log-In</a></li>\n      <li><a [routerLink]=\"['/signup']\"><i class=\"material-icons left\">input</i>Sign-Up</a></li>\n    </ul>\n    <ul *ngIf=\"user\" class=\"right hide-on-med-and-down\">\n      <li><a [routerLink]=\"['/articles']\">Prendas</a></li>\n      <li><a [routerLink]=\"['/']\"><i class=\"material-icons left\">person</i>{{ user.username }} </a></li>\n      <li><a (click)=\"auth.logout().subscribe()\"><i class=\"material-icons left\">exit_to_app</i>Logout</a></li>\n    </ul>\n    <ul class=\"side-nav\" id=\"mobile-demo\">\n      <ul *ngIf=\"!user\">\n        <li><a [routerLink]=\"['/']\">Home</a></li>\n        <li><a [routerLink]=\"['/login']\"><i class=\"material-icons left\">perm_identity</i>Log-In</a></li>\n        <li><a [routerLink]=\"['/signup']\"><i class=\"material-icons left\">input</i>Sign-Up</a></li>\n      </ul>\n      <ul *ngIf=\"user\">\n        <li><a [routerLink]=\"['/articles']\">Prendas</a></li>\n        <li><a [routerLink]=\"['/']\"><i class=\"material-icons left\">person</i>{{ user.username }} </a></li>\n        <li><a (click)=\"auth.logout().subscribe()\"><i class=\"material-icons left\">exit_to_app</i>Logout</a></li>\n      </ul>\n    </ul>\n  </div>\n</nav>\n\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.title = 'Kemeyebo';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isLoggedIn().subscribe(function (user) { return _this.successCb(user); });
        this.auth.getLoginEventEmitter().subscribe(function (user) { return _this.successCb(user); });
        $(".button-collapse").sideNav();
    };
    AppComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.user = null;
    };
    AppComponent.prototype.successCb = function (user) {
        this.user = user;
        this.error = null;
        this.router.navigate(['/']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_articles_service__ = __webpack_require__("../../../../../src/app/services/articles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__articles_list_articles_list_component__ = __webpack_require__("../../../../../src/app/articles-list/articles-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__article_detail_article_detail_component__ = __webpack_require__("../../../../../src/app/article-detail/article-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__add_article_add_article_component__ = __webpack_require__("../../../../../src/app/add-article/add-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__loginform_loginform_component__["a" /* LoginformComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__userprofile_userprofile_component__["a" /* UserprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__signupform_signupform_component__["a" /* SignupformComponent */],
            __WEBPACK_IMPORTED_MODULE_14__articles_list_articles_list_component__["a" /* ArticlesListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__article_detail_article_detail_component__["a" /* ArticleDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_16__add_article_add_article_component__["a" /* AddArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_17_ng2_file_upload__["FileSelectDirective"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_18_angular2_materialize__["a" /* MaterializeModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */], __WEBPACK_IMPORTED_MODULE_11__services_articles_service__["a" /* ArticlesService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/article-detail/article-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-article {\n  height: 300px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article-detail/article-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/articles']\">Volver a la lista</a>\n\n<div *ngIf=\"article\" class='container'>\n  <h2>Detalle {{article.name}}</h2>\n  <button (click)=\"deleteArticle()\"> Eliminar </button>\n  <img [src]=\"article.image\" class=\"img-article\" />\n  <p>Temporada: {{article.season}}</p>\n  <p>Gama de color:{{article.colorsRange}}</p>\n  <p>Estilo / Ocasión: {{article.style}}</p>\n  <p> Tipo prenda: {{article.category}}</p>\n  <p>Notas: {{article.notes}}</p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/article-detail/article-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_articles_service__ = __webpack_require__("../../../../../src/app/services/articles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleDetailComponent = (function () {
    function ArticleDetailComponent(router, route, articlesService) {
        this.router = router;
        this.route = route;
        this.articlesService = articlesService;
    }
    ArticleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getArticleDetail(params['id']);
        });
    };
    ArticleDetailComponent.prototype.getArticleDetail = function (id) {
        var _this = this;
        this.articlesService.get(id)
            .subscribe(function (article) {
            _this.article = article;
        });
    };
    ArticleDetailComponent.prototype.deleteArticle = function () {
        var _this = this;
        if (window.confirm('¿Estás seguro?')) {
            this.articlesService.remove(this.article._id)
                .subscribe(function () {
                _this.router.navigate(['/articles/']);
            });
        }
    };
    return ArticleDetailComponent;
}());
ArticleDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-article-detail',
        template: __webpack_require__("../../../../../src/app/article-detail/article-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/article-detail/article-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_articles_service__["a" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_articles_service__["a" /* ArticlesService */]) === "function" && _c || Object])
], ArticleDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=article-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/articles-list/articles-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.card-image{\n  max-height: 400px;\n}*/\n\nh2 {\n  display: inline;\n}\n\n/*.img-article{\n  height: 300px;\n\n}\n\n.card-title{\n  min-height: 70px;\n}*/\n\n.title{\n  margin-top: 20px\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/articles-list/articles-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <div class='row title'>\n    <h2 class='white-text'>Mis prendas</h2>\n    <a [routerLink]=\"['/add']\" class=\"btn-floating btn-large waves-effect waves-light white right\"><i class=\"material-icons blue-grey-text text-accent-3 right\">add</i></a>\n  </div>\n  <div class=\"row\">\n    <div class=\"materialize card large article-card col s6 m6 l4\" *ngFor=\"let article of articles\" >\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <img class=\"activator img-article\" [src]=\"article.image\">\n        </div>\n\n        <div class=\"card-content\">\n          <span class=\"card-title activator grey-text text-darken-4 \">{{article.name | uppercase }}<i class=\"material-icons right\">more_vert</i></span>\n        </div>\n\n        <div class=\"card-reveal\">\n          <span class=\"card-title grey-text text-darken-4\">{{article.name | uppercase }}<i class=\"material-icons right\">close</i></span>\n            <p>Temporada: {{article.season}}</p>\n            <p>Gama color: {{article.colorsRange}}</p>\n            <p>Ocasión: {{article.style}}</p>\n            <p> Tipo: {{article.category}}</p>\n            <p >Notas: {{article.notes}}</p>\n            <div class=\"card-action\">\n              <button  class=\"btn-floating btn-large waves-effect waves-light btn blue-grey left\"><i class=\"material-icons\">edit</i></button>\n              <button (click)=\"deleteArticle(article._id)\" class=\"btn-floating btn-large waves-effect waves-light red accent-3 right \"><i class=\"material-icons\">delete</i></button>\n            </div>\n        </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/articles-list/articles-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_articles_service__ = __webpack_require__("../../../../../src/app/services/articles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticlesListComponent = (function () {
    function ArticlesListComponent(auth, router, route, articlesService) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.articlesService = articlesService;
    }
    ArticlesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.articlesService.getList(this.user).subscribe(function (result) { return _this.successCb(result); });
    };
    ArticlesListComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.user = null;
    };
    ArticlesListComponent.prototype.successCb = function (result) {
        this.articles = result;
        this.error = null;
        console.log("EL USUARIO ES", this.user);
        console.log("ESTOY LOGEADO");
    };
    ArticlesListComponent.prototype.deleteArticle = function (id) {
        var _this = this;
        if (window.confirm('¿Estás seguro?')) {
            this.articlesService.remove(id)
                .subscribe(function () {
                _this.articlesService.getList(_this.user).subscribe(function (result) { return _this.articles = result; });
            });
        }
    };
    return ArticlesListComponent;
}());
ArticlesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-articles-list',
        template: __webpack_require__("../../../../../src/app/articles-list/articles-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/articles-list/articles-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_articles_service__["a" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_articles_service__["a" /* ArticlesService */]) === "function" && _d || Object])
], ArticlesListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=articles-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\n  /*color: #ef5350*/\n  color:white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"index-banner\" class=\"parallax-container\">\n  <div class=\"section no-pad-bot\">\n    <div class=\"container\">\n      <br/><br/><br />\n      <h1 class=\"header center  text-lighten-2\">¿Qué me llevo?</h1>\n      <div class=\"row center\">\n        <h4 class=\"header col s12 p-image\">KeMeYeBo app organiza tu ropa</h4>\n      </div>\n      <div class=\"row center\">\n\n      </div>\n      <br><br>\n\n    </div>\n  </div>\n<div class=\"parallax\"><img src=\"https://trello-attachments.s3.amazonaws.com/59dd13defb8d297e549f44ba/1200x900/cdcdbe72bcb4043a7ce1b8f51e0b8205/%C2%BFQu%C3%A9-me-pongo-hoy-Mejor-elige-tu-ropa-el-d%C3%ADa-anterior-SL1.jpg\" alt=\"Unsplashed background img 2\"></div>\n</div>\n\n<div class=\"wrapper-white white\">\n  <div class=\"container \">\n    <div class=\"section\">\n\n      <!--   Icon Section   -->\n      <div class=\"row\">\n        <div class=\"col s12 m4\">\n          <div class=\"icon-block\">\n            <h2 class=\"center brown-text\"><i class=\"material-icons\">local_see</i></h2>\n            <h5 class=\"center\">Armario</h5>\n\n            <p class=\"light\">Incorpora fácilmente todas tus prendas. Captura la imágen y clasifica la prenda de forma intuitiva con dos clicks!</p>\n          </div>\n        </div>\n\n        <div class=\"col s12 m4\">\n          <div class=\"icon-block\">\n            <h2 class=\"center brown-text\"><i class=\"material-icons\">group</i></h2>\n            <h5 class=\"center\">¿Qué me pongo?</h5>\n\n            <p class=\"light\">Podrás ver cómodamente desde tu móvil toda la ropa de la que dispones de un vistazo, facilitando la elección y la combinación de prendas!</p>\n          </div>\n        </div>\n\n        <div class=\"col s12 m4\">\n          <div class=\"icon-block\">\n            <h2 class=\"center brown-text\"><i class=\"material-icons\">card_travel</i></h2>\n            <h5 class=\"center\">¿Qué me llevo?</h5>\n\n            <p class=\"light\">Planifica tu maleta con rapidez. Se acabó rebuscar en cajones para buscar la inspiración. Si sabes lo que tienes, sabes qué llevarte! </p>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n<div class=\"parallax-container valign-wrapper\">\n  <div class=\"section no-pad-bot\">\n    <div class=\"container\">\n      <div class=\"row center\">\n        <h2 class=\"header col s12 \">¿La maleta es un problema?</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"parallax\"><img src=\"https://trello-attachments.s3.amazonaws.com/59d28f5f79626218b1a21b1d/59dd13defb8d297e549f44ba/01c61250fbcb65078d6bf586727886f1/como-meter-todo-en-una-maleta-de-mano.jpg\" alt=\"\"></div>\n\n</div>\n\n<div class=\"wrapper-white white\">\n  <div class=\"container\">\n    <div class=\"section\">\n\n      <div class=\"row\">\n        <div class=\"col s12 center\">\n          <h3><i class=\"mdi-content-send brown-text\"></i></h3>\n          <h4>La idea</h4>\n          <p class=\"left-align light\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra\n            ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices\n            erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<div class=\"parallax-container valign-wrapper\">\n  <div class=\"section no-pad-bot\">\n    <div class=\"container\">\n      <div class=\"row center\">\n        <h5 class=\"header col s12 light\">¡Dedica tu tiempo a lo que de verdad importa!</h5>\n      </div>\n    </div>\n  </div>\n  <div class=\"parallax\"><img src=\"https://trello-attachments.s3.amazonaws.com/59d28f5f79626218b1a21b1d/59dd13defb8d297e549f44ba/fcb67388e34ca3f22641ce973dd2f0e5/maletas.jpg\" alt=\"Unsplashed background img 3\"></div>\n</div>\n\n<footer class=\"page-footer red lighten-2\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col l6 s12\">\n        <h5 class=\"white-text\">About me</h5>\n        <p class=\"grey-text text-lighten-4\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra\n          ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus..</p>\n      </div>\n      <div class=\"col l3 s12\">\n        <h5 class=\"white-text\">Contacta</h5>\n        <ul>\n          <li><a class=\"white-text\" href=\"#!\">Facebook</a></li>\n          <li><a class=\"white-text\" href=\"#!\">Linkedin</a></li>\n          <li><a class=\"white-text\" href=\"https://github.com/raquel500c/kemeyebo-app\">Git Hub</a></li>\n\n        </ul>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"footer-copyright\">\n    <div class=\"container\">\n      Made by <a class=\"brown-text text-lighten-3\" href=\"\">Raquel500c</a>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        $('.parallax').parallax();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-touched {\n  border-color: blue;\n}\n\n.ng-touched.ng-invalid {\n  border-color: red;\n}\n\n.ng-touched.ng-valid {\n  border-color: green;\n}\n\n.form-container{\n  background-color: white ;\n}\n\n.card-panel{\n  margin-top:50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card-panel white\">\n    <div class='form-container'>\n      <form class=\"col s12\">\n        <div class=\"form-group\">\n          <h2 class='red-text text-lighten-1'> Accede a tu cuenta! </h2>\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <label for=\"username\" data-error=\"wrong\" data-success=\"right\"> Username </label>\n              <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\" class=\"validate\" required/>\n            </div>\n            <div class=\"input-field col s6\">\n              <label for=\"password\" data-error=\"wrong\" data-success=\"right\">Password</label>\n              <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\" class=\"validate\" required/>\n            </div>\n          </div>\n            <button (click)=\"login()\" class=\"waves-effect waves-light btn blue-grey btn-margin \" type='submit'>\n              LOGIN\n              <i class=\"material-icons right\">send</i>\n            </button>\n          </div>\n      </form>\n    </div>\n    <p> {{ feedback }} </p>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginformComponent = (function () {
    function LoginformComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: ""
        };
    }
    LoginformComponent.prototype.ngOnInit = function () {
    };
    LoginformComponent.prototype.login = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password;
        if (username != "" && password != "") {
            console.log("Login with " + username + " " + password);
            this.auth.login(username, password)
                .map(function (user) { return console.log(user); })
                .subscribe(function (user) { return _this.router.navigate(['/articles']); });
        }
        else {
            console.log("You must set a username and a password");
        }
    };
    return LoginformComponent;
}());
LoginformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loginform',
        template: __webpack_require__("../../../../../src/app/loginform/loginform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loginform/loginform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginformComponent);

var _a, _b;
//# sourceMappingURL=loginform.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__articles_list_articles_list_component__ = __webpack_require__("../../../../../src/app/articles-list/articles-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_article_add_article_component__ = __webpack_require__("../../../../../src/app/add-article/add-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__article_detail_article_detail_component__ = __webpack_require__("../../../../../src/app/article-detail/article-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_2__userprofile_userprofile_component__["a" /* UserprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__loginform_loginform_component__["a" /* LoginformComponent */], },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__signupform_signupform_component__["a" /* SignupformComponent */], },
    { path: 'articles', component: __WEBPACK_IMPORTED_MODULE_5__articles_list_articles_list_component__["a" /* ArticlesListComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_6__add_article_add_article_component__["a" /* AddArticleComponent */] },
    { path: 'article/:id', component: __WEBPACK_IMPORTED_MODULE_7__article_detail_article_detail_component__["a" /* ArticleDetailComponent */] },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/services/articles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASEURL;
var ArticlesService = (function () {
    function ArticlesService(http) {
        this.http = http;
    }
    ArticlesService.prototype.getList = function (id) {
        this.id = id._id;
        console.log("LOCO THIS", this.id);
        return this.http.get(BASE_URL + "/api/articles/unico/" + this.id)
            .map(function (res) { return res.json(); })
            .map(function (list) {
            return list.map(function (e) {
                if (!e.image.includes('http')) {
                    e.image = BASE_URL + e.image;
                }
                ;
                console.log(e.image);
                return e;
            });
        });
    };
    ArticlesService.prototype.newArticle = function () {
        return this.http.post(BASE_URL + "/api/articles", this.options)
            .map(function (res) { return res.json(); });
    };
    ArticlesService.prototype.get = function (id) {
        return this.http.get(BASE_URL + "/api/articles/" + id)
            .map(function (res) { return res.json(); });
    };
    ArticlesService.prototype.edit = function (article) {
        return this.http.put(BASE_URL + "/api/articles/" + article.id, article)
            .map(function (res) { return res.json(); });
    };
    ArticlesService.prototype.remove = function (id) {
        return this.http.delete(BASE_URL + "/api/articles/" + id)
            .map(function (res) { return res.json(); });
    };
    return ArticlesService;
}());
ArticlesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ArticlesService);

var _a;
//# sourceMappingURL=articles.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASE_URL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/auth";
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.userLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe();
    }
    AuthService.prototype.getLoginEventEmitter = function () {
        return this.userLoginEvent;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.emitUserLoginEvent = function (user) {
        this.user = user;
        this.userLoginEvent.emit(user);
        return user;
    };
    AuthService.prototype.handleError = function (e) {
        console.log("AUTH ERROR");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    AuthService.prototype.signup = function (username, password) {
        var _this = this;
        console.log("entrooo");
        return this.http.post(BASE_URL + "/signup", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(BASE_URL + "/login", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(BASE_URL + "/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(null); })
            .catch(this.handleError);
    };
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(BASE_URL + "/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/isLoggedIn.canactivate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var timeout = function (nS) { return new Promise(function (resolve) { return setTimeout(resolve, nS * 1000); }); };
var IsLoggedInService = (function () {
    function IsLoggedInService(auth) {
        this.auth = auth;
    }
    IsLoggedInService.prototype.canActivate = function () {
        console.log("Checking can activate");
        //return timeout(5).then(() => true);
        //return this.auth.isLoggedIn().map(user => true)
        return this.auth.getUser() ? true : false;
        //return false;
    };
    return IsLoggedInService;
}());
IsLoggedInService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], IsLoggedInService);

var _a;
//# sourceMappingURL=isLoggedIn.canactivate.service.js.map

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-touched {\n  border-color: blue;\n}\n\n.ng-touched.ng-invalid {\n  border-color: red;\n}\n\n.ng-touched.ng-valid {\n  border-color: green;\n}\n\n.form-container{\n  background-color: white ;\n}\n\n.card-panel{\n  margin-top:50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card-panel white\">\n    <div class='form-container'>\n      <form class=\"col s12\">\n        <div class=\"form-group\">\n    <!-- <h2> Signup </h2>\n      <div class=\"input-field col s6\">\n    <label for=\"username\" data-error=\"wrong\" data-success=\"right\"> Username </label>\n    <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\" class=\"validate\" required/>\n  </div>\n  <div class=\"input-field col s6\">\n    <label for=\"password\" data-error=\"wrong\" data-success=\"right\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\" class=\"validate\" required/>\n  </div>\n    <button (click)=\"signup()\" class=\"waves-effect waves-light btn blue-grey btn-margin\" type='submit'>\n      SIGNUP\n      <i class=\"material-icons right\">send</i>\n    </button>\n  </form>\n</div> -->\n<h2 class='red-text text-lighten-1'> Regístrate!</h2>\n<div class=\"row\">\n  <div class=\"input-field col s6\">\n    <label for=\"username\" data-error=\"wrong\" data-success=\"right\"> Username </label>\n    <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\" class=\"validate\" required/>\n  </div>\n  <div class=\"input-field col s6\">\n    <label for=\"password\" data-error=\"wrong\" data-success=\"right\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\" class=\"validate\" required/>\n  </div>\n</div>\n  <button (click)=\"signup()\" class=\"waves-effect waves-light btn blue-grey btn-margin\" type='submit'>\n    SIGNUP\n    <i class=\"material-icons right\">send</i>\n  </button>\n</div>\n</form>\n</div>\n<p> {{ feedback }} </p>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupformComponent = (function () {
    function SignupformComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: ""
        };
    }
    SignupformComponent.prototype.ngOnInit = function () {
    };
    SignupformComponent.prototype.signup = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password;
        if (username != "" && password != "") {
            console.log("Signup with " + username + " " + password);
            this.auth.signup(username, password)
                .map(function (user) { return console.log(user); })
                .subscribe(function (user) { return _this.router.navigate(['/']); });
        }
        else {
            console.log("You must set a username and a password");
        }
    };
    return SignupformComponent;
}());
SignupformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signupform',
        template: __webpack_require__("../../../../../src/app/signupform/signupform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signupform/signupform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupformComponent);

var _a, _b;
//# sourceMappingURL=signupform.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!user\">\n  <h2>NO USER LOGGED IN</h2>\n</div>\n\n<div *ngIf=\"user\">\n  <h2> {{ user.username }} </h2>\n  <button (click)=\"auth.logout().subscribe()\"> logout </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserprofileComponent = (function () {
    function UserprofileComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.title = 'Kemeyebo';
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    UserprofileComponent.prototype.ngOnInit = function () {
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userprofile',
        template: __webpack_require__("../../../../../src/app/userprofile/userprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/userprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UserprofileComponent);

var _a;
//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// LOCAL-->
// export const environment = {
//   production: false,
//   BASEURL: 'http://localhost:3000'
// };
// //DEPLOY-->
var environment = {
    production: true,
    BASEURL: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map