function centsToDollars(columnName) {
    return `(${columnName} / 100).toFixed(2)`;
}