const coupons = [
    {name: "JuanDC_es_Batman", value: 15},
    {name: "pero_no_le_digas_a_nadie", value: 30},
    {name: "es_un_secreto", value: 25}
];

function calcularPrecioConDescuento(precio, descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;   
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputCoupon = document.getElementById('InputCoupon');
    const inputCouponValue = inputCoupon.value;
    const isCouponValueValid = function (coupons) {
        return coupons.name === inputCouponValue;
    };
    const userCoupon = coupons.find(isCouponValueValid);
    if (!userCoupon)
    {
        alert("Error");
    } else {
        const inputPrice = document.getElementById('InputPrice');
        const inputPriceValue = inputPrice.value;
        const precioConDescuento = calcularPrecioConDescuento(inputPriceValue, userCoupon.value);
        const resultPrice = document.getElementById("ResultPrice");
        resultPrice.innerText = "El precio con descuento es $" + precioConDescuento;
    }
}
