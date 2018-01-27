var elements = document.getElementsByTagName('*');
var req = new XMLHttpRequest();
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            text = text.toLowerCase();
            var origText = text;

            var badWords = ["trump","weinstein","fag","slut","bitch"]
            var a = badWords.indexOf(origText);

            
            if (a !== -1) {
                text = text.replace(/badWords[a]/gi, 'moron');
            }
            /*
            text = text.replace(/donald trump/gi, 'moron');
            text = text.replace(/weinstein/gi, 'ew');
            text = text.replace(/fag/gi, ':( :(');
            text = text.replace(/slut/gi, 'I am a queen');


            /*
            text = text.replace(/\bTrump\b/g, '-------------');
            text = text.replace(/\bTrump\b/g, '-------------');
            text = text.replace(/\bTrump\b/g, '-------------');
            */


            //if (text !== origText) {
                element.replaceChild(document.createTextNode(text), node);
            //}
        }
    }
}
