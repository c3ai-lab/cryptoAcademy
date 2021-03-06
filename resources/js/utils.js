import { ComponentState } from "./enums";

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

export const enumKeyToRouteParam = (key) =>
  key.toLowerCase().replaceAll("_", "-");
export const routeParamToEnumKey = (key) =>
  key.toUpperCase().replaceAll("-", "_");

export const dispatchAll = async (component, ...actions) => {
  const results = await Promise.all(
    actions.map((v) => {
      if (typeof v === "string") return component.$store.dispatch(v);
      else return component.$store.dispatch(v[0], v[1]);
    })
  );
  return results.filter((v) => v === false).length === 0
    ? ComponentState.READY
    : ComponentState.ERROR;
};
