
let botones = ["elemento","elementosss"];
var variables = Array();

botones.forEach(function(v){
    let elem = document.getElementById(v);
    elem.addEventListener('click', function(e) {
        alert(e.srcElement.id);
    });
    variables.push(elem);
});
