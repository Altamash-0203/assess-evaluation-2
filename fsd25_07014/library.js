function library(){
    let books=[]
    let dvds=[]
    let magazine=[]
    
    function addbook(book)
    {
      books.push(book)
    }
    
    function adddvd(dvd)
    {
        dvds.push(dvd)
    }
    
    function addmagzine(mag)
    {
        magazine.push(mag)
    }
    
    function checkout(user)
    {
        let x=books[0]
        x+=user
    }
    
    // Creating new library items
    const book1 =["The Great Gatsby", "F. Scott Fitzgerald", 180, "Fiction", "9780743273565"]
    const dvd1 =["Inception", "Christopher Nolan", 148, "Science Fiction", "PG-13"];
    const magazine1 =["National Geographic", "Various", 80, "Science", "April 2023", "Monthly"]
    checkout("user98274")
    addbook(book1)
    adddvd(dvd1)
    addmagzine(magazine1)
    
    console.log(books,dvds,magazine)
    }
    
    library()