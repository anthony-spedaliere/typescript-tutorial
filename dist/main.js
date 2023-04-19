// // initialize variables practice
// let hello: string = "world";
// hello = "test";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// // void is a set of undefined and null
// const doSomething = (): void => {
//     console.log('something');
// }
// // any keyword can return any type - essentially turns off typescript 
// let foo: any = 'foo';
// // type never - a function that never ends?
// const doSomethingElse = (): never => {
//     throw 'never';
// }
// // type unknown
// let vAny: any = 10;
// let vUnknown: unknown = 10;
// let s1: string = vAny;
// // type assertion - convert one type to another
// let s2: string = vUnknown as string;
// let pageNumber : string = '1';
// let numericPageNumber: number = pageNumber as unknown as number;
// const someElement = document.querySelector('.foo');
// someElement.addEventListener('blur', (event) => {
//     const target = event.target as HTMLInputElement;
//     console.log('event', target.value);
// })
// // typescript classes
// interface userInterface {
//     getFullName() : string;
// }
// class User implements userInterface {
//     private firstName: string
//     protected lastName: string
//     readonly unchangeableName: string;
//     static readonly maxAge = 50;
//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.unchangeableName = firstName;
//     }
//     getFullName(): string {
//         return this.firstName + ' ' + this.lastName;
//     }
// }
// // class inheritance
// class Admin extends User {
//     private editor: string;
//     setEditor(editor: string): void {
//         this.editor = editor;
//     }
//     getEditor(): string {
//         return this.editor;
//     }
// }
// const user = new User('John', 'Williams');
// console.log(user.getFullName());
// console.log(User.maxAge);
// const admin = new Admin('Bill', 'Weasley');
// typescript generics
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user = {
    name: 'Jack',
    data: {
        meta: 'foo'
    }
};
var user2 = {
    name: 'John',
    data: ['foo', 'bar']
};
var result = addId(user);
console.log(result);
