let allImage = [];
const ekleBtn =document.querySelector('.ekle-btn');
const ekleUrl= document.querySelector('.ekle-url');
const ekleTitle=document.querySelector('.ekle-title');
const imageDiv = document.querySelector('.image');
ekleBtn.addEventListener('click',() => {
    allImage.push({title:ekleTitle.value,url:ekleUrl.value});
    console.log(allImage);
    ekleTitle.value = "";
    ekleUrl.value = "";
})
const renderImages = (data = []) => {
    console.log(data);
    imageDiv.innerHTML = '';
    data.forEach(image => {
        const imageCard = document.createElement('div');
        imageCard.id = "image-card";
        imageDiv.appendChild(imageCard);
        /* const imageContainer = document.createElement('div');
        imageContainer.id = "image-container";
        imageContainer.appendChild(imageCard); */
        const imageElement = document.createElement('img');
        const imageTitle = document.createElement('p'); 
        imageTitle.id="title" ;   
        imageCard.appendChild(imageElement);
        imageCard.appendChild(imageTitle);
        imageElement["src"] = `${image.url}`;
        imageElement["id"] = `${image.id}`;
        imageElement["width"] = `250`;
        imageElement["height"] = `250`;
        imageElement.id = "img-rounded-border";
        imageTitle.innerHTML = `${image.title}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.id="delete-button";
        deleteBtn.innerHTML="Delete";
        imageCard.appendChild(deleteBtn);
      
        imageCard.addEventListener('click', () => {
            const newimages= data.filter(img => (img.id !== image.id));
            console.log(newimages);
            allImage = newimages;
            renderImages(allImage);           
        })

    })
}
const fetchImage = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=50-');
    allImage = res.data
    renderImages(allImage);
}
fetchImage();
const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const filterImage = allImage.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()));
    renderImages(filterImage);
}
)
