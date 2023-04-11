"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    img: { type: String },
    name: { type: String },
    job: { type: String },
    address: { type: String },
    email: { type: String },
    phone: { type: Number },
    web: { type: String },
});
const Introduce = (0, mongoose_1.model)('profile', userSchema);
exports.default = Introduce;
