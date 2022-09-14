import joi from 'joi';
import { DEFAULT_VALUES } from '../enums/defaultValues.js';

const signUpSchema = joi.object({
  name: joi.string().min(1).required(),
  email: joi.string().email().required(),
  profilePictureURL: joi.string().uri().default(DEFAULT_VALUES.PROFILE_PICTURE),
  password: joi.string().min(8).required(),
});

const signInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});

export { signUpSchema, signInSchema };