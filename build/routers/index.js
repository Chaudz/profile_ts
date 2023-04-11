"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});
router.get('/about', (req, res) => {
    res.send('about Page');
});
exports.default = router;
