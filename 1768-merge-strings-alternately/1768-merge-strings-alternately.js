/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let len = word1.length > word2.length ? word2.length : word1.length;
    let strip = word1.length > word2.length ? word1.slice(word2.length) : word2.slice(word1.length);
    let res = "";
    for(let i = 0; i<len; i++){
        res += (word1[i]+word2[i]);
    }
    if(strip !== ""){
        res +=strip;
    }
    return res;
};