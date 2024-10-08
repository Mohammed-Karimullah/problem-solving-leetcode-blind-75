/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let revers = "";
  if(s.length > 0){
      for(let i=0; i < s.length ; i += 2 *k){
          let prt = s.slice(i,i+2*k);
          let frstprt = prt.slice(0,k).split('').reverse().join('');
          let scndprt = prt.slice(k);
          revers += frstprt + scndprt;
      }
  }
    return revers;
};