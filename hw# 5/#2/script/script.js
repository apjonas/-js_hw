let from_id;
let from_display;
let from_length;
let count;
let item;
let sign;
let item_first;
let item_second;
let item_equal;
let item_delete_last;
let item_delete_send;
function numeric_0() {
    from_id = document.getElementById('number_0').innerHTML;
    from_display = document.getElementById('display').innerHTML;
    if (from_display === "0"){document.getElementById('display').innerHTML = "";}
    from_length = from_display.length;
    if(from_length > 12){alert('максимальное колличество вводимых символов: 12!');}
    document.getElementById('display').innerHTML += from_id;
    count = document.getElementById('display').innerHTML;
    count = count.length;
}
function numeric_1() {
    from_id = document.getElementById('number_1').innerHTML;
    from_display = document.getElementById('display').innerHTML;
    if (from_display === "0"){document.getElementById('display').innerHTML = "";}
    from_length = from_display.length;
    if(from_length > 12){alert('максимальное колличество вводимых символов: 12!');}
    document.getElementById('display').innerHTML += from_id;
    count = document.getElementById('display').innerHTML;
    count = count.length;
}
function numeric_2() {
    from_id = document.getElementById('number_2').innerHTML;
    from_display = document.getElementById('display').innerHTML;
    if (from_display === "0"){document.getElementById('display').innerHTML = "";}
    from_length = from_display.length;
    if(from_length > 12){alert('максимальное колличество вводимых символов: 12!');}
    document.getElementById('display').innerHTML += from_id;
    count = document.getElementById('display').innerHTML;
    count = count.length;
}
function numeric_3() {
    from_id = document.getElementById('number_3').innerHTML;
    from_display = document.getElementById('display').innerHTML;
    if (from_display === "0"){document.getElementById('display').innerHTML = "";}
    from_length = from_display.length;
    if(from_length > 12){alert('максимальное колличество вводимых символов: 12!');}
    document.getElementById('display').innerHTML += from_id;
    count = document.getElementById('display').innerHTML;
    count = count.length;
}
function numeric_4() {
    from_id = document.getElementById('number_4').innerHTML;
    from_display = document.getElementById('display').innerHTML;
    if (from_display === "0"){document.getElementById('display').innerHTML = "";}
    from_length = from_display.length;
    if(from_length > 12){alert('максимальное колличество вводимых символов: 12!');}
    document.getElementById('display').innerHTML += from_id;
    count = document.getElementById('display').innerHTML;
    count = count.length;
}
function numeric_5() {
    from_id = document.getElementById('number_5').innerHTML;
    from_display = document.getElementById('display').innerHTML;
    if (from_display === "0"){document.getElementById('display').innerHTML = "";}
    from_length = from_display.length;
    if(from_length > 12){alert('максимальное колличество вводимых символов: 12!');}
    document.getElementById('display').innerHTML += from_id;
    count = document.getElementById('display').innerHTML;
    count = count.length;
}
function numeric_6() {
    from_id = document.getElementById('number_6').innerHTML;
    from_display = document.getElementById('display').innerHTML;
    if (from_display === "0"){document.getElementById('display').innerHTML = "";}
    from_length = from_display.length;
    if(from_length > 12){alert('максимальное колличество вводимых символов: 12!');}
    document.getElementById('display').innerHTML += from_id;
    count = document.getElementById('display').innerHTML;
    count = count.length;
}
function numeric_7() {
    from_id = document.getElementById('number_7').innerHTML;
    from_display = document.getElementById('display').innerHTML;
    if (from_display === "0"){document.getElementById('display').innerHTML = "";}
    from_length = from_display.length;
    if(from_length > 12){alert('максимальное колличество вводимых символов: 12!');}
    document.getElementById('display').innerHTML += from_id;
    count = document.getElementById('display').innerHTML;
    count = count.length;
}
function numeric_8() {
    from_id = document.getElementById('number_8').innerHTML;
    from_display = document.getElementById('display').innerHTML;
    if (from_display === "0"){document.getElementById('display').innerHTML = "";}
    from_length = from_display.length;
    if(from_length > 12){alert('максимальное колличество вводимых символов: 12!');}
    document.getElementById('display').innerHTML += from_id;
    count = document.getElementById('display').innerHTML;
    count = count.length;
}
function numeric_9() {
    from_id = document.getElementById('number_9').innerHTML;
    from_display = document.getElementById('display').innerHTML;
    if (from_display === "0"){document.getElementById('display').innerHTML = "";}
    from_length = from_display.length;
    if(from_length > 12){alert('максимальное колличество вводимых символов: 12!');}
    document.getElementById('display').innerHTML += from_id;
    count = document.getElementById('display').innerHTML;
    count = count.length;
}
function clearAll() {
    document.getElementById('display').innerHTML = "0";
}
function operation_plus() {
    item = document.getElementById('display').innerHTML;
    document.getElementById('archiv').innerHTML = item + '+';
    sign = document.getElementById('display').innerHTML = '+';
}
function operation_minus() {
    item = document.getElementById('display').innerHTML;
    document.getElementById('archiv').innerHTML = item + '-';
    sign = document.getElementById('display').innerHTML = '-';
}
function operation_multiply() {
    item = document.getElementById('display').innerHTML;
    document.getElementById('archiv').innerHTML = item + '*';
    sign = document.getElementById('display').innerHTML = '*';
}
function operation_split() {
    item = document.getElementById('display').innerHTML;
    document.getElementById('archiv').innerHTML = item + '/';
    sign = document.getElementById('display').innerHTML = '/';
}
function operation_equal() {
    item_first = parseInt(document.getElementById('archiv').innerHTML);
    item_second = document.getElementById('display').innerHTML;
    item_second = parseInt(item_second.slice(1));
    if (sign === "+"){item_equal = item_first + item_second;}
    if (sign === "-"){item_equal = item_first - item_second;}
    if (sign === "*"){item_equal = item_first * item_second;}
    if (sign === "/"){item_equal = item_first / item_second;}
    document.getElementById('display').innerHTML = item_equal;
    document.getElementById('archiv').innerHTML = "";
    localStorage.setItem('result', item_equal);
}

let _local = window.localStorage;
if (_local.getItem('result')) {
    document.getElementById('archiv').innerText = _local.getItem('result');
}
function clear_local(){
    window.localStorage.clear();
}
function backSpace() {
    item_delete_last = document.getElementById('display').innerHTML;
    from_length = item_delete_last.length;
    item_delete_send = (item_delete_last.substring(0, item_delete_last.length - 1));
    if(item_delete_send){
        document.getElementById('display').innerHTML = item_delete_send;
        item = document.getElementById('display').innerHTML;
    }
}
