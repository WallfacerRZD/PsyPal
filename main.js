(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account.service.ts":
/*!************************************!*\
  !*** ./src/app/account.service.ts ***!
  \************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");




var AccountService = /** @class */ (function () {
    function AccountService(httpClient) {
        this.httpClient = httpClient;
    }
    AccountService.prototype.login = function (eMail, password) {
        var loginURL = _config__WEBPACK_IMPORTED_MODULE_3__["host"] + 'api/register';
        var data = {
            E_mail: eMail,
            passwd: password,
        };
        return this.httpClient.post(loginURL, data, this.getHttpOption());
    };
    AccountService.prototype.register = function (email, name, password, gender, real_name, idNumber, phone_number, address, birthday) {
        var registrationURL = _config__WEBPACK_IMPORTED_MODULE_3__["host"] + 'api/register';
        var data = {
            mail_address: email,
            user_name: name,
            user_password: password,
            user_gender: gender,
            user_real_name: real_name,
            user_sfz: idNumber,
            user_phone: phone_number,
            user_dizhi: address,
            user_birthday: birthday,
        };
        this.httpClient.post(registrationURL, data, this.getHttpOption()).subscribe(function (response) {
            console.log(response);
        });
    };
    AccountService.prototype.getHttpOption = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        return httpOptions;
    };
    AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navigation-bar {\r\n  padding-top: 40px;\r\n}\r\n\r\n#footer {\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  background-color: #595959;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 65px;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YsUUFBUTtDQUNUIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2aWdhdGlvbi1iYXIge1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcblxyXG4jZm9vdGVyIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 25px; min-width: 1900px; min-height: 100%;position:relative;\" >\r\n  <div style=\"padding-bottom: 20px\">\r\n    <app-tool-bar></app-tool-bar>\r\n  </div>\r\n  <div id=\"navigation-bar\" style=\"background: url('assets/background/2.jpg')\">\r\n    <app-navigation-bar></app-navigation-bar>\r\n  </div>\r\n  <div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div>\r\n    <app-footer id=\"footer\"></app-footer>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ida';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tool-bar/tool-bar.component */ "./src/app/tool-bar/tool-bar.component.ts");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation-bar/navigation-bar.component */ "./src/app/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _specialist_specialist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./specialist/specialist.component */ "./src/app/specialist/specialist.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _article_content_article_content_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./article-content/article-content.component */ "./src/app/article-content/article-content.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");





















Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9___default.a);
var ROUTES = [
    { path: 'main', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_12__["MainPageComponent"] },
    { path: 'article', component: _article_article_component__WEBPACK_IMPORTED_MODULE_15__["ArticleComponent"] },
    { path: 'specialist', component: _specialist_specialist_component__WEBPACK_IMPORTED_MODULE_17__["SpecialistComponent"] },
    { path: 'articleContent/:id', component: _article_content_article_content_component__WEBPACK_IMPORTED_MODULE_19__["ArticleContentComponent"] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_18__["RegistrationComponent"] },
    { path: 'test', component: _test_test_component__WEBPACK_IMPORTED_MODULE_20__["TestComponent"] },
    { path: '', redirectTo: 'main', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_10__["ToolBarComponent"],
                _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavigationBarComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_12__["MainPageComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_14__["CarouselComponent"],
                _article_article_component__WEBPACK_IMPORTED_MODULE_15__["ArticleComponent"],
                _specialist_specialist_component__WEBPACK_IMPORTED_MODULE_17__["SpecialistComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_18__["RegistrationComponent"],
                _article_content_article_content_component__WEBPACK_IMPORTED_MODULE_19__["ArticleContentComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_20__["TestComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot(ROUTES)
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["zh_CN"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article-content/article-content.component.css":
/*!***************************************************************!*\
  !*** ./src/app/article-content/article-content.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\r\n  width: 60%;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS1jb250ZW50L2FydGljbGUtY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9hcnRpY2xlLWNvbnRlbnQvYXJ0aWNsZS1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudCB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/article-content/article-content.component.html":
/*!****************************************************************!*\
  !*** ./src/app/article-content/article-content.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" style=\"display: table;padding-bottom: 50px\">\n  <h1>{{title}}</h1>\n  <div>\n    <span>日期: {{date}}</span>\n    <span style=\"margin-left: 50px\">作者: {{author}}</span>\n  </div>\n  <div style=\"float: left;width: 65%;font-size: 21px;margin-top: 20px;height: 100%;\">\n    <p>{{content}}</p>\n  </div>\n  <div style=\"float: right; width: 25%\">\n    <nz-card id=\"card1\"\n      nzTitle=\"热点推荐\"\n      nzHoverable style=\"width:100%\">\n      <p>人最大的愚蠢，是见不得身边人好</p>\n      <p>对不起，从来就没有好的原生家庭</p>\n      <p>和人相处，你需要注意的10个技巧的！</p>\n      <p>你可以为自己而活</p>\n      <p>层次越低，越喜欢花时间在这3件事上</p>\n    </nz-card>\n\n    <nz-card id=\"card2\"\n             nzTitle=\"精彩推荐\"\n             nzHoverable style=\"width:100%;margin-top: 20px\">\n      <p>永远不要小看不合群的人</p>\n      <p>周国平的成功观：优秀第一，成功第二</p>\n      <p>发脾气的女人，其实很可爱</p>\n      <p>阿德勒：爱情与婚姻需要真诚合作</p>\n      <p>心理解读：情侣之间应该有秘密吗?</p>\n    </nz-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/article-content/article-content.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/article-content/article-content.component.ts ***!
  \**************************************************************/
/*! exports provided: ArticleContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleContentComponent", function() { return ArticleContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArticleContentComponent = /** @class */ (function () {
    function ArticleContentComponent() {
        this.title = '原生家庭的负面影响|“长大后我就成了我父母';
        this.author = 'PsyPal';
        this.content = '自从上一篇“对不起,从来就没有好的原生家庭”发表之后,我收到了很多读者的来信和留言。\n' +
            '\n' +
            '其中有的读者是通过文章找到了一些共鸣,而有一些读者则表示出更多的困惑,认为自己的情况与文中的例子有些差距,所以不知道该做些什么,才能降低原生家庭的负面影响,让自己生活得更轻松一点。\n' +
            '\n' +
            '接下来,我将通过3个读者的故事作为引入,谈谈如何降低原生家庭的负面影响。\n' +
            '\n' +
            '故事一：父母如此轻视我,我该如何重视我自己?\n' +
            '\n' +
            '小然今年28岁,上有哥哥,下有弟弟,她位居第二。虽然是家中唯一的女儿,但是因为潮汕当地重男轻女的观念根深蒂固,所以小然非但没有获得父母的宠爱,反而是家里最受冷落的孩子。\n' +
            '\n' +
            '家里开饭店,小然从小就被要求去店里做帮工,但哥哥和弟弟却可以幸免,父母的理由是男孩子要多读书,以后才会有出息,而女孩长大了只要会相夫教子就可以了。\n' +
            '\n' +
            '小然自小聪明懂事,也暗暗的努力学习,希望长大了离开这个没有爱和关怀的家庭。但是当她考上高中以后,父母却告诉她,饭店需要人手,女孩读书太多也无用,干脆让她回饭店帮忙。\n' +
            '\n' +
            '梦想通过上大学转变命运的小然陷入绝望中,看着花大价钱通关系上了大学的哥哥,以及被家人宠溺得乖张任性的弟弟,小然对父母产生了浓烈的恨意。\n' +
            '\n' +
            '在饭店帮了7年忙以后,因不满父母的强势干预(让她嫁给一个当地没文化的生意人),阿然离家出走去到了遥远的广州。父母因此要和她断绝关系,并将过去小然对家里所有的付出一笔勾销,和亲戚邻居都说小然是不孝顺的白眼狼。\n' +
            '\n' +
            '小然很是困惑:难道只有无条件服从父母,就是孝顺吗?\n' +
            '\n' +
            '故事二:30年前母亲抛弃我;如今我该如何面对孤独又白发苍苍的她?\n' +
            '\n' +
            '阿K是一个四十岁的男士,他说自己是个特别内向的人,即便在老婆孩子面前,感情也很少流露。\n' +
            '\n' +
            '他说和陌生人说话会更有自在,因为对方的评价和建议会更加的客观。\n' +
            '\n' +
            '由此可见,这位先生是个对周围人设防,且没有稳定安全感的人。\n' +
            '\n' +
            '翻开他的童年,才发现他在人前的害怕和紧张,以及对人群的不信任,都是出自童年的那一次创伤性经历:父亲离世,母亲抛下他改嫁了。\n' +
            '\n' +
            '6岁以前,他家都是风平浪静的日子。但是六岁那年,父亲突然暴病去世,母亲以泪洗面的带着他和妹妹生活了半年以后,就带着妹妹改嫁他乡了。\n' +
            '\n' +
            '日子陷入了地狱般的绝境,一年之中,他成了孤儿。那时候通讯不发达,没有人告诉她,母亲嫁到哪里去了。此后的童年里,陪伴他的,只有年迈且半瞎的爷爷,以及村里的一只野狗。\n' +
            '\n' +
            '在学校他没有朋友,回到家面对内向的爷爷,他也几乎不开口说话。直到高中毕业以后,遇到了他的爱人,给了他很多的理解和关爱,他才觉得人间尚有一丝温暖存在,他们一起打工,一起开店,最后将小店升级成了一家公司。\n' +
            '\n' +
            '“我的经济不错,还有了两个儿子,他们都很健康,但是我的心里始终空空的,我无数次做梦都会梦到那个场景,母亲带着妹妹走了,我在村口哭着追……”\n' +
            '\n' +
            '前几年继父已经离世,随后母亲一个人生活,很多人认为我应该将母亲接至身边给她安度晚年,但是我不愿意,因为我一见到母亲,内心的伤口就会隐痛,甚至流血,那些年食不果腹,风雨飘摇的样子,又回到了我的眼前。\n' +
            '\n' +
            '可是,我这样做是不是太不孝顺了?\n' +
            '\n' +
            '故事三：为什么我越想逃离母亲,母亲的影响却越强烈?\n' +
            '\n' +
            '麦子说她的童年简直是灾难,父母经常当着她和哥哥的面吵架,而且母亲还动不动就拿棍子打他们两个。\n' +
            '\n' +
            '这一打,就是十几年,最后一次打她,是麦子高二的时候,有一个周末,麦子边走边和同桌的男同学讨论一道数学题,谈话间,那个同学将自己的笔记本拿出来给麦子,说自己对于解题的思路都在笔记本里了,让麦子带回家好好看一看。\n' +
            '\n' +
            '就在这时,麦子的妈妈出现了,以为麦子的同桌是在向麦子传递情书,将她拉到一边就给了她一巴掌,并训斥她:你的重点是学习,不要做不要脸的事!\n' +
            '\n' +
            '麦子半天才回过神来,这一记耳光,连同那句“不要脸”成了她青春生活里,最沉重的烙印。后来麦子为了逃离父母,考上了外省的大学。\n' +
            '\n' +
            '原本以为逃离了父母就可以过得更好的麦子,却发现自从结婚以后,自己对待丈夫的态度,以及孩子的态度,都和自己的母亲有着惊人的相似。\n' +
            '\n' +
            '为什么,我越想逃离母亲,反而越像她了?\n' +
            '\n' +
            '以上就是三个读者的来信,三人各有各的不幸和痛苦,有被忽视的,又被抛弃的,有被殴打甚至羞辱的。\n' +
            '\n' +
            '过去她们以为随着时间的流逝,这些痛苦会逐渐消散,可是长大以后,才恍然发现,这些伤害和影响已经成为了他们生命中的一部分,在牢牢的控制着他们的生活。\n' +
            '\n' +
            '这,就是童年的影响。\n' +
            '\n' +
            ' 02 \n' +
            '\n' +
            '那么,恶劣童年背后,隐藏着父母的哪些关键信息?\n' +
            '\n' +
            '1.时代以及观念的原因。\n' +
            '\n' +
            '小然从小生活的环境,有着严重的男尊女卑的思想,不仅是小然自己,她的母亲也经历过被父母忽视和冷落的境遇,只是她比小然更加不懂得反抗以及争取自己的权益。\n' +
            '\n' +
            '2.父母的童年也有缺陷,未曾得到过来自自己原生家庭的无条件的支持和爱。\n' +
            '\n' +
            '我曾在一个电影中,见到一个孩子哭着对自己的父亲说:你为什么从来都不对我笑?\n' +
            '\n' +
            '父亲沉默了,孩子的母亲说:因为你的父亲是个孤儿,他从来没有见到过他的父亲对他笑。爱如果是一种能力,那也不是人类天生就具备的,而是后天习得的,而那个教我们如何爱的,正是我们的父母。\n' +
            '\n' +
            '3.父母本身有被虐待的经历。\n' +
            '\n' +
            '我们每个人都有一个个人病史经历,上面会填写我们是否有家族遗传史,传染病史,或者过敏史。其实在这些生理遗传之外,心理遗传的作用,更加巨大。\n' +
            '\n' +
            '比如一个暴力的孩子,大多出自一个暴力家庭,一个冷漠的孩子,出自一个没有爱的家庭。\n' +
            '\n' +
            '以此类推,如果我们的父母擅用暴力或者言语攻击,很大程度上证明,他在自己的原生家庭里,也曾受到同等的对待。就如同我父亲那样,他在继父的吼叫声中长大,因此吼叫和急躁成了他性格中最明显的标签。\n' +
            '\n' +
            '家庭中的代际传承,和基因复制一样,对我们的生活起着强大的力量。\n' +
            '\n' +
            ' 03 \n' +
            '\n' +
            '那么,我们在发现自己的生活问题与原生家庭有着不可分割的关系的时候,可以做些什么,以最大程度肃清其负面影响呢?\n' +
            '\n' +
            '1.接纳:童年无论好坏,都已经是我们生命里的一部分\n' +
            '\n' +
            '接纳,不是接纳来自父母的伤害,而是接纳我们的生命中有一段,是充满苦难和荆棘的。\n' +
            '\n' +
            '父母以及家庭留下的伤痛看似是人为的,但也可以看作是某种无意的过失。因为没有哪位母亲会在孩子刚出生的时候,就发誓要伤害自己的孩子。而后一系列不良行为的背后,一定有她潜意识的某些动因。\n' +
            '\n' +
            '因此放下与父母纠缠,就是我们处理童年创伤的第一步。\n' +
            '\n' +
            '2.认同:我们的父母也有不幸的童年\n' +
            '\n' +
            '我们的习惯和行为方式大多是从父母那里学习来的,而我们的父母亦然。\n' +
            '\n' +
            '他们对待我们的态度,也是他们的养育者对待他们的态度。他们的情绪处理方式,他们的养育态度,极大程度都代表着他们父母的方式。\n' +
            '\n' +
            '所以他的抛弃,羞辱,和殴打,或许都是来自于他童年里的一种强迫性重复。他内化了父母的毒,然后传递给他的孩子。他的孩子就成了第三代,甚至第四代受害人。\n' +
            '\n' +
            '当你觉得自己是原生家庭的受害者时,你几乎可以断定,你父母可能也是原生家庭的受害者。这样你的恨或许可以减轻许多。\n' +
            '\n' +
            '3. 分辨:父母的人格是否是健全\n' +
            '\n' +
            '现在的教育,奉行方法论,认为父母是一门终身职业,要经历正规训练,掌握了基本技巧才能养育好孩子,但事实上教育的本源,不是单一的方法论,而是父母的人格论。\n' +
            '\n' +
            '我见过高学历的父母当街羞辱自己的孩子,也见过目不识丁的父母特别会尊重和爱护自己的孩子。\n' +
            '\n' +
            '如果父母本身人格不健全,或者有着明显的心理疾患,带着他们去正规途径进行治疗是上策。如果他们拒绝,那就尽可能和他们保持一定的界限。\n' +
            '\n' +
            '4. 倾诉:对不起,我暂时没有亲近的能力\n' +
            '\n' +
            '中国历来将孝道列在民族教育的首要位置,但是孝的背后,其实需要另一个词来支撑,就是“慈”,如果父母做不到对子女的慈爱,那么子女就很难发自内心去孝顺父母。\n' +
            '\n' +
            '假如你的父母伤害了你,甚至抛弃了你,你不可能一边捂着流血的伤口一边还大声的说“我爱你,我感谢你”,这是不正常的情感反应。\n' +
            '\n' +
            '最好的疗愈途径,是面对面和父母沟通,让父母知道他们当年的所作所为给你造成的影响,让他们知道你不是不愿意孝顺他们,亲近他们,而是你暂时没有这个心理能力。\n' +
            '\n' +
            '就如同演员伊能静那样,她直到四十岁还带着母亲儿时留给她的消极影响生活,一度精神崩溃到想服毒自尽。后来她接受心理治疗师的建议,通过电话告诉母亲,当年母亲那样冷落并且怨怼自己,给她的人生带来了巨大的影响。\n' +
            '\n' +
            '最后母亲首次承认了自己的过错,伊能静才得以将童年那一页翻过,继续开始新的生活篇章。\n' +
            '\n' +
            '但要注意的是,直接地阐述父母对我们的伤害,可能会让父母难以接受,所以这样的倾诉,最好是在专业的帮助下进行。但可以让他们知道,你只是需要一些时间来处理,并不是不愿意亲近他们。\n' +
            '\n' +
            '5. 寻求帮助:找一个专业的咨询师帮助你\n' +
            '\n' +
            '最后,如果你觉得自己的状态非常糟糕,过去的创伤极大的影响了现在的关系和生活,那请你去找专业治疗师做治疗。\n' +
            '\n' +
            '如果创伤来自父亲,建议去找和父亲年龄相仿的男性治疗师,如果创伤来自母亲,建议找和母亲年纪相仿的女性治疗师。\n' +
            '\n' +
            '相信治疗师这一个重要客体,给你的抱持和接纳,可以作为你理想父母的形象,帮你逐渐平复来自现实父母的那部分创伤。   \n' +
            '\n' +
            '生命最初,我们借由母体来到这个世界,过程是被动的。今天,我们可以通过童年里那道裂缝,迎接生命中的第二缕阳光,让自己获得重生。';
        this.date = new Date().toLocaleString();
    }
    ArticleContentComponent.prototype.ngOnInit = function () {
    };
    ArticleContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-content',
            template: __webpack_require__(/*! ./article-content.component.html */ "./src/app/article-content/article-content.component.html"),
            styles: [__webpack_require__(/*! ./article-content.component.css */ "./src/app/article-content/article-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArticleContentComponent);
    return ArticleContentComponent;
}());



/***/ }),

/***/ "./src/app/article/article.component.css":
/*!***********************************************!*\
  !*** ./src/app/article/article.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/article/article.component.html":
/*!************************************************!*\
  !*** ./src/app/article/article.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-table #basicTable [nzData]=\"tableData\" [nzPageSize]=\"5\">\n  <thead>\n  <tr>\n    <th>标题</th>\n    <th>日期</th>\n    <th>作者</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr\n    routerLink=\"/articleContent/1\"\n    *ngFor=\"let data of basicTable.data\">\n    <td>{{data.title}}</td>\n    <td>{{data.date}}</td>\n    <td>{{data.author}}</td>\n  </tr>\n  </tbody>\n</nz-table>\n"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
        this.tableData = [
            { title: '原生家庭的负面影响|“长大后我就成了我父母”', date: new Date().toLocaleString(), author: 'PsyPal' },
            { title: '和人相处，你需要注意的10个技巧的！', date: new Date().toLocaleString(), author: 'PsyPal' },
            { title: '你可以为自己而活', date: new Date().toLocaleString(), author: 'PsyPal' },
            { title: '发脾气的女人，其实很可爱', date: new Date().toLocaleString(), author: 'PsyPal' },
            { title: '二胎时代，父母偏心对孩子影响最大', date: new Date().toLocaleString(), author: 'PsyPal' },
            { title: '心理解读：情侣之间应该有秘密吗?', date: new Date().toLocaleString(), author: 'PsyPal' },
            { title: '性格影响寿命：什么样的性格最爱生病', date: new Date().toLocaleString(), author: 'PsyPal' },
            { title: '幽默特质使人事业离成功更近', date: new Date().toLocaleString(), author: 'PsyPal' },
            { title: '鲶鱼效应：压力大的人会更加优秀', date: new Date().toLocaleString(), author: 'PsyPal' },
            { title: '浅谈心理上的“姐弟恋', date: new Date().toLocaleString(), author: 'PsyPal' },
        ];
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/article/article.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%; margin: 0 auto\">\n  <nz-carousel nzAutoPlay>\n    <div style=\"height: 150px;\" nz-carousel-content *ngFor=\"let index of [1, 2, 3]\">\n      <img style=\"height: 100%;width: 100%;\" src=\"assets/slide/1.jpg\">\n    </div>\n  </nz-carousel>\n</div>\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: host */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "host", function() { return host; });
var host = 'http://localhost:8080/netplus_war_exploded/';


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\r\n  margin: 20px;\r\n}\r\n\r\n.footer-link {\r\n  margin: 20px;\r\n}\r\n\r\n#footer {\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  background-color: #595959;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 65px;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n#text-area {\r\n  border-top: #cccccc;\r\n  border-bottom: #cccccc;\r\n  border-top-style: solid;\r\n  border-bottom-style: solid;\r\n  width: 562px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLFFBQVE7Q0FDVDs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0IHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5mb290ZXItbGluayB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4jZm9vdGVyIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiN0ZXh0LWFyZWEge1xyXG4gIGJvcmRlci10b3A6ICNjY2NjY2M7XHJcbiAgYm9yZGVyLWJvdHRvbTogI2NjY2NjYztcclxuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICB3aWR0aDogNTYycHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\n  <div id=\"text-area\">\n    <span class=\"footer-link\">联系我们</span>\n    <span class=\"footer-link\">关于我们</span>\n    <span class=\"footer-link\">加入我们</span>\n    <span class=\"footer-link\">免责声明</span>\n    <span class=\"footer-link\">反馈</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-page/main-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-carousel></app-carousel>\n<div style=\"width: 800px; height: 400px; margin: 0 auto;\">\n  <img style=\"width: 100%; height: 100%\" src=\"assets/background/1.jpg\">\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul nz-menu [nzMode]=\"'horizontal'\">\n  <li nz-submenu>\n    <span title><i nz-icon type=\"setting\"></i>更多</span>\n    <ul>\n      <li nz-menu-item><i nz-icon type=\"mail\"></i>更多1</li>\n      <li nz-menu-item><i nz-icon type=\"mail\"></i>更多2</li>\n      <li nz-menu-item><i nz-icon type=\"mail\"></i>更多3</li>\n      <li nz-menu-item><i nz-icon type=\"mail\"></i>更多4</li>\n    </ul>\n  </li>\n  <li nz-menu-item><i nz-icon type=\"mail\"></i>机构</li>\n  <li nz-menu-item><i nz-icon type=\"mail\"></i>问答</li>\n  <li nz-menu-item routerLink=\"/specialist\"><i nz-icon type=\"mail\"></i>找专家</li>\n  <li nz-menu-item routerLink=\"/test\"><i nz-icon type=\"mail\"></i>测评</li>\n  <li nz-menu-item routerLink=\"/article\"><i nz-icon type=\"mail\"></i>文章</li>\n  <li nz-menu-item routerLink=\"/main\"><i nz-icon type=\"mail\"></i>首页</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.ts ***!
  \************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent() {
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
    };
    NavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation-bar',
            template: __webpack_require__(/*! ./navigation-bar.component.html */ "./src/app/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.css */ "./src/app/navigation-bar/navigation-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#form {\r\n  width: 655px;\r\n  margin: 0 auto;\r\n  border-color: rgba(246, 221, 224, 0.5);\r\n  border-style: solid;\r\n  border-width: 14px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1Q0FBdUM7RUFDdkMsb0JBQW9CO0VBQ3BCLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb3JtIHtcclxuICB3aWR0aDogNjU1cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0NiwgMjIxLCAyMjQsIDAuNSk7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDE0cHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"background\" style=\"height: 748px; background-image: url('assets/background/3.jpg');\n    background-size: 100% 100%;\n    padding-top: 50px;\">\n  <div id=\"form\" style=\"background: white\">\n    <form (ngSubmit)=\"submitForm()\" [formGroup]=\"validateForm\" nz-form>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"labelSize\" nzFor=\"email\" nzRequired>邮箱</nz-form-label>\n        <nz-form-control [nzSm]=\"inputSize\">\n          <input formControlName=\"email\" id=\"email\" nz-input/>\n          <nz-form-explain *ngIf=\"validateForm.get('email')?.dirty && validateForm.get('email')?.errors\">\n            The input is not valid E-mail!\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"labelSize\" nzFor=\"password\" nzRequired>密码</nz-form-label>\n        <nz-form-control [nzSm]=\"inputSize\" [nzXs]=\"24\">\n          <input\n            (ngModelChange)=\"updateConfirmValidator()\"\n            formControlName=\"password\"\n            id=\"password\"\n            nz-input\n            type=\"password\"\n          />\n          <nz-form-explain *ngIf=\"validateForm.get('password')?.dirty && validateForm.get('password')?.errors\"\n          >Please input your password!\n          </nz-form-explain\n          >\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"labelSize\" nzFor=\"checkPassword\" nzRequired>确认密码</nz-form-label>\n        <nz-form-control [nzSm]=\"inputSize\" [nzXs]=\"24\">\n          <input formControlName=\"checkPassword\" id=\"checkPassword\" nz-input type=\"password\"/>\n          <nz-form-explain\n            *ngIf=\"validateForm.get('checkPassword')?.dirty && validateForm.get('checkPassword')?.errors\"\n          >\n            <ng-container *ngIf=\"validateForm.get('checkPassword')?.hasError('required')\">\n              Please confirm your password!\n            </ng-container>\n            <ng-container *ngIf=\"validateForm.get('checkPassword')?.hasError('confirm')\">\n              Two passwords that you enter is inconsistent!\n            </ng-container>\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"labelSize\" nzFor=\"nickname\" nzRequired>\n          <span>\n            昵称\n            <i\n              nz-icon\n              nz-tooltip\n              nzTitle=\"你想别人怎么称呼你?\"\n              theme=\"outline\"\n              type=\"question-circle\"\n            ></i>\n          </span>\n        </nz-form-label>\n        <nz-form-control [nzSm]=\"inputSize\">\n          <input formControlName=\"nickname\" id=\"nickname\" nz-input/>\n          <nz-form-explain *ngIf=\"validateForm.get('nickname')?.dirty && validateForm.get('nickname')?.errors\"\n          >Please input your nickname!\n          </nz-form-explain\n          >\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"labelSize\" nzFor=\"real_name\" nzRequired>\n          <span>\n            真实姓名\n            <i\n              nz-icon\n              nz-tooltip\n              nzTitle=\"真实姓名\"\n              theme=\"outline\"\n              type=\"question-circle\"\n            ></i>\n          </span>\n        </nz-form-label>\n        <nz-form-control [nzSm]=\"inputSize\">\n          <input formControlName=\"real_name\" id=\"real_name\" nz-input/>\n          <nz-form-explain *ngIf=\"validateForm.get('real_name')?.dirty && validateForm.get('real_name')?.errors\"\n          >Please input your nickname!\n          </nz-form-explain\n          >\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"labelSize\" nzFor=\"idNumber\" nzRequired>\n          <span>\n            身份证号码\n          </span>\n        </nz-form-label>\n        <nz-form-control [nzSm]=\"inputSize\">\n          <input formControlName=\"idNumber\" id=\"idNumber\" nz-input/>\n          <nz-form-explain *ngIf=\"validateForm.get('idNumber')?.dirty && validateForm.get('idNumber')?.errors\"\n          >请输入你的身份证号码\n          </nz-form-explain\n          >\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"labelSize\" nzFor=\"phoneNumber\" nzRequired>电话号码</nz-form-label>\n        <nz-form-control [nzSm]=\"inputSize\" [nzValidateStatus]=\"validateForm.controls['phoneNumber']\" [nzXs]=\"24\">\n          <input formControlName=\"phoneNumber\" id=\"phoneNumber\" nz-input/>\n          <nz-form-explain *ngIf=\"validateForm.get('phoneNumber')?.dirty && validateForm.get('phoneNumber')?.errors\">\n            Please input your phone number!\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"labelSize\" nzFor=\"address\" nzRequired>住址</nz-form-label>\n        <nz-form-control [nzSm]=\"inputSize\" [nzValidateStatus]=\"validateForm.controls['phoneNumber']\" [nzXs]=\"24\">\n          <input formControlName=\"phoneNumber\" id=\"address\" nz-input/>\n          <nz-form-explain *ngIf=\"validateForm.get('address')?.dirty && validateForm.get('address')?.errors\">\n            请输入你的地址\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"labelSize\" nzRequired>\n          <span>\n            性别\n          </span>\n        </nz-form-label>\n        <nz-form-control [nzSm]=\"inputSize\">\n          <nz-select style=\"width: 120px;\" [(ngModel)]=\"gender\" nzPlaceHolder=\"男\">\n            <nz-option nzValue=\"男\" nzLabel=\"男\"></nz-option>\n            <nz-option nzValue=\"女\" nzLabel=\"女\"></nz-option>\n          </nz-select>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"labelSize\" nzRequired>出生日期</nz-form-label>\n        <nz-form-control [nzSm]=\"inputSize\">\n          <nz-date-picker formControlName=\"birthday\"></nz-date-picker>\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item nz-row style=\"margin-bottom:8px;\">\n        <nz-form-control [nzOffset]=\"6\" [nzSpan]=\"14\">\n          <button nz-button nzType=\"primary\">Register</button>\n        </nz-form-control>\n      </nz-form-item>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../account.service */ "./src/app/account.service.ts");




var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(fb, accountService) {
        this.fb = fb;
        this.accountService = accountService;
        this.labelSize = 6;
        this.inputSize = 16;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.validateForm = this.fb.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            checkPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            real_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nickname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            idNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            birthday: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.gender = '男';
    };
    RegistrationComponent.prototype.submitForm = function () {
        for (var i in this.validateForm.controls) {
            if (i) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (!this.validateForm.valid) {
            return;
        }
        var email = this.validateForm.get('email').value;
        var password = this.validateForm.get('password').value;
        var nickname = this.validateForm.get('nickname').value;
        var real_name = this.validateForm.get('real_name').value;
        var birthday = this.validateForm.get('birthday').value;
        var phoneNumber = this.validateForm.get('phoneNumber').value;
        var idNumber = this.validateForm.get('idNumber').value;
        var address = this.validateForm.get('address').value;
        this.accountService.register(email, nickname, password, this.gender, real_name, idNumber, phoneNumber, address, birthday);
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/specialist/specialist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/specialist/specialist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpYWxpc3Qvc3BlY2lhbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/specialist/specialist.component.html":
/*!******************************************************!*\
  !*** ./src/app/specialist/specialist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let specialist of specialists\" style=\"display: inline-block; margin: 50px\">\n  <nz-card nzHoverable style=\"width:240px\" [nzCover]=\"coverTemplate\">\n    <nz-card-meta [nzTitle]=\"specialist.name\" [nzDescription]=\"specialist.description\"></nz-card-meta>\n  </nz-card>\n  <ng-template #coverTemplate>\n    <img [alt]=\"specialist.name\" [src]=\"specialist.img\" />\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/specialist/specialist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/specialist/specialist.component.ts ***!
  \****************************************************/
/*! exports provided: SpecialistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialistComponent", function() { return SpecialistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpecialistComponent = /** @class */ (function () {
    function SpecialistComponent() {
        this.specialists = [
            {
                name: '专家1',
                description: '擅长领域：抑郁症、婚恋情感、人际关系、强迫症、焦虑症',
                img: 'assets/specialist/doctor.jpg'
            },
            {
                name: '专家2',
                description: '国际IMHTC催眠师，高级青少年心理导师，中国资深婚姻家庭情感专家，主任级治疗师，教育学硕士学位，心理学专业研究生，国家二级心理师',
                img: 'assets/specialist/doctor.jpg'
            },
            {
                name: '专家3',
                description: '擅长领域：工作压力、社交恐惧、同性恋、婚外恋、婚恋情感、自我认知、失眠、焦虑抑郁、孩子教育、强迫恐惧',
                img: 'assets/specialist/doctor.jpg'
            },
            {
                name: '专家4',
                description: '长婆媳关系、夫妻关系、亲子关系、人际关系、恋爱情感、学业障碍、职场心理、自我认知、依赖成瘾和学生早恋等一般心理问题和严重心理问题',
                img: 'assets/specialist/doctor.jpg'
            },
            {
                name: '专家5',
                description: '国际IMHTC催眠师，高级青少年心理导师，中国资深婚姻家庭情感专家，主任级治疗师，教育学硕士学位，心理学专业研究生，国家二级心理师',
                img: 'assets/specialist/doctor.jpg'
            },
            {
                name: '专家6',
                description: '国家二级心理咨询师，河北沧州咨询师主任，资深婚恋情感指导师，家庭治疗师，教育成长顾问，应用心理学专业毕业，明轩心理咨询工作室创办人，擅长婚恋情感、情感挽回、婚外恋、婚姻经营、个人成长、亲子教育、人际关系、职业减压、焦虑、抑郁、恐惧、强迫等方面的咨询，有丰富的实践经验',
                img: 'assets/specialist/doctor.jpg'
            }, {
                name: '专家7',
                description: '擅长领域：焦虑抑郁、社交恐惧、强迫症、催眠、失眠、情绪调节、人际关系、婚恋情感、敏感多疑、青少年干预',
                img: 'assets/specialist/doctor.jpg'
            }, {
                name: '专家8',
                description: '擅长领域：青少年心理干预、焦虑抑郁',
                img: 'assets/specialist/doctor.jpg'
            }, {
                name: '专家9',
                description: '国家二级心理咨询师',
                img: 'assets/specialist/doctor.jpg'
            },
            {
                name: '专家10',
                description: '擅长婚恋情感、情感挽回、婚外恋、婚姻经营、个人成长、亲子教育、人际关系、职业减压、焦虑、抑郁、恐惧、强迫等方面的咨询，有丰富的实践经验',
                img: 'assets/specialist/doctor.jpg'
            },
        ];
    }
    SpecialistComponent.prototype.ngOnInit = function () {
    };
    SpecialistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-specialist',
            template: __webpack_require__(/*! ./specialist.component.html */ "./src/app/specialist/specialist.component.html"),
            styles: [__webpack_require__(/*! ./specialist.component.css */ "./src/app/specialist/specialist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpecialistComponent);
    return SpecialistComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 35%; margin: 50px auto;\">\n  <h2>1. 你常感到与周围的人的关系和谐吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[1]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>2. 你常感到缺少伙伴吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[2]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>3. 你常感到没人可以信赖吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[3]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>4. 你常感到属于朋友们中的一员吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[4]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>5. 你常感到与周围的人有许多共同点吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[5]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>6. 你常感到与任何人都不亲密了吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[6]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>7. 你常感到你的兴趣与想法与周围的人不一样吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[7]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>8. 你常感到想要与人来往、结交朋友吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[8]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>9. 你常感到与人亲近吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[9]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>10. 你常感到被人冷落吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[10]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>11. 你常感到你与别人来往毫无意义吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[11]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>12. 你常感到没有人很了解你吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[12]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>13. 你常感到与人亲近吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[13]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>14. 你常感到与别人隔开了吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[14]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>15. 你常感到当你愿意时就能找到伙伴吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[15]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>16. 你常感到有人真正了解你吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[16]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>17. 你常感到羞怯吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[17]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>18. 你常感到人们围着你但并不关心你吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[18]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>19. 你常感到有人愿意与你交谈吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[19]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n  <h2>20. 你常感到有人值得你信赖吗？</h2>\n  <nz-radio-group [(ngModel)]=\"answer[20]\">\n    <label nz-radio nzValue=\"1\">我常常有此感觉</label>\n    <label nz-radio nzValue=\"2\">我有时有此感觉</label>\n    <label nz-radio nzValue=\"3\">我很少有此感觉</label>\n    <label nz-radio nzValue=\"4\">我从未有此感觉</label>\n  </nz-radio-group>\n</div>\n"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponent = /** @class */ (function () {
    function TestComponent() {
        this.answer = {};
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/tool-bar/tool-bar.component.css":
/*!*************************************************!*\
  !*** ./src/app/tool-bar/tool-bar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tool-bar {\r\n}\r\n\r\n#input {\r\n  width: 200px;\r\n  display: inline-block;\r\n  float: right;\r\n  margin-right: 200px;\r\n}\r\n\r\n.button {\r\n  float: right;\r\n  margin-right: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbC1iYXIvdG9vbC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDOztBQUVEO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Rvb2wtYmFyL3Rvb2wtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdG9vbC1iYXIge1xyXG59XHJcblxyXG4jaW5wdXQge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/tool-bar/tool-bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/tool-bar/tool-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"tool-bar\" style=\"height: 32px\">\n  <span class=\"button\">\n    <button routerLink=\"/registration\"\n            nz-button\n            nzSize=\"default\"\n            nzType=\"default\"><i nz-icon type=\"download\"></i>注册</button>\n  </span>\n  <span class=\"button\">\n    <button (click)=\"openLoginForm()\"\n            nz-button\n            nzSize=\"default\" nzType=\"default\"><i nz-icon type=\"download\"></i>登录</button>\n  </span>\n  <div style=\"width: 200px; margin-right: 20px; display: inline-block; float: right\">\n    <nz-input-group [nzPrefix]=\"prefixTemplate\" [nzSuffix]=\"suffixTemplate\">\n      <input nz-input placeholder=\"请输入内容\" type=\"text\"/>\n    </nz-input-group>\n  </div>\n  <ng-template #prefixTemplate><i nz-icon type=\"user\"></i></ng-template>\n  <ng-template #suffixTemplate><i nz-icon nz-tooltip nzTitle=\"Extra information\" type=\"info-circle\"></i></ng-template>\n</div>\n\n<nz-modal [(nzVisible)]=\"loginFormIsVisible\"\n          (nzOnCancel)=\"closeLoginForm()\"\n          (nzOnOk)=\"submitLoginForm()\"\n          nzTitle=\"登录\">\n  <div nz-row>\n    <div nz-col>\n      <form (ngSubmit)=\"submitLoginForm()\" [formGroup]=\"validateLoginForm\" class=\"login-form\" nz-form>\n        <nz-form-item>\n          <nz-form-control>\n            <nz-input-group [nzPrefix]=\"prefixUser\">\n              <input formControlName=\"userName\" nz-input placeholder=\"Username\" type=\"text\">\n            </nz-input-group>\n            <nz-form-explain\n              *ngIf=\"validateLoginForm.get('userName').dirty &&\n                         validateLoginForm.get('userName').errors\">\n              请输入用户名\n            </nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-control>\n            <nz-input-group [nzPrefix]=\"prefixLock\">\n              <input formControlName=\"password\" nz-input placeholder=\"Password\" type=\"password\">\n            </nz-input-group>\n            <nz-form-explain\n              *ngIf=\"validateLoginForm.get('password').dirty &&\n                             validateLoginForm.get('password').errors\">\n              请输入密码\n            </nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n      </form>\n      <ng-template #prefixUser><i nz-icon type=\"user\"></i></ng-template>\n      <ng-template #prefixLock><i nz-icon type=\"lock\"></i></ng-template>\n    </div>\n  </div>\n</nz-modal>\n\n<!--<nz-drawer-->\n  <!--[nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\"-->\n  <!--[nzMaskClosable]=\"false\"-->\n  <!--[nzWidth]=\"720\"-->\n  <!--[nzVisible]=\"registrationFormIsVisible\"-->\n  <!--nzTitle=\"注册\"-->\n  <!--(nzOnClose)=\"closeRegistrationForm()\"-->\n<!--&gt;-->\n  <!--<form nz-form>-->\n    <!--<div nz-row nzGutter=\"8\">-->\n      <!--<div nz-col nzSpan=\"12\">-->\n        <!--<nz-form-item>-->\n          <!--<nz-form-label>Name</nz-form-label>-->\n          <!--<nz-form-control>-->\n            <!--<input nz-input placeholder=\"please enter user name\"/>-->\n          <!--</nz-form-control>-->\n        <!--</nz-form-item>-->\n      <!--</div>-->\n      <!--<div nz-col nzSpan=\"12\">-->\n        <!--<nz-form-item>-->\n          <!--<nz-form-label>Url</nz-form-label>-->\n          <!--<nz-form-control>-->\n            <!--<nz-input-group nzAddOnBefore=\"http://\" nzAddOnAfter=\".com\">-->\n              <!--<input type=\"text\" nz-input placeholder=\"please enter url\"/>-->\n            <!--</nz-input-group>-->\n          <!--</nz-form-control>-->\n        <!--</nz-form-item>-->\n      <!--</div>-->\n    <!--</div>-->\n    <!--<div nz-row nzGutter=\"8\">-->\n      <!--<div nz-col nzSpan=\"12\">-->\n        <!--<nz-form-item>-->\n          <!--<nz-form-label>Owner</nz-form-label>-->\n          <!--<nz-form-control>-->\n            <!--<nz-select nzPlaceHolder=\"Please select an owner\"></nz-select>-->\n          <!--</nz-form-control>-->\n        <!--</nz-form-item>-->\n      <!--</div>-->\n      <!--<div nz-col nzSpan=\"12\">-->\n        <!--<nz-form-item>-->\n          <!--<nz-form-label>Type</nz-form-label>-->\n          <!--<nz-form-control>-->\n            <!--<nz-select nzPlaceHolder=\"Please choose the type\"></nz-select>-->\n          <!--</nz-form-control>-->\n        <!--</nz-form-item>-->\n      <!--</div>-->\n    <!--</div>-->\n    <!--<div nz-row nzGutter=\"8\">-->\n      <!--<div nz-col nzSpan=\"12\">-->\n        <!--<nz-form-item>-->\n          <!--<nz-form-label>Approver</nz-form-label>-->\n          <!--<nz-form-control>-->\n            <!--<nz-select nzPlaceHolder=\"Please choose the approver\"></nz-select>-->\n          <!--</nz-form-control>-->\n        <!--</nz-form-item>-->\n      <!--</div>-->\n      <!--<div nz-col nzSpan=\"12\">-->\n        <!--<nz-form-item>-->\n          <!--<nz-form-label>DateTime</nz-form-label>-->\n          <!--<nz-form-control>-->\n            <!--<nz-range-picker></nz-range-picker>-->\n          <!--</nz-form-control>-->\n        <!--</nz-form-item>-->\n      <!--</div>-->\n    <!--</div>-->\n    <!--<div nz-row nzGutter=\"8\">-->\n      <!--<div nz-col nzSpan=\"24\">-->\n        <!--<nz-form-item>-->\n          <!--<nz-form-label>Description</nz-form-label>-->\n          <!--<nz-form-control>-->\n                <!--<textarea-->\n                  <!--nz-input-->\n                  <!--placeholder=\"please enter url description\"-->\n                  <!--[nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"-->\n                <!--&gt;</textarea>-->\n          <!--</nz-form-control>-->\n        <!--</nz-form-item>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</form>-->\n  <!--<div class=\"footer\">-->\n    <!--<button type=\"button\" (click)=\"closeRegistrationForm()\" class=\"ant-btn\" style=\"margin-right: 8px;\">-->\n      <!--<span>取消</span></button>-->\n    <!--<button type=\"button\" (click)=\"submitRegistrationForm()\" class=\"ant-btn ant-btn-primary\"><span>提交</span>-->\n    <!--</button>-->\n  <!--</div>-->\n<!--</nz-drawer>-->\n\n"

/***/ }),

/***/ "./src/app/tool-bar/tool-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/tool-bar/tool-bar.component.ts ***!
  \************************************************/
/*! exports provided: ToolBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarComponent", function() { return ToolBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../account.service */ "./src/app/account.service.ts");




var ToolBarComponent = /** @class */ (function () {
    function ToolBarComponent(fb, accountService) {
        this.fb = fb;
        this.accountService = accountService;
        this.loginFormIsVisible = false;
        this.registrationFormIsVisible = false;
    }
    ToolBarComponent.prototype.openLoginForm = function () {
        this.loginFormIsVisible = true;
    };
    ToolBarComponent.prototype.closeRegistrationForm = function () {
        this.registrationFormIsVisible = false;
    };
    ToolBarComponent.prototype.ngOnInit = function () {
        this.validateLoginForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.validateRegisterForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    ToolBarComponent.prototype.submitLoginForm = function () {
        for (var i in this.validateLoginForm.controls) {
            if (i) {
                this.validateLoginForm.controls[i].markAsDirty();
                this.validateLoginForm.controls[i].updateValueAndValidity();
            }
        }
        if (!this.validateLoginForm.valid) {
            return;
        }
        var eMail = this.validateLoginForm.get('userName').value;
        var password = this.validateLoginForm.get('password').value;
        var $response = this.accountService.login(eMail, password).subscribe(function (response) {
            console.log(response);
            $response.unsubscribe();
        });
    };
    ToolBarComponent.prototype.closeLoginForm = function () {
        this.loginFormIsVisible = false;
    };
    ToolBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tool-bar',
            template: __webpack_require__(/*! ./tool-bar.component.html */ "./src/app/tool-bar/tool-bar.component.html"),
            styles: [__webpack_require__(/*! ./tool-bar.component.css */ "./src/app/tool-bar/tool-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]])
    ], ToolBarComponent);
    return ToolBarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\_projects\ida\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map