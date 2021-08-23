const board = [['s', 'o', 's', 'o'],
                ['s', 'o', 'o', 's'],
                ['s', 's', 's', 's']];
const word = 'sos';

/**
 * Horizontal Function: Match word in matrix only horizontal way
 * @param {Array} board Board of matrix
 * @param {string} word Word that need to match 
 * @returns number
 */
function horizontal (board, word) {
    let count = 0;
    board.forEach((v, k) => {
        const str = board[k].join().replace(/,/g, "");
        if (str.match(word)) {
            count += 1;
        }
    });
    console.log('.... Horizontal .... ', count);
    return count;
}

/**
 * Vertical Function: Match word in matrix only vertical way
 * @param {Array} board Board of matrix
 * @param {string} word Word that need to match 
 * @returns number
 */
function vertical (board, word) {
    let count = 0;
    let subCount = 0;
    let boardKeyLen = board[0].length;
    while(subCount < boardKeyLen) {
        let verArr = [];
        board.forEach((v, k) => {
            verArr.push(board[k][subCount]);
        });
        subCount += 1;
        const str = verArr.join().replace(/,/g, "");
        if (str.match(word)) {
            count += 1;
        }
    }
    console.log('.... Vertical .... ', count);
    return count;
}

/**
 * Diagonal Function: Match word in matrix only diagonal way
 * @param {Array} board Board of matrix
 * @param {string} word Word that need to match 
 * @returns number
 */
function diagonal (board, word) {
    // TODO
    return 1;
}

function wordCount(board, word) {
    const horizontalSum = horizontal(board, word);
    const verticalSum = vertical(board, word);
    const diagonalSum = diagonal(board, word);
    return horizontalSum + verticalSum + diagonalSum;
}

// Calling Function
const result = wordCount(board, word);
console.log('Here is Result: ', result);
