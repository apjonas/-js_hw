var triangle = function() {
    var parts = [].slice.call(arguments, 0, 3).sort();
    if (parts[0] + parts[1] <= parts[2]) {
        return 'Такого типа треугольника не существует!';
    }
    var total = (Math.pow(parts[0], 2) + Math.pow(parts[1], 2)).toFixed(2);
    var side = Math.pow(parts[2], 2).toFixed(2);
    if (total === side) {
        return 'Прямоугольный треугольник!';
    }
    if (total < side) {
        return 'Тупоугольный треугольник!';
    }
    if (total > side) {
        return 'Остроугольный треугольник!';
    }
};