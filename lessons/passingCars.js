'use strict'
function solution(A) {
    const N = A.length
    let sameDirection = 0
    let result = 0
    let P = -1
    if (N == 1)
        return 0
    
    for (let i = 0; i < N; i++) {
        if (P == -1) {
            if (A[i] == 0)
                P = 0
            continue
        }
        if (A[i] == 1) {
            result += sameDirection + 1
            if (result > 1000000000) {
                return -1
            }
        } else {
            sameDirection++
        }
    }
    return result
}
