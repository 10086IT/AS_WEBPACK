import _ from 'lodash';
document.body.onclick = function(){
    alert(_.join(['Another', 'module', 'loaded!'], '&^& '));
}