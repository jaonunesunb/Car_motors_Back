import validator from 'validator';
import { Request, Response, NextFunction } from "express";
import { AppError } from '../errors/AppError';


const ensureUUIDIsValid = (req:Request, res:Response, next:NextFunction) => {

    const uuid = validator.isUUID(req.params.id)

    if(!uuid){
        throw new AppError("enter a valid UUID", 400)
    }

    return next()
}


export default ensureUUIDIsValid