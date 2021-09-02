import _ from 'lodash';
function component() {
    const element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = "__**手动阀===手动阀__"
    element.classList.add('he')
    return element;
}
document.body.appendChild(component());
