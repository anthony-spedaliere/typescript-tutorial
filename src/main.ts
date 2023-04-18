// // initialize variables practice
// let hello: string = "world";
// hello = "test";

// // practice functions
// const getFullName = (name:string, surname:string): string => {
//     return name + ' ' + surname;
// }

// console.log(getFullName('Chris', 'Farley'));

// // creating objects
// const user:{name: string, age: number} = {
//     name: 'Larry',
//     age: 56,
// };

// const user2:{name: string, age: number} = {
//     name: "Jack",
//     age: 25,
// };

// // typescript interfaces (entities)
// interface UserInterface {
//     name: string;
//     age?: number;
//     getMessage(): string;
// }

// // creating a user by interface
// const user3: UserInterface = {
//     name: 'Bob',
//     age: 45,
//     getMessage() {
//         return "Hello " + name;
//     },
// }

// // Union and Type alias in Typescript

// // alias
// type ID = string;
// type PopularTag = string;
// // combining type alias and union
// type MaybePopularTag = PopularTag | null;

// // interface
// interface UserInterface {
//     id: ID;
//     name: string;
//     surname: string;
// }

// const dragonTag: MaybePopularTag = 'dragon';

// const popularTags:PopularTag[] = ['dragon', 'coffee'];

// let username: string = "alex";
// // '|' is a union operator
// let pageName: string | number = "1";

// let errorMessage: string | null = null;

// let user: UserInterface | null = null;

