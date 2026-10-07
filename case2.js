const customerName ="bibil";

const productPrice = 1500000;
const quantity = 3;
const discountPercent = 10;
const shippingConst = 20000;

const subtotal = productPrice * quantity;
const discountAmount = subtotal * discountPercent/100;
const afterDiscount = subtotal - discountAmount;
const calculateShipping = (total) => {
    return total >= 500000 ? 0 :shippingConst;};
const shipping = calculateShipping(afterDiscount);
const totalpayment = afterDiscount + shipping;

console.log(`customer:${customerName}`);
console.log(`product price: Rp${productPrice}`);
console.log(`Quantity: ${quantity}`);
console.log(`Subtotal: Rp${subtotal}`);
console.log(`Discount: Rp${discountAmount}`);
console.log(`After Discount: Rp${afterDiscount}`);
console.log(`shipping: Rp${shipping}`);
console.log(`Total Payment: Rp${totalpayment}`);