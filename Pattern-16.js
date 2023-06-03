const n = 10;
let pattern = "";
for (i = 1; i <= n; i++){
  pattern += (String.fromCharCode(64 + i) + ' ');
}
for (i = 1; i <= n; i++){
 console.log(pattern);
}
