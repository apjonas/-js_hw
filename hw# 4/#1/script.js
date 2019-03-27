var states = {
    'AL' : 'Alabama',
    'AK' : 'Alaska',
    'AS' : 'American',
    'AZ' : 'Arizona',
    'AR' : 'Arkanzas',
    'CA' : 'California',
    'CO' : 'Colorado',
    'CT' : 'Connecticut',
    'DE' : 'Delaware'
}
var replace = {};
Object.keys(states).forEach(state => {
    replace[states[state]] = state;
})
console.log(replace);