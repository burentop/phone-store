var balance = 300;
var phones = 0;
const ACCESSORY_PRICE = 9.99;
const PHONE_PRICE = 99.99;

function getTotalPrice() {
	var total = PHONE_PRICE;
	if (PHONE_PRICE + ACCESSORY_PRICE < 110) {
		total += ACCESSORY_PRICE;
	}
	return total;
}

function buyPhone() {
	balance -= getTotalPrice();
	phones++;
}

while (balance >= getTotalPrice()) {
	buyPhone();
}

console.log("Phones bought: " + phones);