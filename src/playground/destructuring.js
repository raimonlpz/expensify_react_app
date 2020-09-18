// OBJECT DESTRUCTURING

const person = {
    name: 'Andrew',
    age: 22,
    location: {
        city: 'Philadeplhia',
        temp: 12
    }
}

const { name: firstName = 'Raimon', age } = person
const { temp: temperature, city } = person.location

if (city && typeof temperature == 'number') {
    console.log(`It's ${temperature} in ${city}`)
}
console.log(`${firstName} is ${age}.`)

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Alfaguarra' } = book.publisher
console.log(publisherName)


// ARRAY DESTRUCTURING
const address = ['1299 S Juniper Street', 'Philadelphia']
const [, city, state = 'Cerdanyola'] = address

console.log(`You are in ${city}, ${state}.`)


const item = ['Coffee (hot)', '$3.00', '$4.30', '$5.10']
const [c, , pr] = item
console.log(`A medium ${c} costs ${pr}`)