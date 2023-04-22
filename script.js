function paste() {
    navigator.clipboard.readText().then(text => {
        document.getElementById("inputText").value = text;
    });
}

function encrypt() {
    let inputText = document.getElementById("inputText").value;
    let outputText = "";
    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            outputText += String.fromCharCode((charCode - 65 + 13) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            outputText += String.fromCharCode((charCode - 97 + 13) % 26 + 97);
        } else {
            outputText += inputText.charAt(i);
        }
    }
    document.getElementById("outputText").value = outputText;
    document.getElementById("inputText").value = "";
}

function decrypt() {
    let inputText = document.getElementById("outputText").value;
    let outputText = "";
    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            outputText += String.fromCharCode((charCode - 65 - 13 + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            outputText += String.fromCharCode((charCode - 97 - 13 + 26) % 26 + 97);
        } else {
            outputText += inputText.charAt(i);
        }
    }
    document.getElementById("inputText").value = outputText;
    document.getElementById("outputText").value = "";
}

