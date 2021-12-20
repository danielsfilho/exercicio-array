let listaAtores = [

    {
  
      nome: 'Keanu Reeves',
  
      personagem: 'Neo',
  
      filme: 'The Matrix',
  
    },
  
    {
  
      nome: 'David Prowse',
  
      personagem: 'Darth Vader',
  
      filme: 'Star Wars Episódios IV-VI',
  
    },
  
    {
  
      nome: 'Bruce Wayne',
  
      personagem: 'Batman',
  
      filme: 'Batman - O Início'
  
    },
  
  ]
  let atoresHTML = ''
    
  for (let contador = 0; contador < listaAtores.length; contador++) {
    ator = listaAtores[contador]
    nombre = ator.nome
    perso = ator.personagem
    pelicula = ator.filme

    atoresHTML += `
    <div>
      <h2>${nombre}</h2>
      <p>Interpreta o personagem ${perso} no filme ${pelicula}</p> 
    </div>`
  }
  
  const constante = document.querySelector('#sec')
  constante.innerHTML = atoresHTML