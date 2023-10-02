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

    for (let i = 0; i < height?.length; i++) {
        if (height[i] > leftMax) {
            leftMax = height[i];
        }
        left[i] = leftMax;
    }

    for (let i = height?.length - 1; i >= 0; i--) {
        if (height[i] > rightMax) {
            rightMax = height[i];
        }
        right[i] = rightMax;
    }

    for (let i = 0; i < height?.length; i++) {
        const elevation = height[i] < 0 ? 0 : height[i];

        if (left[i] > 0 && right[i] > 0) {
            sum += Math.min(left[i], right[i]) - elevation;
        }
    }

    return sum;       
}

module.exports = trap;
