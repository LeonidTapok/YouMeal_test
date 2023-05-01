
import { ingredientsList,
        modalProductTitel,
        modalProductImage,
        modalProductDescription,
        ingredientsCalories,
        modalProductPriceCount,
        modalProduct,  
        modalProductBtn
    } from "./elements.js";
import { getDataById } from "./getData.js";

export const openModal = async (id) => {

    const product = await getDataById(id)
    modalProductTitel.textContent = product.title;
    modalProductImage.src = `${product.image}`;

    ingredientsList.textContent = '';

    const ingredientsListItems = product.ingredients.map((item) => {
        const li = document.createElement('li');
        li.classList.add('ingredients__item');
        li.textContent = item;
        return li;
    });

    ingredientsList.append(...ingredientsListItems);

    modalProductDescription.textContent = product.description;
    ingredientsCalories.textContent = `${product.weight}г, ккал ${product.calories}`;
    modalProductPriceCount.textContent = product.price;
    modalProductBtn.dataset.idProduct = product.id;
    
    modalProduct.classList.add('modal_open');
};