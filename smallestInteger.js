function solution(A) {
  B = A.reduce((a, b) => {
    console.log("a->", a);
    if (b < 0) {
      console.log("b->", b);
      return a;
    }
    a[b] = b;
    return a
  }, [])
  console.log("B", B)
  if (B.length === 0) {
    return 1;
  }
  for (let i = 1; i < B.length; i++) {
    if (!(B[i])) {
      return i;
    }
  }
  return B.length;

}

console.log(solution([-1, 3, 6, 4, 1, 2]))

