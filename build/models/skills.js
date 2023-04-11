"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    nameSkill: { type: String },
    percentSkill: { type: String },
});
const Skill = (0, mongoose_1.model)('skill', userSchema);
exports.default = Skill;
