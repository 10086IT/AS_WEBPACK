import _ from 'lodash';
import print from './print.js'
function component() {
    const element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], '*_*');
    element.classList.add('he')
    element.onclick=print;
    return element;
}
print();
document.body.appendChild(component());
