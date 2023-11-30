
btton.onclick=()=>{
    
    const para = document.createElement("div");
    para.id='list'
    const paragr = document.createElement("p");
    paragr.id='paragr'
    const divimg = document.createElement("div");
    const delicon=document.createTextNode("\u00D7")

  divimg.id='delete';
    var deleteicon=document.getElementById('deleteicon')
 
    divimg.onclick=()=>{
        console.log("click")
        para.remove();
    }
    para.appendChild(paragr)
    para.appendChild(divimg)
    divimg.appendChild(delicon)



paragr.innerText =txt.value ;
// para.style.height='2rem'
document.body.appendChild(para);
}
