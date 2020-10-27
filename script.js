function searchAnime(){

    // event.preventDefault();
    fetch('./en/aboutUs.html')
    .then(res => res)
    .then(data => {
        console.log(data);
        // searchResults.innerText = "";
        // data.results.forEach(element => {
        //     const newCard = document.importNode(resultsTemplate.content, true);
        //     const cardImg = newCard.querySelector('.search__img');
        //     const cardTitle = newCard.querySelector('.search__title');
        //     const cardUrl = newCard.querySelector('.search__url');
            
        //     cardImg.src = element.image_url;
        //     cardTitle.innerText = element.title;
        //     cardUrl.setAttribute("href", element.urldata);
        //     cardUrl.href = element.url;
        //     searchResults.appendChild(newCard);
        // });
    })
    .catch(err => console.log(err));

}
searchAnime();