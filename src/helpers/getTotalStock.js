function getTotalStock(inventory) {
    return inventory.reduce((total, tv) => total + tv.originalStock, 0);
}

export { getTotalStock };