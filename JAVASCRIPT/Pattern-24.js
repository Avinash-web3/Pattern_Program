const width = 10;

for ( let i = 0 ; i < width; i++){
  pattern = ' '
  for ( let j = 1; j <= (width - i); j++ ){
    pattern += '* ';
  }
  console.log(pattern );
}
