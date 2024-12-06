import Joi from "joi";

const signupValidation = async (req, res, next) =>{
    const schema = Joi.object({
        fullName : Joi.string().min(3).max(100).required(),
        email : Joi.string().email().required(),
        password : Joi.string().min(6).max(100).required(),
    });
    const { error } = schema.validate(req.body);
    if(error){
        return res.status(400).json({
            message: "Bad Request",
          });
    }
    next();
}


const loginValidation = async (req, res, next) =>{
    const schema = Joi.object({
        email : Joi.string().email().required(),
        password : Joi.string().min(6).max(100).required(),
    });
    const { error } = schema.validate(req.body);
    if(error){
        return res.status(400).json({
            message: "Bad Request",
          });
    }
    next();
}

export {signupValidation, loginValidation};