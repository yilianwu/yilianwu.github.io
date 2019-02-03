/*
Tiroir
by
ertdfgcvb.com
2010

*/

var s = new Array();

//THE CHEERS
s.push("ciao");
s.push("hi");
s.push("guten Tag");
s.push("salut");
s.push("hello");
s.push("bonjour");
s.push("buona notte");
s.push("grüezi");
s.push("buenas dias");
s.push("olà olà");
s.push("go to hell");
s.push("namaste");
s.push("yo");
s.push("prosit");
s.push("viva");
s.push("shaba-daba");
s.push("hasta la victoria");
s.push("ooooooooooooooooooooh");
s.push("こんにちは");

//THE WHATS
s.push("fuck the what");
s.push("that Whatson & Olmes are your eroes");
s.push("that an ear that says “what?” is a deaf mouth");

//THE QUOTES
s.push("“I love you”");
s.push("“I want to be your slave”");
s.push("“I love my cat”");
s.push("“I ♥ ♠ ♦ ♣”");

//THE THATS
s.push("that “blog” is an ugly word");
s.push("that Gilgamesh is your father");
s.push("that you don’t want to hire me");
s.push("that you don’t want to write me");
s.push("that life is life");
s.push("that man has never been on moon");
s.push("that you liked your dinner");
s.push("that it’s time for a new haircut");
s.push("that aaaaah is not the same as oooooh");
s.push("that sex or fox are better than fax");
s.push("that it’s common to say it’s common");
s.push("that you are reading now but will write later");
s.push("that the best ice cream is at the Primavera");

//THE COLORS
s.push("that blue is your favourite color");
s.push("that gold is your favourite color");
s.push("that vermillion is your favourite color");

//THE NUMBERS
s.push("that π is close to, but not exactly 3.14159265358979323");
s.push("that four has four letters");
s.push("that five has four letters");
s.push("that nine has four letters");
s.push("that 1 one stays to 2 twos like 3 trees stay to 4 fords");

//THE ANIMALS
s.push("that a bird’s burden is the weight of a feather");
s.push("that bird is feather’s father but not vice-versa");
s.push("that you saw a cat sleeping in a box");
s.push("that the fly flies and the flies fly");
s.push("that gold is fish and golf is dish");
s.push("that slick worms eat silk");
s.push("that sheep sings while ship sinks");

/////////////////////////////////////////////////////////
var textNode = document.getElementById("tiroir");

var frameCount = 0;
var t = setInterval(step, 25);
var mode;
var currentPhrase = -1;
var currentStep;
swap();

/////////////////////////////////////////////////////////
function step(){
	if (mode == 0){ //grow
		var end = s[currentPhrase].length;
		var start = end - currentStep - 1;
		textNode.innerHTML = s[currentPhrase].slice(start,end);
		currentStep++;
		if(currentStep == s[currentPhrase].length) {
			mode++;
			currentStep = 0;
		}
	} else if (mode == 1) { //crappy delay...
		currentStep++;
		if (currentStep == 160) swap(); 
	}
}

/////////////////////////////////////////////////////////
function swap(){
	do {
		var r = Math.floor(Math.random() * s.length);
	} while(r == currentPhrase);
	currentPhrase = r;
	currentStep = 0;
	mode = 0;
	textNode.innerHTML = "";
}
