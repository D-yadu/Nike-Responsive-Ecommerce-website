const wrapper=document.querySelector(".sliderWrapper")
const menuItems=document.querySelectorAll(".menuItem")

const products=[
    {
        id:1,
        title:"Air Force",
        price:6000,
        colors:[
            {
                code:"black",
                img:"./images/SliderImage1.png"
            },
            {
                code:"darkblue",
                img:"./images/air2.png"
            },
        ],
    },
    {
        id:2,
        title:"Air Jordan",
        price:7000,
        colors:[
            {
                code:"lightgray",
                img:"./images/SliderImage2.png"
            },
            {
                code:"green",
                img:"./images/jordan2.png"
            },
        ],
    },
    {
        id:3,
        title:"Blazers",
        price:5500,
        colors:[
            {
                code:"lightgray",
                img:"./images/SliderImage3.png"
            },
            {
                code:"green",
                img:"./images/blazer2.png"
            },
        ],
    },
    {
        id:4,
        title:"Crater",
        price:75000,
        colors:[
            {
                code:"black",
                img:"./images/SliderImage4.png"
            },
            {
                code:"lightgray",
                img:"./images/crater2.png"
            },
        ],
    },
    {
        id:5,
        title:"Hippie",
        price:9000,
        colors:[
            {
                code:"gray",
                img:"./images/SliderImage5.png"
            },
            {
                code:"black",
                img:"./images/hippie2.png"
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");





menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //change the current slide
        wrapper.style.transform=`translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "Rs" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assign new colors
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        })
        size.style.backgroundColor="black";
        size.style.color="white";
    });
});

const productButton = document.querySelector(".productBtn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
});

close.addEventListener("click",()=>{
    payment.style.display="none"
});