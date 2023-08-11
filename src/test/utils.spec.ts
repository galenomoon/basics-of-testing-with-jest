import { toUpperCase } from "../app/utils"

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
})

