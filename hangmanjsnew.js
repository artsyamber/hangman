console.log("Hello, What are you doing in my waters?");
//array of letters to listen for
var letters = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//array of words
var words = [
'divination',
'psychic',
'esoteric',
'supernatural',
'incantation',
'telepathy',
'spiritual'
];

//picks a random word
var currentWord = words[Math.floor(Math.random() * words.length)];


//logs the current selected word
console.log(currentWord);

//declares the variable for the word content
var wordContent = document.getElementById("word");
wordContent.innerHTML = '';

//adds dashes based on word length of current word into html
(function dashes(){
		for (var dashi = 0; dashi < currentWord.length; dashi++) {
		wordContent.innerHTML += ("_");
}
})(currentWord);

function dashes2(){
		for (var dashi = 0; dashi < currentWord.length; dashi++) {
		wordContent.innerHTML += ("_");
}
};

//starts win count at 0
var winCount = 0;
//inserts the current wins count into the html
document.getElementById("wins").innerHTML = winCount;

//starts loss count at 0
var lossCount = 0;
//inserts the current loss count into the html
document.getElementById("loss").innerHTML = lossCount;

//grabs the number of tries section in html
var numTries = document.getElementById("numTries");
//inserts the current number of tries left into the html
document.getElementById("numTries").innerHTML = 13;

//declare number of guesses
var i = 12;

//grabs guessed from html
var guessed = document.getElementById("guessed");
guessed.innerHTML = '';



function letterCheck(){
			for (var i = 0; i < currentWord.length; i++) {
				if (currentWord.charAt(i) === event.key){
					var temp = wordContent.innerHTML;
					wordContent.innerHTML = temp.substr(0,i) + currentWord[i] + temp.substr(i + currentWord[i].length);
				}
			}
	};
	


window.addEventListener('keydown', function(event){
	if(letters.includes(event.key)){
	letterCheck();
		if (currentWord.indexOf(event.key) === -1 && letters.includes(event.key)){
			numTries.innerHTML--;
			guessed.innerHTML += event.key;
		}
	}	else {
		return alert("Sorry, " + event.key + " is an invalid input.");
	}
});

window.addEventListener('keydown', function endGame() {
	if (word.textContent == currentWord){
		alert('You Won!\nPlay again?');
		wins.innerHTML++;
		var currentWord = words[Math.floor(Math.random() * words.length)];
		wordContent.innerHTML = '';
		document.getElementById("numTries").innerHTML = 13;
		dashes2(currentWord);
		guessed.innerHTML = '';
	} else if(document.getElementById("numTries").textContent === '0'){
		alert('You lost!\nPlay again?');
		loss.innerHTML++;
		var currentWord = words[Math.floor(Math.random() * words.length)];
		wordContent.innerHTML = '';
		document.getElementById("numTries").innerHTML = 13;
		dashes2(currentWord);
		guessed.innerHTML = '';
	}
});
