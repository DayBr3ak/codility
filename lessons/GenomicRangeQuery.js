'use strict'

function solution(S, P, Q) {
    const M = P.length
    const N = S.length
    let result = []
    let prefixSums = []
    for (let i = 0; i < 3; i++) {
        prefixSums.push([0])   
    }
    
    for (let i = 0; i < N; i++) {
        let a = 0, c = 0, g = 0
        if (S[i] == 'A') {
            a = 1
        } else if (S[i] == 'C') {
            c = 1
        } else if (S[i] == 'G') {
            g = 1
        }
        prefixSums[0].push(prefixSums[0][i] + a)
        prefixSums[1].push(prefixSums[1][i] + c)
        prefixSums[2].push(prefixSums[2][i] + g)
    }
    
    for (let k = 0; k < M; k++) {
        let p = P[k]
        let q = Q[k] + 1
        
        if (prefixSums[0][q] - prefixSums[0][p] > 0) {
            result.push(1)   
        } else if (prefixSums[1][q] - prefixSums[1][p] > 0) {
            result.push(2)
        } else if (prefixSums[2][q] - prefixSums[2][p] > 0) {
            result.push(3)
        } else {
            result.push(4)
        }
    }
    return result
}
