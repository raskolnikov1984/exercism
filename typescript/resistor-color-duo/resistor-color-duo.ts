export function decodedValue(colors: string[]) {

  if (colors.length < 2) {
    throw new Error('At least two colors are required');
  }

  const firstColorValue = COLORS.indexOf(colors[0]);
  const secondColorValue = COLORS.indexOf(colors[1]);

  // Combine the two values: first digit * 10 + second digit
  return (firstColorValue * 10) + secondColorValue;
}

const COLORS: string[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
