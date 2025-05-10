import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscription } from "../controllers/subscription.controller.js";

const subscriptionRoutes= Router();

subscriptionRoutes.get('/',(req,res)=>res.send({title:"Subscriptions of the users"}));

subscriptionRoutes.get('/:id',(req,res)=>res.send({title:"Get Subscriptions details"}));

subscriptionRoutes.post('/',authorize,createSubscription);

subscriptionRoutes.put('/:id',(req,res)=>res.send({title:' UPDATE Subscriptions'}));

subscriptionRoutes.delete('/:id',(req,res)=>res.send({title:" Delete Subscriptions "}));

subscriptionRoutes.get('/user/:id',authorize,getUserSubscription);

subscriptionRoutes.put('/:id/cancel',(req,res)=>res.send({title:" CANCEL Subscriptions of the users"}));

subscriptionRoutes.get('/upcoming-renewals',(req,res)=>res.send({title:" RENEWAL Subscriptions of the users"}));


export default subscriptionRoutes;