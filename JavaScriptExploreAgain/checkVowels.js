const vowels = ['A','E','I','O','U','a','e','i','o','u'];

const findVowels = (sentence) => {
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(letter => {
        if(vowels.includes(letter)) {
            count++;
        }
    })
    console.log(count)
}

findVowels("I Love Bangladesh")