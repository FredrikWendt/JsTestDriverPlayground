/**
 * Demonstrate setUp and tearDown.
 */

Array.prototype.size = function() {
	return this.length;
}
Array.prototype.isEmpty = function() {
	return this.size() == 0;
}

BasicSetupEtcTest = TestCase('BasicSetupEtc', {
	
	setUp: function() {
		testee = []; // Does leak. Option: this.testee, but it's very Python-self-chatty
	},
	
	tearDown: function() {
		delete testee; // "un-leak"
	},
	
	testSizeIsZeroFromStart: function() {
		assertEquals(0, testee.size());
	},
	
	testIsEmptyFromStart: function() {
		assert(testee.isEmpty());
	},
	
	testAddingItemsIncreasesLength: function() {
		for (var i = 1; i < 100; i++) {
			testee[testee.length] = 'yo ' + i;
			
			assertFalse(testee.isEmpty());
			assertEquals(i, testee.size());
		}
	}
	 
});
