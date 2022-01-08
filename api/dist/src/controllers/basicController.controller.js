"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicController = void 0;
var basicService_service_1 = __importDefault(require("../services/basicService.service"));
var basicController = function (_req, res, _next) {
    var response = (0, basicService_service_1.default)();
    res.status(200).send(response);
};
exports.basicController = basicController;
