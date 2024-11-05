/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let rnums = {'I' : 1,'V' : 5,'X' : 10,'L': 50,'C': 100,'D':500,'M':1000};
    let res = 0;
    for(let i=0;i<s.length;i++){
        if(i < s.length-1 & rnums[s[i]] < rnums[s[i+1]]){
            res -= rnums[s[i]];
        }else{
            res += rnums[s[i]];
        }
    }
    return res;
};