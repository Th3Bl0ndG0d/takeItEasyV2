//Hergebruik van eerder gemaakte helpers
import { getTotalStock } from './getTotalStock.js';
import { getTotalSoldTVs } from './getTotalSoldTVs.js';

function getTotalToBeSold(inventory) {
    return getTotalStock(inventory) - getTotalSoldTVs(inventory);
}

export { getTotalToBeSold };