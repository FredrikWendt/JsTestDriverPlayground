BasicExtendedTest = TestCase('BasicExtendedTest');

BasicExtendedTest.prototype = {
		
	testNothingAgain: function() {
	},
	
	_testIgnored: function() {
		fail("I won't fail since I don't follow the naming pattern");
	},
	
	testSomeAssertions: function() {
		assert(true);
		assertTrue(true);
		assertEquals('4', 4);
		assertEquals(4, '4');
		
		assertNull(null);
		
		var a = [];
		var b = a;
		var c = [];
		assertSame(a, b);
		assertNotSame(a, c);
		assertNotSame(b, c);
		
		// full list at 
		// http://code.google.com/p/js-test-driver/wiki/Assertions
	},
	
	testWhichFails: function() {
		fail("This will fail all the time forever and ever");
	},
	
	testWhichFailsToo: function() {
		assertFalse(true);
	},
	
	testThatThrowsAnException: function() {
		throw "Whops";
	}
};

