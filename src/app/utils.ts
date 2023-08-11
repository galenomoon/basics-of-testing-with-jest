export function toUpperCase(str: string): string {
  return str.toUpperCase();
}

export type stringInfo = {
  lowerCase: string,
  upperCase: string,
  characters: string[],
  length: number,
  extraInfo: Object | undefined
}


export function getStringInfo(string: string): stringInfo{
  return {
    lowerCase: string.toLowerCase(),
    upperCase: toUpperCase(string),
    characters: Array.from(string),
    length: string.length,
    extraInfo: {}
  }
}