
const categoryContainer = document.getElementById("category-container")

const loadCategory = () =>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
        const addCategory = data.categories
        // console.log(addCategory)
        showCategory(addCategory)
        
    })
    .catch((err) => {
        console.log(err)
    })
}

const showCategory = (addCategory) => {
    addCategory.forEach(cat => {
            categoryContainer.innerHTML += `
            <li id="${cat.id} " class="hover:bg-green-800 cursor-pointer">${cat.category_name} </li>
            `
            // console.log(cat.category_name)
        })

        categoryContainer.addEventListener('click', (e) => {
            const allLi = document.querySelectorAll('li')
            allLi.forEach(li => {
                li.classList.remove('bg-green-800')
            })
            if(e.target.localName === 'li') {
                console.log(e.target)
                e.target.classList.add('bg-green-800')
            }
        })
}



loadCategory()