const jokeSection = document.getElementById('joke');
const generate = document.getElementById('generate');
const url = 'https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

async function getJoke() {
    jokeSection.classList.remove('fade');
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeSection.textContent = `${item.joke}`;
        jokeSection.classList.add('fade');
    });
}
generate.addEventListener('click',getJoke);
getJoke();
