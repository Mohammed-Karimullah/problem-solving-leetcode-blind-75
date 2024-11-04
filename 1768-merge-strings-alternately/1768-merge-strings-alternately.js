/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let len = Math.min(word1.length,word2.length);
    let res = "";
    for(let i = 0; i<len; i++){
        res += (word1[i]+word2[i]);
    }
    res += (word1.slice(len) + word2.slice(len));
    return res;
};