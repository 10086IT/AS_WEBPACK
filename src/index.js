import _ from 'lodash';
import './css.css'
import ImageA from './a.PNG'
function component() {
    const element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], '*_*');
    element.classList.add('he')
    const myImg = new Image(400,400);
    myImg.src=ImageA;
    element.appendChild(myImg);
    return element;
}

document.body.appendChild(component());
