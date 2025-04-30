import './App.css';
import {inventory} from "./constants/inventory.js";
import {getTotalSoldTVs} from "./helpers/getTotalSoldTVs.js";
import { getTotalStock } from "./helpers/getTotalStock.js";
import { getTotalToBeSold } from "./helpers/getTotalToBeSold.js";


function App() {
  //Opdracht 1a:
  const totalSold = getTotalSoldTVs(inventory);//Gooi de inventory in de helper functie
  const totalStock = getTotalStock(inventory);
  const totalRemaining = getTotalToBeSold(inventory);

  console.log("Totaal verkochte tv's:", totalSold);
  console.log("Totaal ingekochte tv's:", totalStock);
  console.log("Nog te verkopen tv's:", totalRemaining);
  return (
      <>
      <h1>Tech it easy Deshboard</h1>
        <p id="groen">Aantal verkochte producten: {totalSold}</p>
        <p id="blauw">Aantal ingekochte producten: {totalStock}</p>
        <p id="rood">Aantal producten dat nog verkocht moet worden: {totalRemaining}</p>
    </>
  )
}

export default App
