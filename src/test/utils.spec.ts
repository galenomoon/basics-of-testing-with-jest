import { toUpperCase, getStringInfo, StringUtils } from "../app/utils"

describe('Utils test suite', () => {


  describe('StringUtils tests', () => {

    let sut: StringUtils

    // setup!
    beforeEach(() => {
      sut = new StringUtils()
      console.log('Setup')
    })

    // beforeAll(() => 'TEST-DATABASE Connection!')
    // afterAll(() => 'TEST-DATABASE Teardown!')

    // teardown!
    afterEach(() => {
      // clearing mocks or the test.db
      console.log('Teardown')
    })

    it.todo('Some test that I have to do')

    it('Should return correct uppercase', () => {
      const expected = 'ABC'
      const actual = sut.toUpperCase('abc')
      expect(actual).toBe(expected)
      console.log('Test')
    })

    describe('Testing for errors', () => {
      it('Should throw error on invalid argument | function', () => {
        function expectedError() {
          return sut.toUpperCase('')
        }
        expect(expectedError).toThrow()
        expect(expectedError).toThrowError('Invalid argument')
      })

      it('Should throw error on invalid argument | arrow function', () =>
        expect(() => sut.toUpperCase('')).toThrowError('Invalid argument')
      )

      it('Should throw error on invalid argument | try catch', (done) => { //3. I need this...
        try {
          sut.toUpperCase('') //2.  success
          done("Error on try if it doesn't to be like I expect") //4. create a new error msg
        } catch (error) {  //1. that's not the better way to tests some Error!!!!
          expect(error).toBeInstanceOf(Error)
          expect(error).toHaveProperty('message', 'Invalid argument') //2. success too :/
          done() // 5. then put here so.. that's not good (I think)
        }
      })
    })
  })


  describe('Learning AAA Principles', () => {

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

    it('should return info for a valid string', () => {
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

  describe("Multiple Tests Structure | getStringInfo for arg 'Galeno' should", () => {
    test('return right length', () => {
      const actual = getStringInfo('Galeno')
      expect(actual.characters).toHaveLength(6)
    })

    test('return right lower case', () => {
      const actual = getStringInfo('Galeno')
      expect(actual.lowerCase).toBe('galeno')
    })

    test('return right upper case', () => {
      const actual = getStringInfo('Galeno')
      expect(actual.upperCase).toBe('GALENO')
    })

    test('return right characters', () => {
      const actual = getStringInfo('Galeno')

      expect(actual.characters).toEqual(['G', 'a', 'l', 'e', 'n', 'o'])
      expect(actual.characters).toContain<string>('G') // Cleaner version

      expect(actual.characters).toEqual(expect.arrayContaining(['l', 'e', 'n', 'o', 'G', 'a']))
    })

    test('return defined extra info', () => {
      const actual = getStringInfo('Galeno')
      expect(actual.extraInfo).toBeDefined()
    })

    test('return right extra info', () => {
      const actual = getStringInfo('Galeno')
      expect(actual.extraInfo).toEqual({})
    })
  })

  describe('Parametrized tests | toUpperCase examples', () => {
    it.each([
      { input: 'abc', expected: 'ABC' },
      { input: 'Galeno', expected: 'GALENO' },
    ])('$input toUpperCase should be $expected', ({ input, expected }) => {
      const actual = toUpperCase(input)

      expect(actual).toBe(expected)
    })
  })
})