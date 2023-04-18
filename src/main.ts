// initialize variables practice
let hello: string = "world";
hello = "test";

// practice functions
const getFullName = (name:string, surname:string): string => {
    return name + ' ' + surname;
}

console.log(getFullName('Chris', 'Farley'));

// creating objects
const user:{name: string, age: number} = {
    name: 'Larry',
    age: 56,
};

const user2:{name: string, age: number} = {
    name: "Jack",
    age: 25,
};

// typescript interfaces (entities)
interface UserInterface {
    name: string;
    age?: number;
    getMessage(): string;
}

// creating a user by interface
const user3: UserInterface = {
    name: 'Bob',
    age: 45,
    getMessage() {
        return "Hello " + name;
    },
}


