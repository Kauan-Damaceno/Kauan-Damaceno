const btnColor = document.querySelectorAll(".list-color li")
const btnColorArray = Array.from(btnColor)
const colorParentElemt = document.querySelector(".colorHoverElement")
const img = document.querySelector(".image-phone img")
let ativo = false;





btnColorArray.forEach(btn => {
    btn.addEventListener("mouseover", (e)=>{
        
        const element = e.target;
        const idFromElemt = element.getAttribute("id")  

            if (!ativo) {
                colorParentElemt.innerHTML = `-${idFromElemt}`;   
            }

       
    })

    btn.addEventListener("mouseout", (e)=>{
        if (!ativo) {
            colorParentElemt.innerHTML = ""
        }
    })

    btn.addEventListener("click", (e) => {
        const element = e.target
        const idFromElemt = element.getAttribute("id")
        const parentEment = element.parentElement;
        ativo = true
        button = idFromElemt

        btnColorArray.forEach(bt => {
            const parent = bt.parentElement;
            parent.classList.remove("ativo")
            
        })

        parentEment.classList.add("ativo")
        colorParentElemt.innerHTML = `-${idFromElemt}`

        
        img.classList.add("opaco")
        setTimeout(() => {
            img.classList.remove("opaco")
            img.src = `img/iphone_${idFromElemt}.png`
        }, 300);


    })
   

}); 





    

