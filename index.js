let name 
function introduction(name){return `Hi, my name is ${name}.`} introduction("Aki")
let language
function introductionWithLanguage(name,language){return `Hi, my name is ${name} and I am learning to program in ${language}.`}
introductionWithLanguage("Aki", "Emblem.js")
function introductionWithLanguageOptional(name , language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
// function introductionWithLanguageOptional(name , language){return `Hi, my name is ${name} and I am learning to program in ${language}.`}