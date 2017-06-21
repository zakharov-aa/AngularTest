var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = (function () {
    function User() {
    }
    User.prototype.sum = function (x, y) {
        return x + y;
    };
    User.prototype.test = function (first, second) {
        if (second === void 0) { second = "default"; }
        var numbers = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            numbers[_i - 2] = arguments[_i];
        }
        var name;
        var b;
        var delegat;
        delegat = this.sum;
        delegat(1, "as");
    };
    return User;
}());
User.PI = 3.14;
var SuperUser = (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuperUser.prototype.test = function () {
        var user = new User();
    };
    return SuperUser;
}(User));
//# sourceMappingURL=test.js.map