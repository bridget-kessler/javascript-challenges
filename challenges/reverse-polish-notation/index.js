/**
 * @param {string[]} an array of operands and operators
 * @return {number}
 */
function evaluateRPN(array) {
  let leftSubtotal;
  let total;
  let reset = true;
  let stack = [];

  for (let i = 0; i < array.length; i++) {
    if (["/", "*", "+", "-"].includes(array[i])) {
      let exp;
      if (reset) {
        // when the first operator is encountered, pop the last number off the top of the stack
        total = stack.pop();
        reset = false;
      }
      if (stack.length === 0) {
        // when all the numbers on the stack have been evaluated,
        // evaluate the left subtotal and the current total 
        exp = leftSubtotal + array[i] + total;
      } else {
        exp = stack.pop() + array[i] + total;
      }

      // All expressions should be truncated toward zero
      total =
        Math.sign(eval(exp)) === -1
          ? Math.ceil(eval(exp))
          : Math.floor(eval(exp));
    } else {
      stack.push(array[i]);
      if (total && stack.length > 1) {
        // If at least two numbers follow an operator/operators,
        // store the current total as the left subtotal and set reset to true
        leftSubtotal = total;
        reset = true;
      }
    }
  }
  return total;
}

module.exports = evaluateRPN;
