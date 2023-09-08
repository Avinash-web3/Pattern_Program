let width = 10;

for ( let i = 1; i <= width; i++){
  let pattern = ''
  for (let j = 1; j <= i; j++){
    pattern += (i - j + 1) +(' ');
  }
  console.log(pattern);
}
