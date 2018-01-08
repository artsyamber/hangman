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

//grabs the word section in html
var word = [];
word = document.getElementById("word");
//logs the current selected word
console.log(currentWord);

//adds dashes based on word length of current word
function dash(currentWord){
	for (var dashi = 0; dashi < currentWord.length; dashi++) {
		word.push("_ ");
}
};

//starts win count at 0
var winCount = 0;
//inserts the current wins count into the html
document.getElementById("wins").innerHTML = winCount;

//starts loss count at 0
var lossCount = 0;
//grabs the loss section in html
var loss = document.getElementById("loss");
//inserts the current loss count into the html
document.getElementById("loss").innerHTML = lossCount;

//declare number of guesses
var i = 12;
//grabs the number of tries section in html
var numTries = document.getElementById("numTries");
//inserts the current number of tries left into the html
document.getElementById("numTries").innerHTML = "13";

//grabs guessed from html
var guessed = document.getElementById("guessed");	


window.addEventListener('keydown', function(event){
		//checks if the key pressed is in the current word
		//if key pressed is in current word, add it to the current word html
		for (var i = 0; i < currentWord.length; i++) {
			if (currentWord[i] === event.key){
				word[i] = event.key;
			}else if(i>0){
				function alpha(){
					for (var iii = 0; iii < letters.length; iii++){
						if(letters[iii] === event.key){
						return true;
						}
					}
				}
				if(alpha()) {
					onKeyPress = document.getElementById("numTries").innerHTML = i--;
					guessed.textContent +=(event.key);
				}
				else{
					document.getElementById("loss").innerHTML = "";
					lossCount ++;
					onKeyPress = loss.textContent += lossCount;
					currentWord = words[Math.floor(Math.random() * words.length)];
					console.log(currentWord);
					document.getElementById("guessed").innerHTML = "";
					document.getElementById("numTries").innerHTML = "";
					i = 13;
				}
			}
		}
};
