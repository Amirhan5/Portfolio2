

function box3() {
    items.map(item =>{
        document.querySelector(".box3").innerHTML += `
        <div class="box3_minibox1">
        <img src="${item.img}" alt="">
        <p>${item.name}</p>
        <p style="margin-top: 0;">${item.kg}</p>
        <div class = "btm1">
        <p style="margin-top:2vw;">${item.many}</p>
        <button onclick="shop()">+</button>  
        </div>
    </div>
        
        `})

}

box3()


function box4() {
    items1.map(item =>{
        document.querySelector(".box4").innerHTML += `
        <div class="box3_minibox1">
        <img src="${item.img}" alt="">
        <p>${item.name}</p>
        <p style="margin-top: 0;">${item.kg}</p>
        <div class = "btm1">
        <p style="margin-top:2vw;">${item.many}</p>
        <button onclick="shop()">+</button>  
        </div>
    </div>
        
        `})

}

box4()

function box5() {
    items1.map(item =>{
        document.querySelector(".box5").innerHTML += `
        <div class="box3_minibox1">
        <img src="${item.img}" alt="">
        <p>${item.name}</p>
        <p style="margin-top: 0;">${item.kg}</p>
        <div class = "btm1">
        <p style="margin-top:2vw;">${item.many}</p>
        <button onclick="shop()">+</button>  
        </div>
    </div>
        
        `})

}
box5()
