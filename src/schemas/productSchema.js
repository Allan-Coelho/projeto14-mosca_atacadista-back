import Joi from "joi";

const newProductSchema = Joi.object({
  name: Joi.string().min(1).required(),
  description: Joi.string().min(256).max(1024).required(),
  price: Joi.number().min(0.01).multiple(0.01).required(),
  pictures: Joi.array().min(3).max(5).items(Joi.string().uri()).required(),
  category: Joi.string().min(1).required()
});

export { newProductSchema };
