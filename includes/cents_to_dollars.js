function cents_to_dollars(columnName) {
    return `(${columnName} / 100).toFixed(2)`;
}