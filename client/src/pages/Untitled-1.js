
.then(res => {                  
  if(res.data.error ){
    console.log(res.data.error)
    errorFromBook = res.data.error;
  }else{
    // console.log(res.data.error)
    booksArray = res.data.items;
    console.log(booksArray)
    this.displayBooks();  
  }
})

if (booksArray[i].saleInfo.retailPrice.amount === null) {
  bookPrice = String("0.00")
}esle{
  bookPrice = String(booksArray[i].saleInfo.retailPrice.amount)

}

if (booksArray[i].volumeInfo.imageLinks === null) {
  bookThumbnail = 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg'
  itemsBooksArray.push(bookThumbnail);
}else{
  bookPrice = String(booksArray[i].volumeInfo.imageLinks.thumbnail)
  itemsBooksArray.push(booksArray[i].volumeInfo.imageLinks.thumbnail)
}     



function truncateString(str, num) {    
  if (str.length > num && num > 3) {
          return str.slice(0, (num - 3)) + '...';
      } else if (str.length > num && num <= 3) {
          return str.slice(0, num) + '...';
      } else {
          return str;
  }

}
bookDescription = truncateString(bookDescription, 180);


shuffle = () => {
  let itemsArray = [...this.state.items];
  let itemsShuffled = [];    
  for (var i = 0;  i < this.state.items.length; i++) {        
        shuffleData = itemsArray.splice(Math.floor(Math.random()*itemsArray.length));        
        itemsShuffled = [...itemsShuffled, ...shuffleData];
      }   
      ShuffledDatas.push(this.state.items);
  // Set this.state.deals equal to the new deals array
  this.setState({ items: itemsShuffled });
  // itemsArray = [...this.state.deals];
  // this.setState({Items: deals});
  
};

import Container from 'react-bootstrap/Container'




update: function(req, res) {
    console.log("userName", req.body.userName)
    db.User.find({"userName" : req.body.userName}, function(error, data){
      if(error) throw error
      switch(data.length !== 0) {    
        case true:          
            return res.json({data,
                // "data": "You can't create data",
                "error": "YOU ARE IN"
                })            
        case false:
            return console.log('USER DOES NOT EXIST'), res.json({error,
            // "data": "You can't create data",
            "error": "User does not exist!"
            })
        default :
          return res.json({error, "error": "Username cannot be empty"})      
      }
        
    })    
  },


  memberName: "",    
    cCard:"",
    userTheme:"",
    userImage:"",
    contact: {
                address:"",
                phone: "",
                email: "",
              },
    cart: {
            item: "",
            qty:	"",
            unitPrice: "",
            link: "",
            description: "",
            thumbnail: "",
            customerRating: "",
          },
    savedItems: {
                  item: "",	
                  unitPrice: "",
                  link: "",
                  description: "",
                  thumbnail: "",
                  customerRating: "",
                },      
      bookExchange: {
                      bookId: "",
                      title:  "",
                      authors: "",
                      link: "",
                      thumbnail: "",
                      description: "",
                      publisheddate: "",
                      request: false,       
                      deny: true,
                    },  


 // console.log("test: " + app)
      // .then(res => {
      //   console.log('res========', res.data.error)
      //   const { data } = res.data;
      //   if(res.data.error === "Invalid Password"){
      //     console.log(res.data)
      //     document.getElementById("message").textContent = res.data.error;
      //     this.setState({
      //       isError: true,         
      //       errorMessage: res.data.error,
      //       memberemail: " ",      
      //       memberpassword: " ",
      //     })
      //   } else if (res.data.error === "User does not exist!"){
      //       console.log(res.data)
      //       document.getElementById("message").textContent = res.data.error;
      //       this.setState({
      //         isError: true,            
      //         errorMessage: res.data.error,
      //         memberemail: " ",      
      //         memberpassword: " ",
      //       })
        
      //   } else {
      //     // console.log("No exisit")
      //     this.setState({            
      //       userName: data[0].memberId,
      //       memberId: data[0].memberId,
      //       userTheme: data[0].userTheme,
      //       memberName: data[0].memberName,
      //     })
      //     console.log("THIS IS USERNAME", userName)
      //     console.log("THIS IS MEMBERNAME", data[0].memberName)
      //     console.log("THIS IS USERTHEME", data[0].userTheme)  
      //     console.log("THIS IS RES JSON DATA", data) 
      //     // console.log("THIS IS MEMBERNAME", memberName)
      //     // console.log("THIS IS USERTHEME", userTheme)  
      //     console.log("THIS IS RES JSON DATA", data)          
            
      //     mid = data[0].userTheme   
      //     this.userTheme(mid);                 
      //   }
      //   // this.loadPersonalizePage()
      // })
      
      // .catch(err => console.log(err)); 
      // console.log("THIS IS USERNAME", this.user.userName)
      // console.log("THIS IS MEMBERNAME", this.user.memberName)
      // console.log("THIS IS USERTHEME", data[0].userTheme)  
       
      // console.log("THIS IS MEMBERNAME", memberName)
      // console.log("THIS IS USERTHEME", userTheme)  
      // console.log("THIS IS RES JSON DATA", data)          
        
      // mid = this.user.userTheme   
      // this.userTheme(mid);                 


      
    console.log("PROPS+++", this.props.currentUser);
    console.log("USERNAME+++", currentAccount.userName);
    console.log("THIS IS USERNAME", this.state.userName)    
    console.log("USERNAME API ID$$$$", userName);
    // console.log("LOADUSERDATA ID++++", id)
    userName = String(currentAccount.userName)
    console.log("THIS IS CURRENTACCOUNT$$$$", currentAccount);