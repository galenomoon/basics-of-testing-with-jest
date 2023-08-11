import { toUpperCase, getStringInfo } from "../app/utils"

describe('Utils test suite', () => {

  // Structure of a properly written unit test:
  //   AAA principles: [arrange, act, assert]
  //   We have also Setup and Teardown, but we're gonna cover them in the future
  it('should return uppercase of valid string', () => {
    // arrange:
    const sut = toUpperCase; // System under test
    const expected = 'ABC'

    // act
    const actual = sut('abc')

    // assert
    expect(actual).toBe(expected);
  })

  it.only('should return info for a valid string', () => {
    const actual = getStringInfo('Galeno')

    // When we're working with primitive types,
    //  we'll be using toBe() as the matcher operation
    expect(actual.lowerCase).toBe('galeno')

    // When we're NOT working with primitive types (objects, arrays, etc),
    // we'll be using toEqual() as the matcher operation
    expect(actual.extraInfo).toEqual({})

    expect(actual.characters.length).toBe(6)
    expect(actual.characters).toHaveLength(6) // Cleaner version

    expect(actual.characters).toEqual(['G', 'a', 'l', 'e', 'n', 'o'])
    expect(actual.characters).toContain<string>('G') // Cleaner version

    expect(actual.characters).toEqual(expect.arrayContaining(['l', 'e', 'n', 'o', 'G', 'a']))

    expect(actual.extraInfo).not.toBe(undefined)
    expect(actual.extraInfo).not.toBeUndefined()
    expect(actual.extraInfo).toBeDefined()
    expect(actual.extraInfo).toBeTruthy()

  })
})