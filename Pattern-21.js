const width = 10; 

for ( i = 1 ; i <= width ; i++){
  pattern = ' ';
  for ( j = 1; j < i; j++){
    pattern += (j + ' ');
  }
  console.log(pattern);
}
