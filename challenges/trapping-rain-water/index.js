/**
 * @param {number[]} height
 * @return {number}
 */

const trap = function(height) {
    let left = new Array();
    let right = new Array();
    let leftMax = 0;
    let rightMax = 0;
    let sum = 0;

    for (let i = 0; i < height.length; i++) {
        if (height[i] > leftMax) {
            leftMax = height[i];
        }
        left[i] = leftMax
    }

    for (let i = height.length; i >= 0; i--) {
        if (height[i] > rightMax) {
            rightMax = height[i];
        }
        right[i] = rightMax;
    }

    for (let i = 0; i < height.length; i++) {
        sum += Math.min(left[i], right[i]) - height[i];
    }

    return sum;       
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
console.log(trap([4,2,0,3,2,5])) // 9
