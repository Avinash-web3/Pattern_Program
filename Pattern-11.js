const width = 10; 
for (let i = width; i > 0; i--) {
  pattern = '';
  for (let j = 1; j <= width; j++){
     pattern += i + " "
  }
   
  console.log(pattern);
}
