var item = document.getElementById('display');
var arh = document.getElementById('archiv');
var calc = document.getElementById('calc');
calc.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        item.innerText += e.target.innerText;
        if (!isNaN(e.target.value)) {
            arh.innerText += e.target.innerText + e.target.value;
        }
    }


}, false);





/*switch (e.target.value) {
    case "+":
        arh = item + '+';
        break;
    case "-":
        arh = item + '-';
        break;
}*/