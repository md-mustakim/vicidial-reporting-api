import express, { Express, Request, Response } from "express";
import Joi  from "joi";
import bcrypt from "bcrypt";
import {execute, init} from "../database/connector";


const authRouter = express.Router();

authRouter.post("/login", (req: Request, res: Response) => {

    const schema = Joi.object({
        employee_id: Joi.string().required(),
        password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details });
    }else {

        let isValid = bcrypt.compare('CC0001@16899', '$2y$10$31jU8L/CCwlos2F8DJQSW.ieA7Hwfh44k1PTZlGBDjMv4mF2no5TC').then(r => {
            console.log(r);
        }).catch(e => {
            console.log(e);
        })

        // init();
        // execute("SELECT * FROM users WHERE employee_id = ?", [req.body.employee_id]).then(r => {
        //
        //     // @ts-ignore
        //     // console.log(r[0].password);
        //
        //     // @ts-ignore
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


export { authRouter };
