/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    str = s.trim();
    let st = str.split(' ');
    return st[st.length-1].length;
    
};