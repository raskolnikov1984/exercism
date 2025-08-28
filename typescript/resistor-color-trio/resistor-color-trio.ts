export function decodedResistorValue(colors: Color[]) {
  if (colors.length < 3) throw "Must be at least 3 colors";

  const [c1, c2, c3] = colors;

  const base = Number(`${ResistorColorsValues[c1]}${ResistorColorsValues[c2]}`);
  const multiplier = 10 ** ResistorColorsValues[c3];
  let resistance = base * multiplier;

  let unit = "ohms";

  if (resistance >= 1_000_000_000) {
    resistance = resistance / 1_000_000_000;
    unit = "gigaohms";
  } else if (resistance >= 1_000_000) {
    resistance = resistance / 1_000_000;
    unit = "megaohms";
  } else if (resistance >= 1000) {
    resistance = resistance / 1000;
    unit = "kiloohms";
  }

  return `${resistance} ${unit}`;
}

type Color = keyof typeof ResistorColorsValues;

export enum ResistorColorsValues {
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9
}
