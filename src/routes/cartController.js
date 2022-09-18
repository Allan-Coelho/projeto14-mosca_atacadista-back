import { COLLECTIONS } from '../enums/collections.js';
import { STATUS_CODE } from '../enums/statusCode.js';
import database from '../database/database.js';
import { DEFAULT_VALUES } from '../enums/defaultValues.js';
import mongoose from 'mongoose';


async function postCartProduct (request, response) {
    const productId = response.locals;
    console.log(productId)
    try {
        const product = await database.collection(COLLECTIONS.CARTS).findOne({ _id: mongoose.Types.ObjectId(productId)});
        if (!product) {
            response.status(STATUS_CODE.NOT_FOUND).send([])
            return;
        } 
        console.log(product)
        response.send(product);
        
    } catch (err) {
        response.sendStatus(STATUS_CODE.SERVER_ERROR)
        console.log(err.message);
    }
}

async function getCartProduct (request, response) {
    const productsdb = database.collection(COLLECTIONS.CARTS);

    try {
        const products = await productsdb.find({}).toArray();
        
        if (products.length === 0) {
            response.status(STATUS_CODE.NOT_FOUND).send([])
            return;
        }

        response.send(products);
        
    } catch (err) {
        response.sendStatus(STATUS_CODE.SERVER_ERROR)
        console.log(err.message);
    }
    
}

export { getCartProduct, postCartProduct};