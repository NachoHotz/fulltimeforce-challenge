"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
var index_route_1 = __importDefault(require("./routes/index.route"));
var setHeaders_1 = __importDefault(require("./middlewares/setHeaders"));
var app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true, limit: '25mb' }));
app.use(express_1.default.json({ limit: '25mb' }));
app.use((0, cookie_parser_1.default)());
app.use(setHeaders_1.default);
app.use((0, morgan_1.default)('dev'));
app.use('/', index_route_1.default);
app.use(function (err, _req, res, _next) {
    var status = err.status || 500;
    var message = err.message || err;
    console.log(err);
    res.status(status).send(message);
});
exports.default = app;
