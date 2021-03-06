/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for(element in someObj){
        console.log(`${element}: ${someObj[element]}`)
    }
}

function government(counrtyName, chiefExecutive, legistlatureType, numberRepresentatives, votingRepresentatives, numberSenators){
    this.counrtyName = counrtyName
    this.chiefExecutive = chiefExecutive
    this.legistlatureType = legistlatureType
    this.numberRepresentatives = numberRepresentatives
    this.votingRepresentatives = votingRepresentatives
    this.numberSenators = numberSenators
}
let unitedStates = new government("United States", "President", "Bicameral", 438, 435, 100)

objectProperties(unitedStates)
