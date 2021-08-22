const superHeros = [
  {name: 'Dynaguy', powers: ['desintegration ray', 'fly']},
  {name: 'Apogee', powers: ['gravity control', 'fly']},
  {name: 'Blazestone', powers: ['control of fire', 'pyrothecnic discharges']},
  {name: 'Frozone', powers: ['freeze water']},
  {name: 'Mr. Incredible', powers: ['physical strength']},
  {name: 'Elastigirl', powers: ['physical stretch']},
  {name: 'Violet', powers: ['invisibility', 'force fields']},
  {name: 'Dash', powers: ['speed']},
]

function getFlyingSuperHeros(){
  return superHeros.filter(hero => {
    return hero.powers.includes('fly')
  })
}

export {getFlyingSuperHeros}