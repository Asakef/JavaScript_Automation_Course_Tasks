

const myBook = {
    booktitle: "The Young Shall Grow",
    bookDescr: "Blue with Black color",
    numberOfPages: 45,
    bookAuthor: "Chinue Achebe",
    IsReadable: false,
    toggleBookIsReadable:function(){
            if (myBook.IsReadable ===true){

                myBook.IsReadable= false }
                
                else{
                        myBook.IsReadable= true
                    }
                }

                }  
                
    myBook.toggleBookIsReadable()

    console.log(myBook.IsReadable)




    
  