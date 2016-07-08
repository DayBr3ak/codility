'use strict'
function solution(A, B, K) {
    let add = 0
    if (A % K == 0)
        add ++
    
    let div1 = Math.floor(B / K)
    let div2 = Math.floor(A / K)
    
    // console.log(div1, div2, div1-div2 + add)
    return div1 - div2 + add
}
