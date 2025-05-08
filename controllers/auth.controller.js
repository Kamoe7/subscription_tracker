/* eslint-disable no-unused-vars */
import mongoose from "mongoose";
import User from '../models/user.model.js';
import bcrypt from "bcryptjs";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";
import jwt from 'jsonwebtoken';

export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { name, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email }).session(session);
        if (existingUser) {
            const error = new Error('User already exists');
            error.statusCode = 409;
            throw error;
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = await User.create([{ name, email, password: hashedPassword }], { session });

        // Generate JWT token
        const token = jwt.sign({ userId: newUser[0]._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        // Commit transaction
        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: {
                token,
                user: newUser[0]
            }
        });
    } catch (error) {
        // Abort transaction and end session
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
};

export const signIn = async (req, res, next) => {
    
    try{
        
        const {email, password} = req.body;

        const user = await User.findOne({email});
        
        if(!user){
            const error= new Error("User not found");
            error.statusCode=409;
            throw error;
        }

        const isValidPassword=await bcrypt.compare(password,user.password);

        if(!isValidPassword)
            {
                const error=new Error("Password does not match");
                error.statusCode=409;
                throw error;
        }

        const token = jwt.sign({userId:user._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});

        res.status(200).json({
            success:true,
            message:"User signed in successfully",
            data:{
                token,
                user
            }
        });
    }
    catch(error){
        next(error);
    }


};

export const signOut = async (req, res, next) => {
    // Implement sign-out logic here

    
};
