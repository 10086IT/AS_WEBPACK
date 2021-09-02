function component() {
    return import('lodash').then(({default:_})=>{
    const element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join([1,2,3,4,4],'**');
    return element;
    }).catch((err)=>{
        alert(err);
    })
}
component().then(res=>{
   document.body.appendChild(res); 
})

