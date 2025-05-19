import {inventory} from "./inventory.js";

function showOutcomeInConsole() {
    // Opdracht 1a
    const tvTypes = inventory.map(tv => tv.type);
    console.log(`antwoord 1a: Alle tv-type namen zijn: ${tvTypes.join(', ')}`);
    // Opdracht 1b
    const soldOutTvs = inventory.reduce((total, tv) => total + tv.sold, 0);
    console.log('antwoord 1b: Volledig uitverkochte tv\'s:', soldOutTvs);
    // Opdracht 1c
    const nh3216smart = inventory.find(tv => tv.type === 'NH3216SMART');
    console.log('antwoord 1c: Informatie over NH3216SMART:', nh3216smart);

    // Opdracht 1d
    const sportSuitableList = inventory.map(tv => {
        return {
            name: `${tv.brand} ${tv.name}`,
            suitable: tv.refreshRate >= 100
        };
    });
    console.log('Antwoord 1d: Geschikt voor sportkijkers:', sportSuitableList);
    // Opdracht 1e
    const largeScreens = inventory.filter(tv =>
        tv.availableSizes.some(size => size >= 65)
    );
    console.log('Atwoord 1e: Tv\'s met 65 inch of groter:', largeScreens);

    const ambilightTvs = inventory.filter(tv =>
        tv.options.find(option => option.name === 'ambiLight' && option.applicable)
    );

    console.log('Antwoord 1f : Tv\'s met ambilight:', ambilightTvs);

}

export {showOutcomeInConsole};

// Het is klaar zo