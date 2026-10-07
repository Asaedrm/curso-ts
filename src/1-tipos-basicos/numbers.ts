//Basico

export const calculateTotal = (price:number, quantity:number): number =>{
    return price * quantity
}

//Medio
interface CalculateTotalPagesProps{
    totalPages:number
    itemsPerPage?:number
}
export const calculateTotalPages  = ({totalPages, itemsPerPage = 10}:CalculateTotalPagesProps):number =>{
    return Math.ceil(totalPages / itemsPerPage);
}

//Avanzado
interface CalculateFinalPriceprops{
    price:number
    discount?:number
    tax?:number
    quantity?:number
}
export const calculateFinalPrice = ({price, discount = 0, tax = 0.16, quantity = 1}:CalculateFinalPriceprops):number =>{
    if (discount >= 15){
        const priceWithDisccount: number = price - (price * 0.15);
        return (priceWithDisccount + (tax * priceWithDisccount)) * quantity
    } else {
        const priceWithDisccountLess = price - (price * discount/100)
        return (priceWithDisccountLess + (tax * priceWithDisccountLess)) * quantity
    }

}
