import './App.css';
import {inventory} from "./constants/inventory.js";
import {getTotalSoldTVs} from "./helpers/getTotalSoldTVs.js";
import { getTotalStock } from "./helpers/getTotalStock.js";
import { getTotalToBeSold } from "./helpers/getTotalToBeSold.js";

import { getTVName } from "./helpers/getTvName.js";
import { formatTVPrice } from "./helpers/formatTVPrice.js";
import { getTVScreenSize } from "./helpers/getTVScreenSize.js";
import { bestSellingTv } from './constants/inventory.js';
import { showOutcomeInConsole } from "./constants/oevenbestandje.js";
import check from '../src/assets/check.png';
import minus from '../src/assets/minus.png';

function App() {
  showOutcomeInConsole();


  //Opdracht 1a:
  const totalSold = getTotalSoldTVs(inventory);//Gooi de inventory in de helper functie
  const totalStock = getTotalStock(inventory);
  const totalRemaining = getTotalToBeSold(inventory);
  console.log("Totaal verkochte tv's:", totalSold);
  console.log("Totaal ingekochte tv's:", totalStock);
  console.log("Nog te verkopen tv's:", totalRemaining);
  //Opdracht 2-Productweergave

  const TV= bestSellingTv;
  const tvName = getTVName(TV);
  const price = formatTVPrice(TV.price);
  const sizes = getTVScreenSize(TV);


//Reminder van de les. Altijd even copie maken van de array. Sorteren verandert origineel!!
// 3a verkochte items van hoog naar laag
  function sorteerOpMeestVerkocht() {
    const gesorteerdeTVs = [...inventory].sort((a, b) => b.sold - a.sold);
    console.log('Gesorteerde TV\'s (meest verkocht eerst):', gesorteerdeTVs);
  }

// 3B TV's op prijs van laag naar hoog
  function sorteerOpGoedkoopstePrijs() {
    const gesorteerdeTVs = [...inventory].sort((a, b) => a.price - b.price);
    console.log('Gesorteerde TV\'s (goedkoopste eerst):', gesorteerdeTVs);
  }

  //3C verversingssnelheid van hoog naar laag
  function sorteerOpMeestGeschiktVoorSport() {
    const gesorteerdeTVs = [...inventory].sort((a, b) => b.refreshRate - a.refreshRate);
    console.log('Gesorteerde TV\'s (meest geschikt voor sport eerst):', gesorteerdeTVs);
  }

  return (
      <>

{/*//Deel1//*/}
        <h1>Tech it easy Deshboard</h1>
        <div className="dashboard">
          <div className="card green">Aantal verkochte producten: {totalSold}</div>
          <div className="card blauw">Aantal ingekochte producten: {totalStock}</div>
          <div className="card rood">Aantal producten dat nog verkocht moet worden: {totalRemaining}</div>
        </div>


        <h2>Best verkochte tv</h2>

        <div className = "best-selling-tv">
          <img src={bestSellingTv.sourceImg} alt={getTVName(bestSellingTv)} width="250" />
          <div className="tv-info">
            <h1>{tvName}</h1>
            <p>{price}</p>
            <p>{sizes}</p>
            <div className="icon-row">
              <div className="icon-item">
                <img src="../src/assets/check.png" alt="WiFi" />
                <span>WiFi</span>
              </div>
              <div className="icon-item">
                <img src="../src/assets/minus.png" alt="Speech" />
                <span>Speech</span>
              </div>
              <div className="icon-item">
                <img src="../src/assets/check.png" alt="HDR" />
                <span>HDR</span>
              </div>
              <div className="icon-item">
                <img src="../src/assets/check.png" alt="Bluetooth" />
                <span>Bluetooth</span>
              </div>
              <div className="icon-item">
                <img src="../src/assets/minus.png" alt="Ambilight" />
                <span>Ambilight</span>
              </div>
            </div>
          </div>
        </div>
        {/*opdracht 1F*/}
        <section>
          <h2>Sorteren</h2>
          <div className="button-row">
            {/*<button onClick={() => console.log('Meest verkocht eerst')}>Meest verkocht eerst</button>
            Opdracht 3a
            */}
            <button onClick={sorteerOpMeestVerkocht}>Meest verkocht eerst</button>
            {/*<button onClick={() => console.log('Goedkoopste eerst')}>Goedkoopste eerst</button>
            Opdracht 3b
            */}
            <button onClick={sorteerOpGoedkoopstePrijs}>Goedkoopste eerst</button>

            {/*<button onClick={() => console.log('Meest geschikt voor sport eerst')}>Meest geschikt voor sport eerst</button>
            Opdracht 3C
            */}
            <button onClick={sorteerOpMeestGeschiktVoorSport}>Meest geschikt voor sport eerst</button>
          </div>
        </section>

        {/*//Einde deel 1*/}
      {/*  Deel 2*/}
        {/* Opdracht 2a: TV merken */}
        <section>
          <h2>Alle TV Merken</h2>
          <ul>
            {inventory.map((tv, index) => (
                <li key={index}>{tv.brand}</li>
            ))}
          </ul>
        </section>

        {/*/!* Opdracht 2b}*/}
        <section>
          <h2>Alle TV's</h2>
          <div className="tv-grid">
            {inventory.map((tv) => (
                <div className="tv-card" key={tv.type}>
                  <img src={tv.sourceImg} alt={getTVName(tv)} width="250" />
                  <h3>{getTVName(tv)}</h3>
                  <p>{formatTVPrice(tv.price)}</p>
                  <p>{getTVScreenSize(tv)}</p>
                  {/*//Opdracht 2C*/}
                  {/*<ul>*/}
                  {/*  /!*Let op. Eerst haalde ik alleen de indexen op*!/*/}
                  {/*  {tv.options.map((option) => (*/}
                  {/*      <li key={option.name}>*/}
                  {/*        {option.applicable ? '✅' : '❌'}*/}
                  {/*        {option.name}*/}
                  {/*      </li>*/}
                  {/*  ))}*/}
                  {/*</ul>*/}

                  <ul className="option-list">
                    {tv.options.map((option) => (
                        <li key={option.name} className="option-item">
                          <img
                              src={option.applicable ? check : minus}
                              alt={option.applicable ? 'Check' : 'Cross'}
                              className="option-icon"
                          />
                          <span>{option.name}</span>
                        </li>
                    ))}
                  </ul>

                </div>
            ))}
          </div>
        </section>

      {/*  Einde deel 2*/}

      </>
  )
}

export default App
