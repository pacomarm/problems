// Columns: memo[0].length
// Rows:    memo.length
let twoSetMinDiff = (arr) => {
    arr.sort((a, b) => a - b);
    const len = arr.length;
    const sum = arr.reduce((a, b) => a + b, 0);
    const half_sum = Math.floor(sum / 2) + 1;
    let group1 = 0;
    let group2 = 0;
    let memo = new Array(len);

    for (let i = 0; i < len; i++) {
        memo[i] = new Array(half_sum);
    }
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < half_sum; j++) {
            memo[i][j] = 0;
        }
    }
    for (let i = 0; i < len; i++) {
        memo[i][0] = 1;
    }
    for (let j = 0; j < half_sum; j++) {
        if (j == arr[0]) {
            memo[0][j] = 1;
        }
    }

    for (let i = 1; i < len; i++) {
        for (let j = 1; j < half_sum; j++) {
            if (memo[i - 1][j]) {
                memo[i][j] = 1;
            } else {
                if (j >= arr[i]) {
                    memo[i][j] = memo[i - 1][j - arr[i]];
                }
            }
        }
    }

    for (let j = half_sum - 1; j >= 0; j--) {
        if (memo[len - 1][j]) {
            group1 = j;
            break;
        }
    }
    group2 = sum - group1;
    const difference = Math.abs(group2 - group1);
    return console.log(difference);
};