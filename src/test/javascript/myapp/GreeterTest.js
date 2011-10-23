GreeterTest = TestCase("GreeterTest");

GreeterTest.prototype.testGreet = function() {
	var greeter = new myapp.Greeter();
	assertEquals("Hello World!", greeter.greet("World"));
};

GreeterTest.prototype.testGreet2 = function() {
	var greeter = new myapp.Greeter();
	assertEquals("Hello You!", greeter.greet("Me"));
};