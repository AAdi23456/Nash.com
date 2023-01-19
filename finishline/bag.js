let temp = JSON.parse( localStorage.getItem('visited'));
let imagg=document.getElementById('imagee')
let price=document.getElementById('pp3')
let name=document.getElementById('hh3')
let app=document.getElementById('app')
let cart=document.getElementById('cart')
let count=0
for(let i=0;i<temp.length;i++){
    let div=document.createElement('div')
    let pr=document.createElement('p')
    pr.append(temp[i].pricee)
    let na=document.createElement('h3')
   na.append(temp[i].namee)
   let im=document.createElement('img')
   im.src=temp[i].image
div.append(im,na,pr)
app.append(div)
count++
cart.innerText=count
}

