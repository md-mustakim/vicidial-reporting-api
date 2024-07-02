"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const joi_1 = __importDefault(require("joi"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const connector_1 = require("../database/connector");
const authRouter = express_1.default.Router();
exports.authRouter = authRouter;
authRouter.post("/login", (req, res) => {
    const schema = joi_1.default.object({
        employee_id: joi_1.default.string().required(),
        password: joi_1.default.string().min(6).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details });
    }
    else {
        (0, connector_1.init)();
        (0, connector_1.execute)("SELECT * FROM users WHERE employee_id = ?", [req.body.employee_id]).then(r => {
            // @ts-ignore
            console.log(r[0].password);
            console.log(req.body.password);
            // @ts-ignore
            let hash = r[0].password;
            hash = hash.replace(/^\$2y\$/, '$2a$');
            let isValid = bcrypt_1.default.compare(req.body.password, hash).then(r => {
                console.log(r ? "Password Matched" : "Password Not Matched");
            }).catch(e => {
                console.log(e + " Password Not Matched");
            });
        }).catch(e => {
            console.log(e);
        });
        res.send(req.body);
    }
});
