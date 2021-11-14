'use strict'

let booksByGenre = [
    {
        genreName: "Crafts",
        books: [
            {
                id: 8,
                title: "Lorem ipsum",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
                    "optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=20"
            },
            {
                id: 10,
                title: "Aliquam consequatur",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
                    "ea fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=21"
            },
            {
                id: 34,
                title: "Laudantium",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
                    "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=22"
            }
        ]
    },
    {
        genreName: "Thriller",
        books: [
            {
                id: 4,
                title: "Necessitatibus",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
                    " nulla optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=23"
            },
            {
                id: 13,
                title: "Nulla optio quae quod",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
                    "fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=24"
            },
            {
                id: 59,
                title: "Non nulla",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
                    " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=25"
            }
        ]
    }
];


function modelHTML( booksByGenre, booksSection){ 

    for (let book of booksByGenre){
    let booksSection = document.querySelector('.books-section');
    let genreCard = document.createElement('div');
    genreCard.classList.add('book-card');

    let genreName = document.createElement('h2');
    genreName.innerText = book.genreName;

    let bookCard = document.createElement('div');
    bookCard.classList.add('books');

    for (let bookName of book.books){
        let articles = document.createElement('article');
    
        let span = document.createElement('span');
        span.innerText = bookName.title

        let img= document.createElement('img');
        img.classList.add("card__image")
        img.setAttribute('src',bookName.img)

        let description = document.createElement('p');
        description.innerText = bookName.description

        let link = document.createElement('a')
        link.innerHTML = `
        <a>Читать</a>`
    articles.append(span, img, description, link)
    bookCard.append(articles)
    }
    
    genreCard.append(genreName, bookCard)
    booksSection.append(genreCard)
    }
 console.log(modelHTML(booksByGenre, booksSection))
}
