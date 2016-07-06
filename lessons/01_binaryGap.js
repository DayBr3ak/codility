'use strict';

function solution(N) {
    let cntZero = 0;
    let longest = 0;
    let maxI = Math.log2(N) + 1
    let avoidTrailing = true;
    for (let i = 0; i < maxI; i++) {
        let reste = (N >> i) & 0x01
        if (reste) {
            avoidTrailing = false
            if (cntZero > 0) {
                if (cntZero > longest) {
                    longest = cntZero
                }
            }
            cntZero = 0
        } else if (!avoidTrailing) {
            cntZero++   
        }
    }
    return longest
}