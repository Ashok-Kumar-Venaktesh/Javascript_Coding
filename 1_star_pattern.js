let N = 15;

for (let i = 0; i < N; i++) {
  let pattern = "";
  for (let j = 0; j < N; j++) {
    // pattern = pattern + "*";
    pattern = pattern + (j + 1).toString() + " ";
  }
  console.log(pattern);
}
