import { getFlyingSuperHeros } from '../super-heros'

test('returns super heros that can fly', () => {
  const flyingHeros = getFlyingSuperHeros()
  expect(flyingHeros).toEqual([
    { name: 'Dynaguy', powers: [ 'desintegration ray', 'fly' ] },
    { name: 'Apogee', powers: [ 'gravity control', 'fly' ] }
  ])
})