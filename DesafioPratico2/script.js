
window.addEventListener('load', () =>{
  const input = document.querySelector("#input");
  const button = document.querySelector("#button");
  const tabUsuarios = document.querySelector("#tabUsuarios");
  const tabEstatistica = document.querySelector("#tabEstatistica");

  fetchUsuarios();
});

async function fetchUsuarios() {
  const res = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo');
  const json = await res.json()
  
  const allUsuarios = json.results.map(usuario => {
    const { gender , name , dob  , picture } = usuario
    return {
      gender,
      name: `${name.first} ${name.last}`,
      age: dob.age,
      picture: picture.thumbnail
    }
  })
  console.log(allUsuarios)
}