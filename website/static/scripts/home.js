// animating the buttons 

const navslide= () => {
    const burger = document.querySelector(".burger");
    const tabs = document.querySelector(".tabs");

    burger.addEventListener('click', ()=>{
        tabs.classList.toggle('tabs-active');
    });
}

navslide();
