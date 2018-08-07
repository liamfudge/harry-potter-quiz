//database section
	const database = [{
							question: "What is Colin Creevey's younger brother called?",
							answer: "Dennis",
							wrongA: "Neville",
							wrongB: "Ernest",
						},
						{
							question: "What password do Harry and Ron use to enter Slytherins common room?",
							wrongA: "Mudblood",
							wrongB: "Parselemouth",
							answer: "PureBlood",
						},
						{
							question: "How many uses of dragons blood did Dumbledoor discover?",
							wrongA: "13",
							answer: "12",
							wrongB: "14",
						},
						{
							question: "What is the name of Harry's owl?",
							wrongA: "Scabbers",
							wrongB: "Crokshanks",
							answer: "Hedwig",
						},
						{
							question: "What is Harry's mother's maiden name?",
							wrongA: "Potter",
							answer: "Evans",
							wrongB: "Prince",
						},
						{
							question: "What animal does James Potter turn into?",
							answer: "Stagg",
							wrongA: "Dog",
							wrongB: "Wolf",
						},
						{
							question: "What does the 'WWN' stand for?",
							wrongA: "Wierd Witches Network",
							wrongB: "Wizard & Witches Network",
							answer: "Wizarding Wireless Network",
						},
						{
							question: "Who has the 'emotional range of a teaspoon?'",
							wrongA: "Harry",
							answer: "Ron",
							wrongB: "Serious",
						},
						{
							question: "What spell does Hermione use to move the Christmas tree in the 3 Broomsticks?",
							answer: "Mobiliarbus",
							wrongA: "Obliviate",
							wrongB: "Mobilicorpus",
						},
						]


var count = (function() {
	count = 0;
	var addButton = document.getElementById("addButton");
	addButton.addEventListener("click", count2);
	function count2() {
		count = count + 1;
	}
	return count;
})();
var score = (function() {
	score = 0;
	// var answerCorrectClick = document.getElementById("answerCorrect");
	// answerCorrectClick.addEventListener("click", addFunc);
	function addFunc() {
		score = score + 1;
	}
	return score;
})();
const text = document.getElementById("textToChange");
const textParent = document.getElementById("textParent");
const addButton = document.getElementById("addButton");
const deleteButton = document.getElementById("deleteButton");

addButton.addEventListener("click", addFunctionRunner);


function addFunctionRunner() {
	addFunc();
	}

