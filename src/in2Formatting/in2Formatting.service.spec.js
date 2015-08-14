describe('format string replacing special character patterns with matching html tags', function () {
    var format;

    beforeEach(module('in2.playground.formatting'));

    beforeEach(inject(function (_in2Formatting_) {
        format = _in2Formatting_;
    }));

    it('should be defined', function () {
        expect(format).toBeDefined();
    });

    it("should throw exception in case the input is object", function () {
        var text = { a: "error" };

        expect(function () {
            format(text)
        }).toThrow('Invalid data type: object, expected string!');
    });

    it("should throw exception in case the input is number", function () {
        var text = 1;

        expect(function () {
            format(text)
        }).toThrow('Invalid data type: number, expected string!');
    });	

    it('should format empty string without change', function () {
        var text = "";

        expect(format(text)).toEqual("");
    });

    it('should format text without special characters without change', function () {
        var text = "text without special characters";

        expect(format(text)).toEqual("text without special characters");
    });

    it('should format single special characters without change', function () {
        var text1 = "text with single special character **";
        var text2 = "text with single special character *";
        var text3 = "text with single special character #";

        expect(format(text1)).toEqual("text with single special character **");
        expect(format(text2)).toEqual("text with single special character *");
        expect(format(text3)).toEqual("text with single special character #");
    });

    it('should format **some content** as <b>some content</b>', function () {
        var text = "**text with bold style**";

        expect(format(text)).toEqual("<b>text with bold style</b>");
    });

    it('should format *some content* as <i>some content</i>', function () {
        var text = "*text with italic style*";

        expect(format(text)).toEqual("<i>text with italic style</i>");
    });

    it('should format #some content# as <code>some content</code>', function () {
        var text = "#text with code style#";

        expect(format(text)).toEqual("<code>text with code style</code>");
    });

    it('should format ***text*** as <b><i>text</b></i>', function () {
        var text = "***text***";

        expect(format(text)).toEqual("<b><i>text</b></i>");
    });

    it('should format *#**text**#* as <i><code><b>text</b></code></i>', function () {
        var text = "*#**text**#*";

        expect(format(text)).toEqual("<i><code><b>text</b></code></i>");
    });

    it('should format **bold** *italic* #code#  as <b>bold</b> <i>italic</i> <code>code</code>', function () {
        var text = "**bold** *italic* #code#";

        expect(format(text)).toEqual("<b>bold</b> <i>italic</i> <code>code</code>");
    });

    it('should format multiple same patterns in a strings correctly', function () {
        var text1 = "**bold** **bold** **bold**";
        var text2 = "*italic* *italic* *italic*";
        var text3 = "#CODE# #CODE# #CODE#";

        expect(format(text1)).toEqual("<b>bold</b> <b>bold</b> <b>bold</b>");
        expect(format(text2)).toEqual("<i>italic</i> <i>italic</i> <i>italic</i>");
        expect(format(text3)).toEqual("<code>CODE</code> <code>CODE</code> <code>CODE</code>");
    });

});