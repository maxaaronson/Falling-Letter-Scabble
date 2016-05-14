/**
 * Created by Max on 6/27/2015.
 */
var text;
var newtext = [];
$(document).ready(function() {

    function FileHelper() {}
    {
     //alert("filehelper");


        FileHelper.readStringFromFileAtPath = function (pathOfFileToReadFrom) {
            var request = new XMLHttpRequest();
            request.open("GET", pathOfFileToReadFrom, false);
            request.send(null);
            var returnValue = request.responseText;

            return returnValue;
        }
    }
    text = FileHelper.readStringFromFileAtPath ( "../resources/A Words.txt" );
    newtext = (text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/B Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/C Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/D Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/E Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/F Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/G Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/H Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/I Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/J Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/K Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/L Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/M Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/N Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/O Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/P Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/Q Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/R Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/S Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/T Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/U Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/V Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/W Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/X Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/Y Words.txt" );
    newtext = newtext.concat(text.split("\n"));
    text = FileHelper.readStringFromFileAtPath ( "../resources/Z Words.txt" );
    newtext = newtext.concat(text.split("\n"));

    newtext = newtext.concat(text.split("\n"));
    /*for (var l = 0; l<newtext.length; l++) {

        console.log(newtext[l]);
    }*/
});

function checkWord(myWord){
//alert("myword called");


for (l = 0; l<newtext.length; l++){
    if (myWord === newtext[l]) {
        return true;
         }
    }
    return false;
}