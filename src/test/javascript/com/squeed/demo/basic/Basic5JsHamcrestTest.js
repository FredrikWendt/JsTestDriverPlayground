/**
 * Demonstrate setUp and tearDown.
 */

Array.prototype.size = function() {
	return this.length;
}
Array.prototype.isEmpty = function() {
	return this.size() == 0;
}

JsHamcrest.Integration.JsTestDriver();
BasicJsHamcrestTest = TestCase('BasicJsHamcrest', {
	
	setUp: function() {
		testee = [];
	},
	
	tearDown: function() {
		delete testee;
	},
	
	testSizeIsZeroFromStart: function() {
		assertThat(testee.size(), 0);
	},
	
	testIsEmptyFromStart: function() {
		assertThat(testee.isEmpty());
	},
	
	testAddingItemsIncreasesLength: function() {
		for (var i = 1; i < 100; i++) {
			testee[testee.length] = 'yo ' + i;
			
			assertThat(testee.isEmpty(), false);
			assertThat(testee.size(), equalTo(i));
		}
	},
	
	testWhichContainsAnError: function() {
		assertThat([], empty());
		assertThat([], not(empty()));
	},
	
	testWhichAlsoContainsAnError: function() {
		assertThat(['item'], not(empty()));
		assertThat(['also an item'], empty());
	},
	
	testWhichDemonstratesWhereToPutAdditionalErrorMessage: function() {
		assertThat('Alice', 'Alice');
		assertThat('Alice', 'Bob', 'Whops - wrong person');
	},
	
	testMore: function() {
		var obj = {
			key: 'value',
			fn: function() {
				alert('hi');
			}
		};

		assertThat(obj, hasMember('key'));
		assertThat(obj, hasMember('key', 'value'));
		assertThat(obj, hasMember('fn', func()));
		assertThat(obj, hasMember('lock', 'debt'));
	}

});
