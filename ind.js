const menu = [
    {
      id: 1,
      title: "Fry biryani",
      category: "biryani",
      price: 15.99,
      img: "biryani1.jpg",
      desc: `Fry Biryani is a kind of biryani with fried chicken wings and basmati rice pulao.`,
    },
    {
      id: 2,
      title: "Dum biryani",
      category: "biryani",
      price: 13.99,
      img: "biryani2.jpg",
      desc: `It  consists of chicken legs with Hyderabadi style dum biryani rice.`,
    },
    {
      id: 3,
      title: "Chicken pulao",
      category: "biryani",
      price: 6.99,
      img: "biryani3.jpg",
      desc: `It is konaseema kodi pulao just consists of fry pieces of chicken with non-basmati rice.`,
    },
    {
      id: 4,
      title: "Mogalai biryani",
      category: "biryani",
      price: 20.99,
      img: "biryani4.jpg",
      desc: `Mogalai Biryani is a egg biryani which is similar to egg friedrice but a kind of biryani.`,
    },
    {
      id: 5,
      title: "strawberry cake",
      category: "cake",
      price: 22.99,
      img: "cake1.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation . `,
    },
    {
      id: 6,
      title: "Birthday Cake",
      category: "cake",
      price: 18.99,
      img: "cake2.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia.`,
    },
    {
      id: 7,
      title: "Cool cake",
      category: "cake",
      price: 8.99,
      img: "cake3.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge. `,
    },
    {
      id: 8,
      title: "Cone icecream",
      category: "icecream",
      price: 12.99,
      img: "icecream1.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo. `,
    },
    {
      id: 9,
      title: "Scoop icecream",
      category: "icecream",
      price: 16.99,
      img: "icecream2.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb..`,
    },
    {
      id:10,
      title:"Chocolate icecream",
      category:"icecream",
      price:15,
      img:"icecream3.jpg",
      desc:`slote authentic icecream love choclpoasl floewr choco ice cream and edison.`,

    }
  ];
const allbtn=document.querySelector("#all")
const biryanibtn=document.querySelector("#biryani")
const cakebtn=document.querySelector("#cake")
const coolbtn=document.querySelector("#cool")
const menuContainer=document.querySelector(".menu-container")

window.addEventListener("DOMContentLoaded",function(){
  var finalmenu
  finalmenu=menu.map(function(singleItem){
    return `
    <div class="item">
    <img src="${singleItem.img}" alt="biryani" class="item-img">
    <div class="details">
        <div class="namePrice">
            <h3 class="item-name">${singleItem.title}</h3>
            <p class="item-price">${singleItem.price}$</p>
        </div>
        <div class="item-underline">

        </div>
        <div class="item-text">
        ${singleItem.desc}
            </div>
    </div>

</div>
    `
  })
  finalmenu.join("")
  menuContainer.innerHTML=finalmenu
})

window.addEventListener("DOMContentLoaded",function(){
  var finalmenu
  finalmenu=menu.map(function(singleItem){
    return `
    <div class="item">
    <img src="${singleItem.img}" alt="biryani" class="item-img">
    <div class="details">
        <div class="namePrice">
            <h3 class="item-name">${singleItem.title}</h3>
            <p class="item-price">${singleItem.price}$</p>
        </div>
        <div class="item-underline">

        </div>
        <div class="item-text">
        ${singleItem.desc}
            </div>
    </div>

</div>
    `
  })
  finalmenu.join("")
  menuContainer.innerHTML=finalmenu
})


allbtn.addEventListener("click",function(){
  var finalmenu
  finalmenu=menu.map(function(singleItem){
    return `
    <div class="item">
    <img src="${singleItem.img}" alt="biryani" class="item-img">
    <div class="details">
        <div class="namePrice">
            <h3 class="item-name">${singleItem.title}</h3>
            <p class="item-price">${singleItem.price}$</p>
        </div>
        <div class="item-underline">

        </div>
        <div class="item-text">
        ${singleItem.desc}
            </div>
    </div>

</div>
    `
  })
  finalmenu.join("")
  menuContainer.innerHTML=finalmenu
})


biryanibtn.addEventListener("click",function(){
  var finalmenu=menu.map(function(singleItem){
    if(singleItem.category=="biryani"){
      return `
      <div class="item">
    <img src="${singleItem.img}" alt="biryani" class="item-img">
    <div class="details">
        <div class="namePrice">
            <h3 class="item-name">${singleItem.title}</h3>
            <p class="item-price">${singleItem.price}$</p>
        </div>
        <div class="item-underline">

        </div>
        <div class="item-text">
        ${singleItem.desc}
            </div>
    </div>

</div>
      `
    }
  })
  finalmenu.join("")
  
  menuContainer.innerHTML=finalmenu
})

cakebtn.addEventListener("click",function(){
  var finalmenu=menu.map(function(singleItem){
    if(singleItem.category=="cake"){
      return `
      <div class="item">
    <img src="${singleItem.img}" alt="biryani" class="item-img">
    <div class="details">
        <div class="namePrice">
            <h3 class="item-name">${singleItem.title}</h3>
            <p class="item-price">${singleItem.price}$</p>
        </div>
        <div class="item-underline">

        </div>
        <div class="item-text">
        ${singleItem.desc}
            </div>
    </div>

</div>
      `
    }
  })
  finalmenu.join("")

  menuContainer.innerHTML=finalmenu
})



coolbtn.addEventListener("click",function(){
  var finalmenu=menu.map(function(singleItem){
    if(singleItem.category=="icecream"){
      return `
      <div class="item">
    <img src="${singleItem.img}" alt="biryani" class="item-img">
    <div class="details">
        <div class="namePrice">
            <h3 class="item-name">${singleItem.title}</h3>
            <p class="item-price">${singleItem.price}$</p>
        </div>
        <div class="item-underline">

        </div>
        <div class="item-text">
        ${singleItem.desc}
            </div>
    </div>

</div>
      `
    }
  })
  finalmenu.join('')
  
  menuContainer.innerHTML=finalmenu
})
