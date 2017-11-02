function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

if (storageAvailable('localStorage')) {
  console.log("funciona le almacenamiento local");
}
else {
  console.log("NO funciona le almacenamiento local");
}


function cambiarColor(color) {
  if(color=='rojo') {
    localStorage.colorSetting = 'red';
    document.querySelector('body').setAttribute("style", "background-color:red;");
  } else if(color=='verde'){
    localStorage.colorSetting = 'green';
    document.querySelector('body').setAttribute("style", "background-color:green;");
  } else {
    localStorage.colorSetting = 'blue';
    document.querySelector('body').setAttribute("style", "background-color:blue;");
  }

}

let color = localStorage.getItem('colorSetting');
color = "background-color:"+color;
document.querySelector('body').setAttribute("style", color);
