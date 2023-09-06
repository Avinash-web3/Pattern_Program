const width = 10;

for ( let i = 1 ; i <= (width + 1); i++){
  pattern = '  '
  for ( let j = 1; j <= ((width + 1) - i); j++ ){
    pattern += (String.fromCharCode( 64 + i) + " ");
  }
  console.log(pattern );
}
