"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routers/index"));
const introduce_1 = __importDefault(require("./routers/introduce"));
const skill_1 = __importDefault(require("./routers/skill"));
const connectDB_1 = require("./config/connectDB");
//Init
const app = (0, express_1.default)();
const port = 3000;
//config views
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views/'));
//config routerss
app.use('/', index_1.default);
app.use('/', introduce_1.default);
app.use('/', skill_1.default);
// config static file
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//connect db
(0, connectDB_1.connect)();
app.listen(port, () => {
    console.log(`server is runing http://localhost:3000`);
});
