'use strict'
function solution(A) {
    let sumTotal = 0
    let sumA = 0
    let occurences = []
    for (let i = 0; i < A.length; i++) {
        occurences.push(0)
    }
    
    for (let i = 0; i < A.length; i++) {
        sumA += A[i]
        sumTotal += i + 1
        
        if (A[i] >= A.length + 1)
            return 0
            
        occurences[A[i] - 1] += 1
        if (occurences[A[i] - 1] > 1)
            return 0
    }
    
    if (sumA == sumTotal) return 1
    return 0
}
