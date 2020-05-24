let valueSearch = "";
let allUsuarios = [];
let filter = [];

const input = document.querySelector("#input");
const button = document.querySelector("#button");
const tabUsuarios = document.querySelector("#tabUsuarios");
const tabEstatistica = document.querySelector("#tabEstatistica");

window.addEventListener("load", () => {
  fetchUsuarios();

  async function fetchUsuarios() {
    const res = await fetch(
      "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
    );
    const json = await res.json();
    allUsuarios = json.results.map((usuario) => {
      const { gender, name, dob, picture } = usuario;
      return {
        gender,
        name: `${name.first} ${name.last}`,
        age: dob.age,
        picture: picture.thumbnail,
      };
    });
    doButton();
  }

  function doButton() {
    input.addEventListener('input', ()=>{
      if(input.value != '') {
        button.disabled = false
      }
    })
    doClick();
  }

  function doClick() {
    button.addEventListener("click", () => {
      filter = allUsuarios
        .filter(
          (usuario) =>
            usuario.name.toLowerCase().indexOf(input.value.toLowerCase()) != -1
        )
        .sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      renderUsuarios();
    });
  }

  function renderUsuarios() {
    let usersHTML = `
  <div>
  <h5>${filter.length} usuário(s) encontrado(s)</h5>
  `;

    filter.forEach((usuario) => {
      const { gender, name, age, picture } = usuario;
      let userHTML = `
      
      <div>
        <img src="${picture}" alt="${name}"
        <p>${name}, ${age} anos </p>
      </div>        
    `;
      usersHTML += userHTML;
    });
    usersHTML += "<div>";
    tabUsuarios.innerHTML = usersHTML;
    renderEstatistica();
  }

  function renderEstatistica() {
    let masc = 0;
    let fem = 0;
    let soma = 0;

    filter.forEach((usuario) => {
      const { gender, age } = usuario;
      gender === "female" ? (fem += 1) : (masc += 1);
      soma += age;
    });

    let estatiticasHTML = `
  <div>
    <h5>Estatísticas</h5>
    <p>Sexo masculino: ${masc}</p>
    <p>Sexo feminino: ${fem}</p>
    <p>Soma das idades: ${soma}
    <p>Média das idades: ${(soma / filter.length).toFixed(2)}
  </div>
  `;
    tabEstatistica.innerHTML = estatiticasHTML;
  }
});
