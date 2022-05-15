import Joi from 'joi';

export const validateUser = async(req,res,next)=>{
    const schema =  new Joi.object({
        names: Joi.string().max(255).min(3).required(),
        email: Joi.string().max(255).min(3).required().email(),
        age: Joi.number().required(),
        address: Joi.string().max(255).min(3).required(),
        password: Joi.string().max(20).min(3).required(),
    });

    const { error } = await schema.validate(req.body);
        
    if(error){
        return res.status(400).json({status:"error", message: error.details[0].message});
    } else{
        return next();
    }
}

export const validateLogin = async(req,res,next)=>{
    const schema =  new Joi.object({
        email: Joi.string().max(255).min(3).required().email(),
        password: Joi.string().max(255).min(3).required(),
    });

    const { error } = await schema.validate(req.body);
        
    if(error) return res.status(400).json({status:"error", message: error.details[0].message});
    
    return next();
}