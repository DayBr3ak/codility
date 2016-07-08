'use strict'

function solution(A) {
    let minima = Number.MAX_SAFE_INTEGER
    let cache = {}
    let plus = [1]
    for (let i = 0; i < A.length; i++) {
        cache[A[i]] = true
        if (A[i] >= 0)
            plus.push(A[i] + 1)
    }
    
    for (let i = 0; i < plus.length; i++) {
        if (plus[i] < minima && cache[plus[i]] === undefined) {
            minima = plus[i]   
        }
    }
    
    return minima
}
