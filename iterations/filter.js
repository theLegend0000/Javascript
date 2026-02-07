const myNums = [0,1,2,3,4,5,6,7,8,9]

// Problem with forEach is that it doesn't return anything, so we can't chain it with other array methods


// const values = myNums.forEach( (num) => {

//     return num * 2
// })

//console.log(values)  // it will print undefined because forEach doesn't return anything

// to solve this problem we can use filter method which returns a new array with all the elements that pass the test implemented by the provided function

const values = myNums.filter( (num) => (num > 4))

console.log(values);

const books = [

    {
        title: "The Great Gatsby",
        published: 1925,
        genre: "Fiction",
        edition: "First"
    },

    {
        title: "To Kill a Mockingbird",
        published: 1960,
        genre: "Fiction",
        edition: "First"
    },

    {
        title: "1984",
        published: 1949,
        genre: "Dystopian",
        edition: "First"
    },

    {
        title: "The Catcher in the Rye",
        published: 1951,
        genre: "Fiction",
        edition: "First"
    },

    {
        title: "Rich Dad Poor Dad",
        published: 1997,
        genre: "Personal Finance",
        edition: "First"
    }
]

const fictionBooks = books.filter( (bk) => (bk.genre === "Fiction"));
console.log(fictionBooks);

