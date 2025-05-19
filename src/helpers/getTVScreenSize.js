//Opdracht 2c

//
// // Inch to mm conversie
// function convertInchToCm(inch) {
//     return Math.round(inch * 2.54);
// }
//
// // bouw de string
// function formatSize(inch) {
//     var cm = convertInchToCm(inch);
//     return inch + ' inch (' + cm + ' cm)';
// }
//
// // converteer de TV groodte
// function getTVScreenSize(tv) {
//     return tv.availableSizes
//         .map(function(size) {
//             return formatSize(size);
//         })
//         .join(' | ');
// }

function getTVScreenSize(tv) {
    return tv.availableSizes
        .map(size => {
            const cm = Math.round(size * 2.54); // inch naar cm
            return `${size} inch (${cm} cm)`;
        })
        .join(' | ');
}

export { getTVScreenSize };