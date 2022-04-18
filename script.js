document.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop<500){
        document.getElementById("top").style.display="none";
    }
    else{
        document.getElementById("top").style.display="block";
    }
})

document.getElementById("top").addEventListener("click",()=>{
    window.scrollTo(0,0);
})
