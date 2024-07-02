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

        init();
        execute("SELECT * FROM users WHERE employee_id = ?", [req.body.employee_id]).then(r => {
            // @ts-ignore
            console.log(r[0].password);
            console.log(req.body.password);

            // @ts-ignore
            let hash = r[0].password;

            hash = hash.replace(/^\$2y\$/, '$2a$');

            let isValid = bcrypt.compare(req.body.password, hash).then(r => {
                console.log(r ? "Password Matched" : "Password Not Matched");
            }).catch(e => {
                console.log(e + " Password Not Matched");
            })



        }).catch(e => {
            console.log(e)

        })




        res.send(req.body);
    }


});


export { authRouter };
