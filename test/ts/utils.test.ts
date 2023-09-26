// Copyright 2023 Ryan McGuinness
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import utils from '../../src/ts/model/utils'
import { Die } from '../../src/ts/model/die'

describe('Test Utils', () => {
  const D4 = Die(4);
  const D6 = Die(6);

  test('test random number function', () => {
    for (let i=0;i<100;i++) {
      const r = utils.GenerateRandomNumber(2);
      expect(r).toBeGreaterThanOrEqual(1);
      expect(r).toBeLessThanOrEqual(2);
    }
  })

  describe('Single die', () => {
    test('Roll dice', () => {
      const r = utils.RollDice(Array.of(D6))
      expect(r).toBeTruthy()
      expect(r.length).toBe(1);
    })

    test('Roll multiple times', () => {
      const r = utils.RollSingleDiceMultipleTimes(2, D6)
      expect(r).toBeTruthy()
      expect(r.length).toBe(2)
      expect(r[0]).toBeTruthy()
    })

    test('Roll and sum', () => {
      const r = utils.RollSingleDiceMultipleTimesAndSum(2, D6)
      expect(r).toBeTruthy()
      expect(r.rolledValues).toBeTruthy()
      expect(r.sum).toBeTruthy()
      expect(r.rolledValues.length).toBe(2)
    })
  })

  describe('Test miltiple', () => {

    test('Multiple and sum', () => {
      const r = utils.RollMultipleDiceAndSum(Array.of(D4, D6))
      expect(r).toBeTruthy()
      expect(r.rolledValues).toBeTruthy()
      expect(r.rolledValues.length).toBe(2)
      expect(r.sum).toBeTruthy()
    })

    test('Multi roll, multi sum', () => {
      const r = utils.RollMultipleDiceMultipleTimes(2, Array.of(D4, D6))
      expect(r).toBeTruthy()
      expect(r.length).toBe(2)
      expect(r[0].length).toBe(2)
    })
  })

  

})

