import { COLLECTIONS } from '../enums/collections.js';
import { STATUS_CODE } from '../enums/statusCode.js';
import database from '../database/database.js';
import { CATEGORIES } from '../enums/products.js';
import { DEFAULT_VALUES } from '../enums/defaultValues.js';

async function getProduct(request, response) {
    const filterProduct = response.locals.params.filterProduct;
    const validCategory = CATEGORIES.includes(filterProduct);
    
    try {
        if (!validCategory) {
            const product = await database.collection(COLLECTIONS.PRODUCTS).findOne({ productId: filterProduct});

            if (!product) {
                response.status(STATUS_CODE.NOT_FOUND).send([])
                return;
            } else {
                response.send(product).status(STATUS_CODE.OK);
                return;
            }
        }
 
        const limit = response.locals.query === undefined ? DEFAULT_VALUES.GET_PRODUCTS_LIMIT : response.locals.query.limit;
        const products = database.collection(COLLECTIONS.PRODUCTS);
        const productsByCategory = await products.find({ category: filterProduct }, { limit: Number(limit) }).toArray();
        
        if (productsByCategory.length === 0) {
            response.status(STATUS_CODE.NOT_FOUND).send([])
            return;
        }

        response.send(productsByCategory);
        
    } catch (err) {
        response.sendStatus(STATUS_CODE.SERVER_ERROR)
        console.log(err.message);
    }
}

export { getProduct };
