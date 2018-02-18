
const fs = require('fs');

const fetchQuotes = () => {

		
		const quotes = fs.readFileSync('motivate.json',"utf8");
		const motivateObj = JSON.parse(quotes);
		return motivateObj;


}

const getMotivation = () => {

var motivatedArr = fetchQuotes();
var random = parseInt((Math.random() * motivatedArr.length));
return motivatedArr[random];


}

const addMotivation = (quote,by) => {


const quoteArr = fetchQuotes();

quoteArr.push({ quote,by });

const quoteString = JSON.stringify(quoteArr);

fs.writeFileSync('motivate.json',quoteString);




}

module.exports = {

getMotivation,
addMotivation


}