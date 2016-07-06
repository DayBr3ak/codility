
def check(start, end):
    if start > end:
        return 'NO SOLUTION'
    else:
        return '%d,%d' % (start, end)

def check2(start, end):
    if start > end:
        return -1, -1
    else:
        return start, end

def isEven(n):
    return n % 2 == 0

def solution(A):
    odds = [i for i in range(len(A)) if not isEven(A[i])]

    if isEven(len(odds)):
        return check(0, len(A) - 1)

    odds = [-1] + odds + [len(A)]
    results = []
    # the numbers at the either end of A are even
    count = odds[1]
    secondCount = len(A) - 1 - odds[-2]
    firstCount = odds[2] - odds[1] - 1
    if secondCount >= count:
        results.append(check2(odds[1] + 1, len(A) - 1 - coun))

    if firstCount >= count:
        results.append(check2(odds[1] + count + 1, len(A) - 1))

    sumCounts = firstCount + secondCount
    if secondCount < count <= sumCounts:
        results.append(check2(odds[1] + (firstCount - (count - secondCount)) + 1, odds[-2]))

    # symetry
    count = len(A) - 1 - odds[-2]
    firstCount = odds[1]
    secondCount = odds[-2] - odds[-3] - 1
    if firstCount >= count:
        results.append(check2(count, odds[-2] -1))

    if secondCount >= count:
        results.append(check2(0, odds[-2] - count - 1))

    sumCounts = firstCount + secondCount
    if secondCount < count <= sumCounts:
        results.append(check2(count - secondCount, odds[-3]))

    results = sorted(results, key=lambda x: (-x[0],-x[1]) )
    current = -1, -2
    for item in results:
        if item[0] != -1:
            current = item

    return check(*current)

