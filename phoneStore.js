var balance = 300;
var phones = 0;
var totalBill = 0;
const ACCESSORY_PRICE = 9.99;
const PHONE_PRICE = 99.99;
const TAX_RATE = 0.0625;

function getTotalPrice() {
	var total = PHONE_PRICE;
	if (PHONE_PRICE + ACCESSORY_PRICE < 110) {
		total += ACCESSORY_PRICE;
	}
	return total * (1 + TAX_RATE);
}

function buyPhone() {
	balance -= getTotalPrice();
	phones++;
	totalBill += getTotalPrice();
}

while (balance >= getTotalPrice()) {
	buyPhone();
}

console.log("Phones bought: " + phones);
console.log("Total: $" + totalBill.toFixed(2));