export const filterProducts = (productsToView, filter) => {
  const { minPrice, maxPrice } = filter;

    const filterArr = ['men', 'women', 'kid', 'clothing', 'gears', 'shoes' ];
    const filterArrToCheck = [];

    filterArr.forEach(item => {
        if (filter[item]) {
            if (item === 'kid') {
                filterArrToCheck.push("kid's")
            }
            else {
                filterArrToCheck.push(item)
            }
        }
    })

    const filteredProducts = productsToView.filter(
        (item) =>
            filterArrToCheck.some(filterItem => item.categories.includes(filterItem))
            &&
            (item.priceCurrent >= minPrice && item.priceCurrent <= maxPrice)
    );

    return filteredProducts;
};