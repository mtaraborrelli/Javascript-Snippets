// javascript data types

	undefined
	null
	boolean
	string
	number
	object


// Operators

	== // equals
	
	=== // strictly equals
	
	!= // is not equal to
	
	!== // strictly does not equal
	
	&& // and
	
	|| // or
	
	! // not
	

// keywords	

	new // object creator
	
	this // object self-reference


// function declaration

	function foo() {
		console.log("This is a function");
	}

	var bar = function() {
		console.log("This is also a function");
	};


// querying the DOM

	.getElementById()

	.getElementsByTagName()

	.getElementsByClassName()

	.querySelector();

	.querySelectorAll();


// Self-envoking anonymous function

	(function(){

		// code here

	})();


// Events

	element.addEventListener( event, function, useCapture ) // not supported by ie8

	element.attachEvent( 'event in dot notation', function(){} ) // ie8 or below

	.onclick // dot notation

	click // addEventListener

	// Cross browser check

	if ( window.addEventListener ) {
		document.getElementById('object').addEventListener( 'click', function(){
			//do something
		}, false );
	} else if ( window.attachEvent ) {
		document.getElementById('object').attachEvent('onclick', function() {
			//do something
		});
	}

	// Event Listeners

		click
		mouseover
		mouseout
		mousemove
		resize


// conditionals

	// switch

		switch(somecondition) {
			case 0:
				someexpression;
				break;
			case 1:
				someexpression;
				break;
			case 2:
				someexpression;
				break;
			default:
				someexpression;
		}


	//If-Else Statement

		if ( condition ) {
			// code goes here
			// ...
		} else {
			// otherwise run this code
		}


	// ternary oporator

		(some condition) ? dothis : thendothis;


// Loops

	// While Loop

		var a = 1;

		while ( a < 10 ) {
			console.log(a);
			a++;
		}

	// Do While Loop

		var a = 100;

		do {
			console.log(a);
			a++
		} while ( a < 10 );

	//For Loop

		for ( var i = 0 ; i < 10 ; i++ ) {
			//do stuff
			//do stuff
			//do stuff
			//etc..
		}

	// For In Loop

		for (variable in object) {...
			//do stuff
		}


// Functions


	// function declaration 

		function createMessage() {
			// do something
		}

	// function expresion

		var i = function() {
			// do something
		};

	// Envoking functions

		foo();

		foo.apply();

		foo.call();


//Character Literals

	\n = new line


//Object Literal

	var person = {
	    firstName:"John",
	    lastName:"Doe",
	    age:50,
	    eyeColor:"blue"
	}; 

	var person = new Object();
	person.firstName = "John";
	person.lastName = "Doe";
	person.age = 50;
	person.eyeColor = "blue";


//Object Constructor

	function person(first, last, age, eyecolor) {
	    this.firstName = first;
	    this.lastName = last;
	    this.age = age;
	    this.eyeColor = eyecolor;
	}
	var myFather = new person("John", "Doe", 50, "blue");
	var myMother = new person("Sally", "Rally", 48, "green");



	// Properties

	.length // returns length of object

	.callee // returns context


// Methods

	.onload // executes on load of page

	.setAttribute("attribute", "value") // sets attribute 

	.preventDefault();

	.addEventListener('event',function(){}, false);

	console.log();

	alert();

	.removeChild();

	.toString();

	document.createElement('');

	.appendChild()
