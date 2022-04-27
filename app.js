const items=document.querySelectorAll(".menuItem");
const wrapper=document.querySelector(".sliderwrapper");

items.forEach((item,index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform=`translateX(${index * -100}vw)`;
        
    });
})