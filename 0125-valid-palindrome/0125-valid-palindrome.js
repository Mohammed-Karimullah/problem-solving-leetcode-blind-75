/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/[\s|\W_]/g,'');
    let newStr = str.split('').reverse().join('');
    let res = newStr === str;
    return res;
};