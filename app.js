const items=document.querySelectorAll(".menuItem");
const wrapper=document.querySelector(".sliderwrapper");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Jordan",
      price: 159,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 99,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 135,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 182,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

items.forEach((item,index) => {
    item.addEventListener("click", () => {
        //for slider
        wrapper.style.transform=`translateX(${index * -100}vw)`;

        //for product
        choosenProduct = products[index];
        currentProductImg.src = choosenProduct.colors[0].img;
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        
        currentColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
        
    });
})

currentColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
        // console.log(color)
    })
})

currentProductSizes.forEach((size) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "#fff";
            size.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "#fff";
    })
})


//Payment
const payment = document.querySelector(".payment");
const closeBtn = document.querySelector(".closeBtn");
const productBtn = document.querySelector(".productBtn");

productBtn.addEventListener("click", () => {
    payment.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    payment.style.display = "none";
});