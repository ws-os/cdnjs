/**
 * Hebrew (עברית) language functions
 */

(function($) {
	"use strict";
	var hebrew = $.extend({}, $.i18n.languages['default'], {
		convertGrammar : function(word, form) {
			switch (form) {
			case 'prefixed':
			case 'תחילית': // the same word in Hebrew
				// Duplicate prefixed "Waw", but only if it's not already double
				if (word.substr(0, 1) === "ו" && word.substr(0, 2) !== "וו") {
					word = "ו" + word;
				}

				// Remove the "He" if prefixed
				if (word.substr(0, 1) === "ה") {
					word = word.substr(1, word.length);
				}

				// Add a hyphen (maqaf) before numbers and non-Hebrew letters
				if (word.substr(0, 1) < "א" || word.substr(0, 1) > "ת") {
					word = "־" + word;
				}
			}
			return word;
		}
	});
	$.extend($.i18n.languages, {
		'he' : hebrew
	});
}(jQuery));
