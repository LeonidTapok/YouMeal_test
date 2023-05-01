import { createCardProduct } from "./createCardProduct.js";
import { catalogList } from "./elements.js";
import * as data from '../db.js'

export const renderListProduct = async (category = 'burger') => {
    catalogList.textContent = '';
    const listProduct = data;
    const listCard = listProduct.data.filter(x => x.category == category).map(createCardProduct);
    catalogList.append(...listCard);

}