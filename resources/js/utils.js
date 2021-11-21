export const generateSampleSeries = () => {
  let data = [];

  let y = Math.random() * 1000 + 1;
  for (let x = 0; x < 100; x++) {
    data.push([x, y.toFixed(2)]);
    y += (Math.random() - 0.5) * 100;
    if (y < 0) y = 0;
  }

  return [
    {
      name: "Beispiel",
      data: data,
    },
  ];
};
