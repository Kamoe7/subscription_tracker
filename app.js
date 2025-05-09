import express  from "express";

import { PORT } from './config/env.js';


import authRoutes  from "./routes/auth_routes.js";
import subscriptionRoutes from "./routes/subscription_routes.js";
import userRoutes from "./routes/user_routes.js";
import connectToDatabase from "./Database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js"
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";


const app =express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
//app.use(cookieParser);
app.use(arcjetMiddleware);

app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/subscriptions',subscriptionRoutes)


app.use(errorMiddleware);

app.get('/',(req,res)=>{
    res.send('Welcome to the subscription Tracker API~~~');
});

app.listen(PORT, async () => {

    console.log(`Sub-tracker api is running on http://localhost:${PORT}`);

    await connectToDatabase();


});

export default app;