/**
 * An example of the "inline" test style.
 */

TestCase('ObservableTest', {

	setUp: function() {
		testee = new com.squeed.demo.util.Observable();
	},
	
	tearDown: function() {
		delete testee;
	},
	
    testBasicFlowWithFire: function() {
    	var called = false;
    	testee.addListener('newContract', function() {
    		called = true;
    	}, this);
    	
    	testee.fire('newContract');
    	
    	assertTrue(called);
    }

});
