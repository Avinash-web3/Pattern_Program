const width = 10;

for ( let i = 1; i <= width; i++){
  pattern = ' '
  for ( let j = 1; j <= i; j++ ){
    pattern += (i+ ' ');
  }
  console.log(pattern );
}
