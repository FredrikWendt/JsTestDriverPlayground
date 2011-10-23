/**
 * An example of the "inline" test style.
 */

ListenerTest = TestCase('ListenerTest');

ListenerTest.prototype.testThatConstructorSavesProperties = function() {
	var eventName = 'eventName';
	var callback = function() {};
	var scope = {};
	
	var testee = new com.squeed.demo.util.Listener(eventName, callback, scope);
	
	assertEquals(eventName, testee.eventName);
	assertTrue(callback == testee.callback);
	assertEquals(scope, testee.scope);
};

ListenerTest.prototype.testThatConstructorFailsIfFuncArgumentIsNotAFunction= function() {
	var testee = new com.squeed.demo.util.Listener('', 'string', {});
};

ListenerTest.prototype.testTrigggeredHappyPath = function() {
	var called = false;
	var callback = function() {
		called = true;
	}
	
	var testee = new com.squeed.demo.util.Listener('monkey', callback);
	testee.triggered();
	
	assertTrue(called);
};
