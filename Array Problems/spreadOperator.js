const featured = [
  {
    name: "slider 1",
    slider: ["A", "B", "C"],
  },
  {
    name: "slider 2",
    slider: ["A", "B", "C"],
  },
  {
    name: "slider 3",
    slider: ["A", "B", "C"],
  },
];

const newOb = {
  name: "slider 3",
  slider: ["K", "L", "M"],
};

console.log(
  (featured[2] = {
    ...featured[2],
    slider: newOb,
  })
);
