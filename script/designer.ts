import p5 from 'p5';

new p5((s) => {
  const grid = 240;
  const gf = 0.5;

  s.setup = () => {
    s.createCanvas(3170, 2490);
  };

  s.draw = () => {
    s.background(67, 83, 143);
    s.stroke(255);
    const d = s.frameCount;
    const dg = Math.floor(d / grid);
    s.translate(-d, -d);
    s.strokeWeight(1);
    for (let x = dg - 1; x < dg + 2 + s.width / grid; ++x) {
      for (let y = dg - 1; y < dg + 2 + s.height / grid; ++y) {
        const ox = s.noise(x, y, 1) * grid * gf;
        const oy = s.noise(x, y, 2) * grid * gf;

        const connectLeft = s.noise(x, y, 4) > 0.25;
        const connectTop = s.noise(x, y, 5) > 0.25;
        const connectLT = y % 2 === 0 && s.noise(x, y, 6) > 0.5;
        const connectRT = y % 2 === 1 && s.noise(x, y, 6) > 0.5;

        if (connectLeft) {
          const lox = s.noise(x - 1, y, 1) * grid * gf;
          const loy = s.noise(x - 1, y, 2) * grid * gf;
          s.line(
            x * grid + ox + (y % 2 ? grid / 2 : 0),
            y * grid + oy,
            (x - 1) * grid + lox + (y % 2 ? grid / 2 : 0),
            y * grid + loy,
          );
        }
        if (connectTop) {
          const tox = s.noise(x, y - 1, 1) * grid * gf;
          const toy = s.noise(x, y - 1, 2) * grid * gf;
          s.line(
            x * grid + ox + (y % 2 ? grid / 2 : 0),
            y * grid + oy,
            x * grid + tox + ((y - 1) % 2 ? grid / 2 : 0),
            (y - 1) * grid + toy,
          );
        }
        if (connectLT) {
          const ltox = s.noise(x - 1, y - 1, 1) * grid * gf;
          const ltoy = s.noise(x - 1, y - 1, 2) * grid * gf;
          s.line(
            x * grid + ox + (y % 2 ? grid / 2 : 0),
            y * grid + oy,
            (x - 1) * grid + ltox + ((y - 1) % 2 ? grid / 2 : 0),
            (y - 1) * grid + ltoy,
          );
        }
        if (connectRT) {
          const rtox = s.noise(x + 1, y - 1, 1) * grid * gf;
          const rtoy = s.noise(x + 1, y - 1, 2) * grid * gf;
          s.line(
            x * grid + ox + (y % 2 ? grid / 2 : 0),
            y * grid + oy,
            (x + 1) * grid + rtox + ((y - 1) % 2 ? grid / 2 : 0),
            (y - 1) * grid + rtoy,
          );
        }
      }
    }

    s.textSize(80);
    s.textAlign(s.CENTER, s.CENTER);
    s.fill(67, 83, 143);
    s.strokeWeight(7);
    for (let x = dg - 1; x < dg + 2 + s.width / grid; ++x) {
      for (let y = dg - 1; y < dg + 2 + s.height / grid; ++y) {
        const ox = s.noise(x, y, 1) * grid * gf;
        const oy = s.noise(x, y, 2) * grid * gf;
        const t = '❤★▲'.charAt(Math.floor(s.noise(x, y, 3) * 3));
        s.text(t, x * grid + ox + (y % 2 ? grid / 2 : 0), y * grid + oy);
      }
    }
  };
}, document.querySelector('.monitor.designer'));
