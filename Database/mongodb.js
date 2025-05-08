
import mongoose from "mongoose";

import { NODE_ENV,DB_URI } from "../config/env.js";


if(!DB_URI){
    throw new Error("There was no DB_URI, please check the .env.<development/production>.local");
}

const connectToDatabase= async ()=>
{
    try{
        await mongoose.connect(DB_URI);

        
        console.log(`Database connect in ${NODE_ENV} local` );
        

    }
    catch(error){

        console.log("Error connecting to database",error);

        process.exit(1);
    }
}

export default connectToDatabase;