
const categoryContainer = document.getElementById("category-container")
const plantBox = document.getElementById('plant-box')

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
                console.log(e.target.id)
                e.target.classList.add('bg-green-800')
                loadPlantByCategory(e.target.id)
            }
        })
}

const loadPlantByCategory = (plantId) => {
    console.log(plantId)
    fetch(`https://openapi.programming-hero.com/api/category/${plantId}`)
    .then(res => res.json())
    .then(data => {
        
        showPlantCategory(data.plants)
    })
    .catch(err => {
        console.log(err)
    })

}

const showPlantCategory = (plantTree) => {
    console.log(plantTree)
    plantBox.innerHTML = ""
    plantTree.forEach(tree => {
        plantBox.innerHTML += `  <div class=" p-2 bg-white rounded-xl shadow-xl space-x-1">
                    <div class="md:w-[230px] md:h-[130px] md:overflow-hidden ">
                        <img class="md:w-full md:h-full md:object-cover  rounded-t-md " src="${tree.image} "
                            alt="">
                    </div>
                    <h1 class="text-xl font-bold underline">${tree.name} </h1>
                    <p class="text-sm mt-3">${tree.description} </p>
                    <div class="md:flex md:justify-between mt-3">
                        <div class="text-sm font-semibold border border-b-teal-400 rounded-md text-green-700 p-1">
                            ${tree.category}
                        </div>
                        <div class="text-sm font-semibold">${tree.price} </div>
                    </div>
                    <button class="bg-green-700 w-full h-10 rounded-[50px] mt-3 text-white font-semibold">Add to
                        Cart</button>
                </div>
`
    })

}


loadCategory()



const plantBoxs = document.getElementById("plant-box");
const loadBtn = document.getElementById("load-btn");

// API থেকে ডাটা লোড করা
const loadPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants") // এখানে আপনার JSON ফাইল / API URL দিতে হবে
    .then((res) => res.json())
    .then((data) => {
      displayPlants(data.plants);
    })
    .catch((err) => console.log(err));
};

const loadWordDetail =async(id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
   
    const res =await fetch(url)
    const details=await res.json()
     displayWordDetail(details.plants)
}


// "plants": {
// "id": 3,
// "image": "https://i.ibb.co.com/xt98PwZq/jackfruit-min.jpg",
// "name": "Jackfruit Tree",
// "description": "A large tropical tree that bears the world’s biggest fruit, the jackfruit. Its sweet and aromatic flesh is both nutritious and filling, and the tree itself provides generous shade.",
// "category": "Fruit Tree",
// "price": 800
// }
// }




const displayWordDetail = (plant) => {
    console.log(plant)
    const detailsBox = document.getElementById("details-container")
    detailsBox.innerHTML= `
    <h1 class="text-lg font-bold">bana tree</h1>
                <div class="w-[250px]">
                    <img class="w-[150px] rounded-md" src="${plant.image} " alt="">
                </div>
                <h2><span class="text-lg font-bold">category:</span>${plant.category} </h2>
                <h3><span class="text-lg font-bold">price:</span>${plant.price} </h3>
                <h3><span class="text-lg font-bold">Description:</span>${plant.description}.
                </h3>
    
    `
    document.getElementById("my_modal_5").showModal()
}



// গাছ দেখানোর ফাংশন
const displayPlants = (plants) => {
  plantBoxs.innerHTML = ""; // আগের ডাটা ক্লিয়ার

  plants.forEach((tree) => {
    const card = document.createElement("div");

    card.innerHTML = `
      <div class="p-2 bg-white rounded-xl shadow-xl space-x-1">
          <div class="md:w-[230px] md:h-[130px] md:overflow-hidden">
              <img class="md:w-full md:h-full md:object-cover rounded-t-md" src="${tree.image}" alt="${tree.name}">
          </div>
          <h1  onclick="loadWordDetail(${tree.id} )" class="text-xl font-bold underline">${tree.name}</h1>
          <p class="text-sm mt-3">${tree.description}</p>
          <div class="md:flex md:justify-between mt-3">
              <div class="text-sm font-semibold border border-b-teal-400 rounded-md text-green-700 p-1">
                  ${tree.category}
              </div>
              <div class="text-sm font-semibold">${tree.price} ৳</div>
          </div>
          <button class="bg-green-700 w-full h-10 rounded-[50px] mt-3 text-white font-semibold">
              Add to Cart
          </button>
      </div>
    `;

    plantBox.appendChild(card);
  });
};

// বাটনে ক্লিক করলে ডাটা আসবে
loadBtn.addEventListener("click", loadPlants);

// ডিফল্ট ভাবে রিলোড হলে ডাটা আসবে
window.addEventListener("DOMContentLoaded", loadPlants);




