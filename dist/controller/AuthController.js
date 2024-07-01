"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const joi_1 = __importDefault(require("joi"));
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
        // let isValid = bcrypt.compare('CC0001@16899', '$2y$10$31jU8L/CCwlos2F8DJQSW.ieA7Hwfh44k1PTZlGBDjMv4mF2no5TC').then(r => {
        //     console.log(r);
        // }).catch(e => {
        //     console.log(e);
        // })
        // init();
        // execute("SELECT * FROM users WHERE employee_id = ?", [req.body.employee_id]).then(r => {
        //
        //     // @ts-ignore
        //     let isValid = bcrypt.compare(req.body.employee_id, r[0].password).then(r => {
        //         console.log(r);
        //     }).catch(e => {
        //         console.log(e);
        //     })
        //
        //
        //
        // }).catch(e => {
        //     console.log(e)
        //
        // })
        res.send(req.body);
    }
});
