function cents_to_dollars(column_name) {
    return `(${column_name} / 100).toFixed(2)`;
}