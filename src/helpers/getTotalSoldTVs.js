//Opdracht 1a
function getTotalSoldTVs(inventory) {
    return inventory.reduce((total, tv) => total + tv.sold, 0);
}

export { getTotalSoldTVs };