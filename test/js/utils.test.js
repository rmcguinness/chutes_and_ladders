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

import * as utils from "../../src/js/model/utils"
import { Die } from "../../src/js/model/die"
import exp from "constants"

describe('Test Utilities', () => {
  const D6 = new Die(6)
  const D4 = new Die(4)

  test('Generate Random Number', () => {
    for (let i = 0; i<100; i++) {
      const r = utils.generateRandomNumber(2);
      expect(r).toBeLessThanOrEqual(2);
      expect(r).toBeGreaterThanOrEqual(1);
    }
  })

  describe('Test single die', () => {
    test('Roll dice', () => {
      let r = utils.rollDice(D6)
      expect(r).toBeTruthy()
      expect(r.length).toBe(1)
      expect(r[0]).toBeGreaterThanOrEqual(1)
      expect(r[0]).toBeLessThanOrEqual(D6.sides) 
    })

    test('Roll single dice multipe times', () => {
      const r = utils.rollSingleDiceMultipleTimes(10, D6);
      expect(r).toBeTruthy()
      expect(r.length).toBe(10)
      for (let i=0; i<r.length; i++) {
        expect(r[i]).toBeGreaterThanOrEqual(1)
        expect(r[i]).toBeLessThanOrEqual(D6.sides) 
      }
    })

    test('Roll single dice multiple times and sum', () => {
      const r = utils.rollSingleDiceMultipleTimesAndSum(2, D6)
      expect(r).toBeTruthy()
      expect(r.rollValues.length).toBe(2)
      expect(r.sum).toBeTruthy()
    })
  })

  
  describe('Multiple Dice', () => {
    test('Role multiple dice, multiple times', () => {
      const d = Array.of(D6)
      const r = utils.rollMultipleDiceMultipleTimes(2, d)
      expect(r).toBeTruthy()
      expect(r.length).toBe(2);
      expect(r[0][0]).toBeTruthy();
    })

    test('Roll multipe dice and sum', () => {
      const d = [];
      d.push(D4)
      d.push(D6)
      const r = utils.rollMultipleDiceAndSum(d)
      expect(r).toBeTruthy();
      expect(r.rollValues.length).toBe(2)
      expect(r.sum).toBeTruthy()
    })

  })

  
})