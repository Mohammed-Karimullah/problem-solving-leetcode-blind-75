/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length === 0) return "";

    let prefx = strs[0];
    for(let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(prefx) !== 0){
            prefx = prefx.slice(0,-1);
            if(!prefx) return "";
        }
    }
    return prefx;
};