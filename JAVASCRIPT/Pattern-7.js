const width = 10; 

for (let i = 1; i <= width; i++) {
  let pattern = '';
  for (let j = 1; j <= width; j++) {
    pattern += i + ' ';
  }
  console.log(pattern);
}
