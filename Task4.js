// Task 4: Average Phone Price - Different Approaches
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 }
];

// Method 1: Using for...of loop
function findAveragePriceWithForOf(phones) {
    let total = 0;
    for(const phone of phones) {
        total += phone.price;
    }
    return total / phones.length;
}
console.log("Total salary (class):", new SalaryCalculator(employees).calculateTotalSalary());
