//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://techy-api.vercel.app/api/json'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h1').innerText = data.message
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

