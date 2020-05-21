window.addEventListener('load', function() {
  
  fetch("https://api.github.com/users/rrgomide").then((res) => {
    res.json().then(data => {
      // console.log(data)
       // é aqui que se trabalha com os dados. é preciso pegar o resultado do fetch e trata-los duas vezes com then
      showData(data)
    })
  })
})

function showData(data) {
  const user = document.querySelector('#user')
  user.textContent = `${data.login} ${data.name}`
}
