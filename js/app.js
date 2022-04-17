const text = document.querySelector('.text')
const id  = document.querySelector('.id')
const icon2 = document.querySelector('.icon-2')
url = 'https://api.adviceslip.com/advice'


getUser = ()=>{
  axios.get(url)
  .then(response => {
    const data = response.data
    const getText = data.slip.advice
    const getId = data.slip.id
    id.textContent = JSON.stringify(getId)
    text.textContent = JSON.stringify(getText)
  })
  .catch(error => console.log(error))
}
getUser()
icon2.addEventListener('click', () => getUser())


