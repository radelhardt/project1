// JavaScript code below initializes the calculator that will be made available on the "rates" page of the website
function calcTotal() {
        var itemTotal = 0;
        var item1 = document.getElementById("item1");
        var item2 = document.getElementById("item2");
        var item3 = document.getElementById("item3");
        var item4 = document.getElementById("item4");
        var item5 = document.getElementById("item5");
         (item1.checked) ? (itemTotal += 50) : (itemTotal += 0);
         (item2.checked) ? (itemTotal += 75) : (itemTotal += 0);
         (item3.checked) ? (itemTotal += 100) : (itemTotal += 0);
         (item4.checked) ? (itemTotal += 500) : (itemTotal += 0);
        var salesTaxRate = 0.06;
        var orderTotal = itemTotal + (itemTotal * salesTaxRate);
        alert("Your estimated total is $" + orderTotal.toFixed(2));
}
document.getElementById("submit").addEventListener("click", calcTotal, false);