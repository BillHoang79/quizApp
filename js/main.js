//array of questions and answers
var quizArray = [
	{
		question: "What color is the Sun?",
		answer: "orange"
	},
	{
		question: "how many Moons does the Earth have?",
		answer: 1
	},
	{
		question: "What is 12 + 11?",
		answer: 33
	},
	{
		question: "How many inches in a foot?",
		answer: 12
	},
	{
		question: "Biggest search engine in the world right now?",
		answer: "google"
	},
	{
		question: "Who invited Javascript?",
		answer: "brendan eich"
	},
	{
		question: "Java------ is cool!!",
		answer: "script"
	}
]

for(i = 0; i < quizArray.length; i++) {
 var q = quizArray[i].question
	document.getElementById('question' +[i]).textContent = q
}

function getInfo() {
	var correct = 0
	var incorrect = 0

	for(i = 0; i < quizArray.length; i++) {
		var solution = quizArray[i].answer
		var answer = document.getElementById('answer' + [i]).value
		var askQuestion = document.getElementById('question' + [i])
		if(solution == answer) {
			askQuestion.className = 'correct'
			correct++
		} else {
			askQuestion.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent= incorrect
}

