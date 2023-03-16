const arbiter = (()=>{
    const getVerdict = (cells) => {
        if (cells[0] !== null && cells[1] === cells[0] && cells[2] === cells[1]) {
            return 1
        } else if (cells[3] !== null && cells[4] === cells[3] && cells[4] === cells[5]) {
            return 2
        } else if (cells[6] !== null && cells[7] === cells[6] && cells[8] === cells[7] ) {
            return 3
        } else if (cells[0] !== null && cells[3] === cells[0] && cells[6] === cells[3]) {
            return 4
        } else if (cells[1] !== null && cells[4] === cells[1] && cells[7] === cells[4]) {
            return 5
        } else if (cells[2] !== null && cells[5] === cells[2] && cells[8] === cells[5]) {
            return 6
        } else if (cells[0] !== null && cells[4] === cells[0] && cells[8] === cells[4]) {
            return 7
        } else if (cells[2] !== null && cells[4] === cells[2] && cells[6] === cells[4]) {
            return 8
        } else if (cells[0] !== null && cells[1] !== null && cells[2] !== null &&
            cells[3] !== null && cells[4] !== null && cells[5] !== null &&
            cells[6] !== null && cells[7] !== null && cells[8] !== null) {
            return 0
        } else {
            return -1
        }
    }

    return {getVerdict}
})();

export default arbiter