var elements = document.getElementsByTagName('*');
//var req = new XMLHttpRequest();
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            text = text.toLowerCase();
            var origText = text;

            //var badWords = ["trump","weinstein","fag","slut","bitch"]
            //var a = badWords.indexOf(origText);

            
            //if (a !== -1) {
            //    text = text.replace(/badWords[a]/gi, 'moron');
            //}
            var quotes = ["To succeed in life, you need three things: a wishbone, a backbone and a funny \
            bone", "Nothing is impossible. The word itself says I'm possible!", "Banana", "Orange", "Apple",
            "Live Laugh Love", ":( :( :(", "Juicy Couture", "~*~*~Ghéy~*~*~", "✧・ﾟ:* ", " (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧",
            "Bed Bath & Beyond", "Cheeto", "Nachos","Taco", "Burrito","dumpling"


            ]
            
            var randInt = Math.floor(Math.random() * quotes.length)

            text = text.replace(/trump/gi, quotes[randInt]);
            text = text.replace(/weinstein/gi, quotes[randInt]);
            text = text.replace(/fag/gi, quotes[randInt]);
            text = text.replace(/slut/gi, quotes[randInt]);
            text = text.replace(/dyke/gi, quotes[randInt]);
            text = text.replace(/bitch/gi, quotes[randInt]);
            text = text.replace(/pussy/gi, quotes[randInt]);
            text = text.replace(/p\*ssy/gi, quotes[randInt]);
            text = text.replace(/penis/gi, quotes[randInt]);



            if (text !== origText) {
                element.replaceChild(document.createTextNode(text), node);
            }
        }
    }
}
