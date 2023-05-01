
export const createCardProduct = (product) => {
    const li = document.createElement('li');
    li.classList.add('catalog__item');

    li.innerHTML = `
    <article class="product" data-id-product=${product.id}>
        <img  class="product__image" src="${product.image}" alt="${product.title}">
        
        <p class="product__price">${product.price}<span class="currency">₽</span></p>

        <h3 class="product__title">
            <button class="product__detali">${product.title}</button>
        </h3>

        <p class="product__weight">${product.weight}г</p>

        <button class="product__add" type="button">Добавить</button>
    </article>
    `;

    return li
}