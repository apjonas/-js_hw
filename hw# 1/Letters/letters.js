function letters() {
    var vowels_list = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я",
        "А", "О", "И", "Е", "Ё", "Э", "Ы", "У", "Ю", "Я"];
    var vowels_counter = 0;
    var result = document.getElementById('result')
    var vovels_field = document.getElementById("vowels_field").value;
    for(var i = 0; i < vovels_field.length; i++) {
        for(var v = 0; v < vowels_list.length; v++) {
            if( vovels_field[i] === vowels_list[v] ) vowels_counter++;
        }
        console.log(vowels_counter);
    }
    result.value = vowels_counter
}