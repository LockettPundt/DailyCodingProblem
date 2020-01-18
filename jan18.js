/*1.19.20 problem,Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass? */

function todaysChallenge(x, k) {
    let result = false;
    for (let i = 0; i < x.length; i++) {
        temp = k - x[i];
        for (let j = 0; j < x.length; j++) {
          if (temp === x[j]) {
            result = true;
            break;
          }
        }
    }
    return result;
}
console.log(todaysChallenge([11, 15, 3, 7, 10, 150, 21, 22, 23, 20], 170))