//Användaren skriver in sten, sax eller påse//
const inputChoice = prompt ("Skriv in sten, sax eller påse");

//Datorn slumpar ett val//
function slumpaVal() {
    const val = ["sten", "sax", "påse"]
    const index = Math.floor(Math.random() * val.length);
    return val[index];
}
//Jämför resultat//
const datorVal = slumpaVal();

function jämför(valSpelare, valDator) {
    if (valSpelare === valDator) {
        console.log("Oavgjort");
    } else if (
        (valSpelare === "sten" && valDator === "sax") ||
        (valSpelare === "sax" && valDator === "påse") ||
        (valSpelare === "påse" && valDator === "sten")
    ) {
        console.log("Du vann");
    } else {
        console.log("Du förlorade");
    }
}

//Vinnaren utses//
jämför(inputChoice, datorVal);

