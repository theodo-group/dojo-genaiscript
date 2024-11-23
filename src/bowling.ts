// Bowling score calculator
const calc = (p: number[]): number => {
  let scr = 0;
  let i = 0;
  let f = 1;

  while (f <= 10 && i < p.length) {
    let t1 = p[i];
    let t2 = 0;
    let xtr = 0;

    if (t1 === 10) {
      if (i + 2 < p.length) {
        xtr = p[i + 1] + p[i + 2];
      }
      i++;
    } else {
      if (i + 1 < p.length) {
        t2 = p[i + 1];
        if (t1 + t2 === 10) {
          if (i + 2 < p.length) {
            xtr = p[i + 2];
          }
        }
      }
      i += 2;
    }

    scr += t1 + t2 + xtr;
    f++;
  }

  return scr;
};

const tst = [10, 7, 3, 9, 0, 10, 0, 8, 8, 2, 0, 6, 10, 10, 10, 8, 1];
const rslt = calc(tst);
console.log("fnl scr:", rslt);
