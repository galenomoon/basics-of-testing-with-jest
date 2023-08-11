import { toUpperCase } from "../app/utils"

describe('Utils test suite', () => {
   it('should return uppercased string', ()=>{
    const result = toUpperCase('abc')
    expect(result).toBe('ABC')
   })
})