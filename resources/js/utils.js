export const generateSampleSeries = (name) => {
  let data = [];

  let y = Math.random() * 1000 + 1;
  for (let x = 100; x > 0; x--) {
    const time = new Date().getTime() - 1000 * 60 * x;
    data.push([time, y.toFixed(2)]);
    y += (Math.random() - 0.5) * 100;
    if (y < 0) y = 0;
  }

  return [
    {
      name: name,
      data: data,
    },
  ];
};
