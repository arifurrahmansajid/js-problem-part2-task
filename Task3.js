function calculateElectronicsBudget(laptops, tablets, mobiles) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;
    
    return (laptops * laptopPrice) + 
           (tablets * tabletPrice) + 
           (mobiles * mobilePrice);
}

console.log("Total budget for 2 laptops, 3 tablets, 1 mobile:", 
    calculateElectronicsBudget(2, 3, 1)); // 125000



