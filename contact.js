const formButton = document.querySelector("#formButton");
formButton.addEventListener("click", getInput);

function getInput() {
    var sent = false;
    var x = document.getElementById("feedback").value;
    var f = document.getElementById("feedbackForm");
    var t = document.getElementById("textArea");
    if (x != null && x != "") {
        formButton.removeEventListener("click", getInput);
        let req = new XMLHttpRequest();
        t.innerHTML = '<p>' + x + '</p>'
        req.onreadystatechange = () => {
            if (req.readyState == XMLHttpRequest.DONE && !sent) {
                f.innerHTML = '<p>Thank you for your feedback!</p>';
                sent = true;
                var arr = JSON.parse(req.responseText)['record'];
                req.open("PUT", "https://api.jsonbin.io/v3/b/<6570b9c212a5d37659a40357>", true);
                req.setRequestHeader("Content-Type", "application/json");
                req.setRequestHeader("X-ACCESS-Key", "<KEY>");
                arr.push({ feedback: x });
                req.send(JSON.stringify(arr));
            }
        };

    req.open("GET", "https://api.jsonbin.io/v3/b/<6570b9c212a5d37659a40357>/latest", true);
    req.setRequestHeader("X-ACCESS-Key", "<KEY>");
    req.send();
}