const accessKey = "aEfn8IKe4XkMecE4Sir8r2Y20cv6_mlvFODHH2RCacs"

const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchresult = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1

async function searchImages(){
    inputData = inputEl.value;
    const Url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    const response = await fetch(Url)
    const data = await response.json()

    const results = data.results

    if (page === 1){
        searchresult.innerHTML= ""
    }

    results.map((result))=>{
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.urls.small
        img.alt = result.alt.description
        const imageLink = document.createElement('a')
        imageLink.href = result.link.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        imageWrapper.appendChild(imageWrapper)

    }

    page++
    if(page > 1){
        showMore.style.display = "block"
    }
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    page = 1
    searchImages()
})

showMore.addEventListener("click",() =>{
    searchImages();
})