const width = 10; 
pattern = '';
for (let i = width; i > 0; i--) {
    pattern += String.fromCharCode(64 + i)+ " "
}
console.log(pattern);
