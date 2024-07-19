class Book{
    constructor(title, author, publication_year){
        this.title = title
        this.author = author
        this.publication_year = publication_year
    }
    book_details(){
        console.log(`${this.title}, ${this.author}, ${this.publication_year}`)

     }
}
class Ebook extends Book{
    constructor(title, author, publication_year, price){
        super(title, author, publication_year);
        this.price = price;
    }
    book_details(){
        super.book_details();
       console.log(`$${this.price}`)
    }
}
const ebook1 = new Ebook("Harry Potter", "JK Rowling", 2015, 10.86);
ebook1.book_details();