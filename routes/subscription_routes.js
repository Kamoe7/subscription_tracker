import { Router } from "express";

const subscriptionRoutes= Router();

subscriptionRoutes.get('/',(req,res)=>res.send({title:"Subscriptions of the users"}));

subscriptionRoutes.get('/:id',(req,res)=>res.send({title:"Get Subscriptions details"}));

subscriptionRoutes.post('/',(req,res)=>res.send({title:" Create Subscriptions "}));

subscriptionRoutes.put('/:id',(req,res)=>res.send({title:' UPDATE Subscriptions'}));

subscriptionRoutes.delete('/:id',(req,res)=>res.send({title:" Delete Subscriptions "}));

subscriptionRoutes.get('/user/:id',(req,res)=>res.send({title:" Get all the users subscriptions"}));

subscriptionRoutes.put('/:id/cancel',(req,res)=>res.send({title:" CANCEL Subscriptions of the users"}));

subscriptionRoutes.get('/upcoming-renewals',(req,res)=>res.send({title:" RENEWAL Subscriptions of the users"}));


export default subscriptionRoutes;