function addFunc() {
	var questionFromList = database[count - 1].question;
	console.log("this is the add ", questionFromList);

	var list = document.getElementById("my-list");
		var newElement = (function() {
			newElement = document.createElement('h1');
			newElement.textContent = ` ${questionFromList}`;
			newElement.classList.add("classTestQuestion");
			return newElement;
		})();
	list.insertBefore(newElement, list.firstElementChild);

	var answerFromList = database[count - 1].answer;
	var answerFromList2 = database[count - 1].wrongA;
	var answerFromList3 = database[count - 1].wrongB;

	var ans = document.getElementById("my-list2");
		var newAns = (function() {
			newAns = document.createElement('h1');
			newAns.textContent = ` ${answerFromList}`;
			newAns.classList.add("classTest");
			newAns.classList.add("classTest");
			newAns.setAttribute("id", "answerCorrect")
			return newAns;
		})();
		var newAns2 = (function() {
			newAns2 = document.createElement('h1');
			newAns2.textContent = ` ${answerFromList2}`;
			newAns2.classList.add("classTest");
			newAns2.classList.add("classTest");
			newAns2.setAttribute("id", "wrongA")
			return newAns2;
		})();
		var newAns3 = (function() {
			newAns3 = document.createElement('h1');
			newAns3.textContent = ` ${answerFromList3}`;
			newAns3.classList.add("classTest");
			newAns3.classList.add("classTest");
			newAns3.setAttribute("id", "wrongB")
			return newAns3;
		})();


	var responseBox = document.getElementById("scoreDisplay");
		var responseCorrect = (function() {
			responseCorrect = document.createElement('h1');
			responseCorrect.textContent = `Correct answer! your score is ${scoreCount + 1} out of ${count}`;
			responseCorrect.classList.add("classTestAnswer");
			responseCorrect.setAttribute("id", "responseCorrect")
			return responseCorrect;
		})();
	var responseBox2 = document.getElementById("scoreDisplay");
		var responseWrong = (function() {
			responseWrong = document.createElement('h1');
			responseWrong.textContent = `Wrong answer! your score is ${scoreCount} out of ${count}`;
			responseWrong.classList.add("classTestAnswer");
			responseWrong.setAttribute("id", "responseCorrect")
			return responseWrong;
		})();

		//random positioning section
		// ans.insertBefore(newAns, ans.firstElementChild);
		// ans.insertBefore(newAns2, ans.firstElementChild);
		// ans.insertBefore(newAns3, ans.firstElementChild);
		setTimeout (function() {
			return ans.insertBefore(newAns, ans.firstElementChild);
			}, (Math.random()*10));
		setTimeout (function() {
			ans.insertBefore(newAns2, ans.firstElementChild);
			}, (Math.random()*10));
		setTimeout (function() {
			ans.insertBefore(newAns3, ans.firstElementChild);
			}, (Math.random()*10));

		setTimeout (function() {
		var answerCorrectClick = document.getElementById("answerCorrect");
		var wrongAClick = document.getElementById("wrongA");
		var wrongBClick = document.getElementById("wrongB");
		answerCorrectClick.addEventListener("click", answerCorrectFunc);
		wrongAClick.addEventListener("click", wrongAFunc);
		wrongBClick.addEventListener("click", wrongBFunc);
		function answerCorrectFunc() {
			console.log("correct");
			newElement.classList.add("classTestQuestionInactive");
			setTimeout(function(){
				newElement.classList.add("fade-out2");
			}, 1200);
			newAns.classList.add("classTestCorrect");
			setTimeout(function(){
				newAns.classList.add("fade-out");
			}, 1200);
			newAns2.classList.add("classTestInactive");
			setTimeout(function(){
				newAns2.classList.add("fade-out2");
			}, 1200);
			newAns3.classList.add("classTestInactive");
			setTimeout(function(){
				newAns3.classList.add("fade-out2");
			}, 1200);
			var quizBox = document.getElementById("quizBox");
			quizBox.classList.add("quizBoxDarker");
			var check = answerCorrectClick;
			checkAnswer(check);
			setTimeout(function(){
				deleteFunc(check);
			}, 1800);
			setTimeout(function(){
				nextVisible();
			}, 1900);
		}
		function wrongAFunc() {
			console.log("wrong AAAAA");
			newElement.classList.add("classTestQuestionInactive");
			setTimeout(function(){
				newElement.classList.add("fade-out2");
			}, 1200);
			newAns.classList.add("classTestIfCorrect");
			setTimeout(function(){
				newAns.classList.add("fade-out");
			}, 1200);
			newAns2.classList.add("classTestWrong");
			setTimeout(function(){
				newAns2.classList.add("fade-out");
			}, 1200);
			newAns3.classList.add("classTestInactive");
			setTimeout(function(){
				newAns3.classList.add("fade-out2");
			}, 1200);
			var quizBox = document.getElementById("quizBox");
			quizBox.classList.add("quizBoxDarker");
			var check = wrongAClick;
			checkAnswer(check);
			setTimeout(function(){
				deleteFunc(check);
			}, 1800);
			setTimeout(function(){
				nextVisible();
			}, 1900);
		}
		function wrongBFunc() {
			console.log("wrong BBBbbbb");
			newElement.classList.add("classTestQuestionInactive");
			setTimeout(function(){
				newElement.classList.add("fade-out");
			}, 1200);
			newAns.classList.add("classTestIfCorrect");
			setTimeout(function(){
				newAns.classList.add("fade-out2");
			}, 1200);
			newAns2.classList.add("classTestInactive");
			setTimeout(function(){
				newAns2.classList.add("fade-out2");
			}, 1200);
			newAns3.classList.add("classTestWrong");
			setTimeout(function(){
				newAns3.classList.add("fade-out");
			}, 1200);
			var quizBox = document.getElementById("quizBox");
			quizBox.classList.add("quizBoxDarker");
			var check = wrongBClick;
			checkAnswer(check);
			setTimeout(function(){
				deleteFunc(check);
			}, 1800);
			setTimeout(function(){
				nextVisible();
			}, 1900);
		}

		function checkAnswer(check) {
			setTimeout (function() {
				if (check.id === answerCorrectClick.id) {
						scoreCount = (scoreCount) + 1;
						console.log(`Correct answer!!!!! your score is ${scoreCount} out of ${count}`);
						responseBox.insertBefore(responseCorrect, responseBox.firstElementChild);
						setTimeout(function(){
							responseCorrect.classList.add("fade-out");
						}, 1200);
					}	else {
						console.log(`you dumb as shit. wrong! your score is ${scoreCount} out of ${count}`);
						responseBox2.insertBefore(responseWrong, responseBox2.firstElementChild);
						setTimeout(function(){
							responseWrong.classList.add("fade-out");
						}, 1200);
					}
					
			}, 10);


		}

		function deleteFunc(check) {
				var quizBox = document.getElementById("quizBox");
				quizBox.classList.remove("quizBoxDarker");
				list.removeChild(newElement);
				ans.removeChild(newAns);
				ans.removeChild(newAns2);
				ans.removeChild(newAns3);
				if(check.id === answerCorrectClick.id) {
					responseBox.removeChild(responseCorrect);
				} else {
					responseBox2.removeChild(responseWrong);
				}
			}
	}, 110);
}

var scoreCount = 0;

//next visibility section
	addButton.addEventListener("click", nextHide);

	function nextHide() {
		addButton.classList.add("nextButtonInactive");
		
		removeListener();
	}
	function nextVisible() {
		addButton.classList.remove("nextButtonInactive");
		addButton.addEventListener("click", addFunctionRunner);
		addButton.addEventListener("click", nextHide);
	}

	function removeListener() {
		addButton.removeEventListener("click", addFunctionRunner);
		addButton.removeEventListener("click", nextHide);
	}


var quizBox = document.getElementById("quizBox");
quizBox.classList.remove("quizBoxDarker");





