var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var request = new XMLHttpRequest();
            var text = node.nodeValue;

            request.onreadystatechange = function(){
              if(this.readyState == 4 && this.status == 200){
                text.innerHTML = this.responseText;
              }else{
                text.innerHTML = " ";
              }
            }

            request.open('POST', '/', true);
            request.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            request.send(text);


            var replacedText = text.replace(/General/gi, '-------------');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
