//Find the lowest number in the array below.

// Method 1: Using for loop
function findLowestNumberWithLoop(numbers) {
    let lowest = numbers[0]; // Start with first number
    
    for(let i = 1; i < numbers.length; i++) {
        if(numbers[i] < lowest) {
            lowest = numbers[i];
        }
    }
    return lowest;
}

const heights2 = [167, 190, 120, 165, 137];

console.log("Lowest height:",findLowestNumberWithLoop(heights2));