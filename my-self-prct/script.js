function blurEffectOnImage(){
    var img = document.querySelector("#rhero img")
var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
btn1.addEventListener("mousemove",function(){
   img.style.filter = "blur(0px)"

})

btn1.addEventListener("mouseleave",function(){
    img.style.filter = "blur(3px)"
})
    
btn2.addEventListener("mousemove",function(){
        img.style.filter = "blur(0px)"
})
     
btn2.addEventListener("mouseleave",function(){
         img.style.filter = "blur(3px)"
})

img.addEventListener("mousemove",function(){
    img.style.filter = "blur(0px)"
})
 
img.addEventListener("mouseleave",function(){
     img.style.filter = "blur(3px)"
})

}

blurEffectOnImage()

function blurEffectOnImageByHoverNav(){

    var nav = document.querySelector("#a1")
    var img = document.querySelector("#rhero img")
    nav.addEventListener("mousemove",function(){
         img.style.filter = "blur(0px)"
        
    })
    nav.addEventListener("mouseleave",function(){
        img.style.filter = "blur(100px)"
   })


  

}
blurEffectOnImageByHoverNav()