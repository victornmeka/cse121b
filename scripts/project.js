const button = document.querySelector('#generate-jokes');
button.addEventListener('click',generateNewJokes);
function generateNewJokes(e) {
    const newXHRRequest = new XMLHttpRequest();
    const numberOfJokes = document.querySelector('#number-of-jokes').value;

    newXHRRequest.open(
        'GET',
        `https://api.icndb.com/jokes/random/${numberOfJokes}`,
        true
    );

    newXHRRequest.onload = function () {
        if (this.status === 200) {
            const myJokes = JSON.parse(this.responseText);
            let output = '';
            if (myJokes.type === 'succcess') {
                myJokes.value.forEach(function (joke) {
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += `<li>Sorry! Couldn't get jokes</li>`;
            }

            document.querySelector('#jokes').innerHTML = output;
        }
    };

    newXHRRequest.send();


}