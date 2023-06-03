const width = 10; 
pattern = '';
for (let i = width; i > 0; i--) {
    pattern += i + " "
}
for (let j = 1; j <= width; j++){
  console.log(pattern);
}
