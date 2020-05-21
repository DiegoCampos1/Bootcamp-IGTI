const user = document.querySelector("#user");
function showData(json) {
  user.textContent = `${json.login} ${json.id}`;
}
window.addEventListener("load", function () {
  doFetchAsync()
  // executeDivisionAssyncAwait();
  // usuarioId(json)
});

// function doFetch() {
  //   fetch("https://api.github.com/users/rrgomide")
  //     .then((res) => {
    //       res.json().then((data) => {
//         // console.log(data)
//         // é aqui que se trabalha com os dados. é preciso pegar o resultado do fetch e trata-los duas vezes com then
//         showData(data);
//       });
//     })
//     .catch((error) => {
//       console.log("Erro na requisição");
//     });
// }

async function doFetchAsync() {
  const res = await fetch("https://api.github.com/users/rrgomide");
  const json = await res.json();
  const a = await usuarioId(json);
  showData(json)
  console.log(json)
  console.log (a)
}
// console.log(json)

const usuarioId = (json) => {
  return `${json.login} id: ${json.id}`
}

function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Não é possível dividir por 0");
    }
    resolve(a / b);
  });
}


// async function executeDivisionAssyncAwait() {
//   const division = await divisionPromise(12, 2);
//   console.log(division);
// }
