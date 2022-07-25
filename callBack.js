
// a callback function is pass as a perameter into another function and call inside the outer function.
function greetings (name) {
    console.log('Good Morning ' + name) 
}

function greetingsDeliver (greetings) {
    const name = 'JavaScript';
    greetings(name)
}
greetingsDeliver(greetings)

