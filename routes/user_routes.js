import { Router  } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRoutes=Router();

userRoutes.get('/', getUsers);

userRoutes.get('/:id',authorize, getUser);

userRoutes.post('/', (req,res) => res.send({title:"Create new users "}));

userRoutes.put('/:id', (req,res)=>res.send({title:" UPDATE user "}));

userRoutes.delete('/:id', (req,res)=>res.send({title:" DELETE user "}));

export default userRoutes;
