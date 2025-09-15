// Exercise 1
function capitalizeWords(str) {
    return str.split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");
}
console.log(capitalizeWords("comp3123 lab exercise one"));


// Exercise 2
function max(x, y, z) {
    return Math.max(x, y, z);
}
console.log(max(1, 0, 1));       
console.log(max(0, -10, -20));  
console.log(max(1000, 510, 440)); 

// Exercise 3
function right(str) {
    return str.length >= 3 
        ? str.slice(-3) + str.slice(0, str.length - 3) 
        : str;
}
console.log(right("Python"));     
console.log(right("JavaScript")); 
console.log(right("Hi"));        

// Exercise 4
function angle_Type(angle) {
    if (angle > 0 && angle < 90) return "Acute angle";
    if (angle === 90) return "Right angle";
    if (angle > 90 && angle < 180) return "Obtuse angle";
    if (angle === 180) return "Straight angle";
    return "Invalid angle";
}
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));

// Exercise 5
function array_max_sum(arr, k) {
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    let currentSum = maxSum;

    for (let i = k; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - k];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3)); 
console.log(array_max_sum([9, 3, 5, 1, 7], 2)); 