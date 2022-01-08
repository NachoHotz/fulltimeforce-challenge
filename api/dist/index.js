"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./src/app"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var API_PORT = process.env.PORT || 3001;
app_1.default.listen(API_PORT, function () {
    console.log("server running on port ".concat(API_PORT));
});
