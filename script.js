window.onload = function(){
    fetch('https://striveschool-api.herokuapp.com/books')
    .then(response =>   response.json())
    .then(books => {console.log(books)
    const AlltheBooks = document.querySelector("#cart-list")
    console.log('title',books[1].title);
    
    
    for(let i=0; i<books.length; i++){
    
    AlltheBooks.innerHTML += `<div class="card col-12 col-md-3 col-lg-4 bg-dark text-white" id=${books[i].asin} style="width: 13rem;">
    <img src="${books[i].img}" class="card-img-top img-fluid" height="100px">
    <div class="card-body">
      <h5 class="card-title">${books[i].title}</h5>
      <p class="card-text">${books[i].price} $</p>
      <button class="btn btn-primary">Add to cart</button>
    </div>
    </div>`
    }
    })}