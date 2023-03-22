const addID = <T extends { name: string }>(obj: T) => {
    let id = Math.floor(Math.random() * 1000)

    return { ...obj, id }
}

let person1 = addID({ name: 'test', age: 12 })

console.log(person1.id);
console.log(person1.name);

let person2 = addID({ name: 'dfsf' })

console.log(person2.id);
console.log(person2.name);

function logLength(a: any) {
    console.log(a.length);
    return a
}
logLength(8)

function logLengthFan<T extends HasLength>(a: T) {
    console.log(a.length);
    return a
}

interface HasLength {
    length: number
}

logLengthFan('jhjhh')


function logLengths<T extends HasLength>(a: T[]) {
    a.forEach(item => {
        console.log(item.length);
    })
}
let arr = [
    'This string has a length prop',
    ['This', 'arr', 'has', 'length'],
    { material: 'plastic', length: 30 },
];

logLengths(arr)

enum ResourceTypes {
    Book = 1,
    Author,
    Director,
    Person
}

console.log(ResourceTypes.Book);


interface Vehicle {
    topSpeed: number
}

interface Train extends Vehicle {
    type: 'Train',
    carriages: number
}

interface Plane extends Vehicle {
    type: 'Plane',
    wingSpan: number
}

type PlaneOrTrain = Plane | Train

function getSpeedRatio(v: PlaneOrTrain) {
    if (v.type === 'Train') return v.topSpeed / v.carriages
    return v.topSpeed / v.wingSpan
}

let BigTrain: Train = {
    type: 'Train',
    carriages: 100,
    topSpeed: 200
}

console.log(getSpeedRatio(BigTrain));




