const butt=document.querySelectorAll(".butt");
const body=document.querySelector("body");

butt.forEach((but)=>{
    but.addEventListener('click',(e)=>{
        
        // console.log(e.target.id)
        
        
        if(e.target.id==='gray'){
            body.style.backgroundColor=e.target.id;
        }
        
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id;
        }
        
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
        }
        
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }
        
        if(e.target.id==='red'){
            body.style.backgroundColor=e.target.id;
        }
    });
});