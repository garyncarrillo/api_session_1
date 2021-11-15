document.addEventListener("submit", sendData);

function sendData(e) {
    // e.preventDefault();
    const a = document.querySelector("#num1").value;
    const b = document.querySelector("#num2").value;

    fetch("http://localhost:5000/add", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                num1: parseInt(a),
                num2: parseInt(b)
            })
        })
        .then(res => res.json())
        .then(data => {
            const {
                result
            } = data;
            document.querySelector(
                ".result"
            ).innerText = `The sum is: ${result}`;
        })
        .catch(err => console.log(err));
}
