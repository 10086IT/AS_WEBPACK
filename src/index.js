function component() {
    const element = document.createElement('div');

    element.innerHTML = '听音乐'; 
    element.onclick = (e)=>{
        element.innerHTML= Math.random();
        console.log(this);
        console.log(e);
    }
    return element;
}
document.body.appendChild(component()); 

