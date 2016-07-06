function solution(A) {
    var sums = []
    var sumsDec = []
    var s = 0
    var sDec = 0
    for (var i = 0; i < A.length - 1; i++) {
        s += A[i]
        sums.push(s)
        sDec += A[A.length - 1 - i]
        sumsDec.push(sDec)
    }
    var minSum = -1
    for (var i = 0; i < A.length - 1; i++) {
        var diff = Math.abs(sums[i] - sumsDec[A.length - 2 - i])
        if (minSum == -1 || diff < minSum) {
            minSum = diff
        }
    }
    
    return minSum
}