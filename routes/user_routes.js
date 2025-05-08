import { Router  } from "express";

const userRoutes=Router();

userRoutes.get('/', (req,res)=>res.send({title:" GET all users "}));

userRoutes.get('/:id', (req,res)=>res.send({title:" GET user details "}));

userRoutes.post('/', (req,res) => res.send({title:"Create new users "}));

userRoutes.put('/:id', (req,res)=>res.send({title:" UPDATE user "}));

userRoutes.delete('/:id', (req,res)=>res.send({title:" DELETE user "}));

export default userRoutes;
