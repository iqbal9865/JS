function greetings (name) {
    console.log('Good Morning ' + name) 
}

function greetingsDeliver (greetings) {
    const name = 'JavaScript';
    greetings(name)
}
greetingsDeliver(greetings)

// a callback function is pass as a perameter into another function and call inside the function.