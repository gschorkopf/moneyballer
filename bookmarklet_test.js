function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

// Code takes highlighted text on page and appends text in accepted format to ESPN search
location.href='http://search.espn.go.com/'+getSelectionText().split(" ").join("-");
location.target='_blank'