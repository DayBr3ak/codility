'use strict'

function solution(N, A) {
    let M = A.length
    let counters = []
    let maxCounterValue = 0
    let lastMaxCounterValue = 0
    
    for (let i = 0; i < N; i++)
        counters.push(0)
    
    for (let i = 0; i < M; i++) {
        let X = A[i]
        if (X >= 1 && X <= N) {
            let cnt = counters[X - 1]
            if (cnt < lastMaxCounterValue)
                counters[X - 1] = lastMaxCounterValue
            
            counters[X - 1] += 1
            if (counters[X - 1] > maxCounterValue) {
                maxCounterValue = counters[X - 1]
            }
        }
        if (X == N + 1) {
            lastMaxCounterValue = maxCounterValue
        }        
    }   
    
    for (let i = 0; i < N; i++) {
        if (counters[i] < lastMaxCounterValue)
            counters[i] = lastMaxCounterValue
    }
    return counters
}
