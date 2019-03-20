function profile() {
    var result = document.getElementById('result');
    var inputs=document.getElementsByTagName('input');
    var arr = [];
    for (var i = 0; i < inputs.length; i++){
        arr.push(inputs[i].value);
        console.log(inputs[i].value);
    }
    result.value = arr;
}