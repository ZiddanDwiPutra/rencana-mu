function select(className){
    return $(className)
}

function getSomething(className , prop){
    return select(className)[0][prop];
}

function getValue(className){
   return select(className).value;
}

function setSomething(className , prop, value){
    return select(className)[0][prop] = value;
}

function setValue(className, value){
   return select(className).value = value;
}

var main = {
    loading: {
        active: ()=>{
            select('.loading-el').fadeIn(1000);
        },
        nonActive: ()=>{
            select('.loading-el').fadeOut(100);
        }
    },
    startParam: (strParamName , strVal)=>{
        return "?".concat(strParamName, "=", strVal);
    },
    createParam: (strParamName , strVal)=>{
        return "&".concat(strParamName, "=", strVal);
    }
}

var allServices = {
    saveNotes: (data, onSuccess)=>{
        return POST("notesBack.php".concat(main.startParam('path', 'save')), data, onSuccess);
    }
}