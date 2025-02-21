const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// Method 1: Using for loop
function findShortestNameWithLoop(names) {
    let shortest = names[0];
    for(let i = 1; i < names.length; i++) {
        if(names[i].length < shortest.length) {
            shortest = names[i];
        }
    }
    return shortest;
}

console.log("shortest Name:",findShortestNameWithLoop(friends));