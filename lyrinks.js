const {cliche_db} = require('./cliche_db.js')

let wordbank_db = {};

for (let i=0; i<cliche_db.length; i++) {
    for (let z=0; z<cliche_db[i].textArr.length; z++) {
        if (!wordbank_db[cliche_db[i].textArr[z]]) {
            wordbank_db[cliche_db[i].textArr[z]] = [cliche_db[i]];
        } else if (wordbank_db[cliche_db[i].textArr[z]]) {
            wordbank_db[cliche_db[i].textArr[z]].push(cliche_db[i]);
        }
    }
}

function matchCliches(search) {
    return wordbank_db[search];
}

console.log(`There are ${matchCliches("never").length} matches \n\n`);
console.log(matchCliches("never"))

/**
 * cliches_db is an array containing a list of cliches, each represented by 
 *  {text:"some cliche text", textArr:[some,cliche,text]}
 * wordbank_db is an object that links cliches to the individual words that comprise them. 
 *  wordbank_db["search"] returns a list of cliches that include the word "search"
 */