import _ from 'lodash';
import './css.css'
import ImageA from './a.PNG';
import Data from './data.xml';
import Notes from './data.csv';
import json from './json.json'
import toml from './toml.toml';
import yaml from './yaml.yaml';
import json5 from './json5.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json5.title); // output `JSON5 Example`
console.log(json5); // output `Tom Preston-Werner`
function component() {
    const element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack', json.data], '*_*');
    element.classList.add('he')
    const myImg = new Image(400, 400);
    myImg.src = ImageA;
    element.appendChild(myImg);
    return element;
}

console.log(Notes);
console.log(Data);
document.body.appendChild(component());
