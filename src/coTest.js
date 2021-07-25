class Product {
    constructor(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }
}

class CarInsurance {
    constructor(products = []) {
        this.products = products;
    }


    updatePrice() {
        this.products.forEach((product) => {
            if (product.name === "Full Coverage" || product.name === "Special Full Coverage") {
                this.increaseProductPrice(product)
                this.decreaseProductSellIn(product, 1)
            } else {
                this.sellInLesserThanValue(product, 1) ?
                    this.decreaseProductPrice(product, 2) :
                    this.decreaseProductPrice(product, 1)
                this.decreaseProductSellIn(product, 1)
            }
        });
        return this.products;
    }

    decreaseProductPrice(product, value) {
        if (product.price > 0 && product.name !== "Mega Coverage"){
            if(product.name === "Super Sale") product.price = product.price - 2
            else product.price = product.price - value;
        }
    }

    increaseProductPrice(product) {
        if (this.priceGreaterThanValue(product, 49)) {
            if (this.sellInLesserThanValue(product, 11) && product.name === "Special Full Coverage")
                product.price = product.price + 2;
            else if (this.sellInLesserThanValue(product, 6) && product.name === "Special Full Coverage")
                product.price = product.price + 3;
            else {
                product.price = product.price + 1;
            }
        } else {
            if (this.sellInLesserThanValue(product, 1)) product.price = 0
            else product.price = 50;
        }


    }

    decreaseProductSellIn(product, value) {
        if (product.name !== "Mega Coverage")
            product.sellIn = product.sellIn - value
    }

    priceGreaterThanValue(product, value) {
        return product.price < value
    }

    sellInLesserThanValue(product, value) {
        return product.sellIn < value
    }
}

module.exports = {
    Product,
    CarInsurance
}


