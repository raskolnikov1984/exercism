export function toRna(nucleotides: string) {
  return nucleotides.split("").map(nucleotide => {
    const core = RnaTransciption[nucleotide as keyof typeof RnaTransciption];
    if (!core) {
      throw new Error("Invalid input DNA.");
    }

    return core;
  }).join("");
}

export enum RnaTransciption {
  C = 'G',
  G = 'C',
  A = 'U',
  T = 'A'
}
