async function component() {
    const element = document.createElement('div');
    const { default: _ } = await import('lodash');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.onclick = function(){
        this.innerHTML= Math.random();
        console.log(this);
    }
    return element;
}
component().then(res=>{
   document.body.appendChild(res); 

})

