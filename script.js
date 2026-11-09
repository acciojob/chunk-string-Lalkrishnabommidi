
function chunkString(str, size) {
    if (str === null) {
        return [];
    }

    let result = [];

    for (let i = 0; i < str.length; i += size) {
        result.push(str.slice(i, i + size));
    }

    return result;
}

console.log(chunkString("Hello, world!", 5));
console.log(chunkString("12345", 2));
console.log(chunkString("abc", 5));
