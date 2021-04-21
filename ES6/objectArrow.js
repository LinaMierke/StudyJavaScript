// when we need to create an object using two variables 

const race = '100m Dash'
const winners = ['Hunter Gath', 'Signa Song', "Imda Bos"]
// declaramos , pasamos un map y pondemos en el argumento winner y el index luego porque como para devolver se pone {} pero eso tambien queremos q es objecto entonces pones () extra  antes de para q la funcion sepa q es un object
const win = winners.map((winner, i) => ({name: winner, race: race, place: i +1}))

//el resultado si usamos console.TABLE(win)
/*
┌─────────┬───────────────┬─────────────┬───────┐
│ (index) │     name      │    race     │ place │
├─────────┼───────────────┼─────────────┼───────┤
│    0    │ 'Hunter Gath' │ '100m Dash' │   1   │
│    1    │ 'Signa Song'  │ '100m Dash' │   2   │
│    2    │  'Imda Bos'   │ '100m Dash' │   3   │
└─────────┴───────────────┴─────────────┴───────┘
*/
//another example of arrow :

const ages = [23, 54, 60,55,67,89,90,102]
const old = ages.filter(age => age >= 60);
console.log(old);

//result

//[ 60, 67, 89, 90, 102 ]