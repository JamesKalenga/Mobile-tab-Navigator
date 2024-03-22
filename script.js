const bg_img = document.querySelector('.img')
const nv_icns = document.querySelectorAll('.nav-icons')

nv_icns.forEach((e)=>{
    e.addEventListener('click', ()=>{
        if (e.innerHTML.includes('house')){
            bg_img.style.backgroundImage = "url(/img/1.jpg)";
        }
        if (e.innerHTML.includes('briefcase')){
            bg_img.style.backgroundImage = "url(/img/2.jpg)";
        }
        if (e.innerHTML.includes('reader')){
            bg_img.style.backgroundImage = "url(/img/3.jpg)";
        }
        if (e.innerHTML.includes('address')){
            bg_img.style.backgroundImage = "url(/img/4.jpg)";
        }
        
      
    })
})