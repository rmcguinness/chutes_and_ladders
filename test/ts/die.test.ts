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


import {Die} from "../../src/ts/model/die";
import utils from "../../src/ts/model/utils";

describe('Sprint 1 tests', () => {

  test('Story 2: Dice Roll Test, at least 100 times and verifying that the value is >= 1 and <= 6.', () => {
    const d6 = new Die(6)
    for (let i=0;i<100;i++) {
      const result = d6.roll();
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(d6.sides);
    }
  })
  
  test('Story 4: Test all methods on the Die class.', () => {
    const d6 = new Die(6);
    const d10 = new Die(10);
    expect(d6.sides).toBe(6);
    expect(d10.sides).toBe(10);
    expect(d6.sides).toBeLessThan(d10.sides);
    expect(d6.roll()).toBeTruthy();
    expect(d10.roll()).toBeTruthy();
  })
  
  test('Story 5: Roll a single dice muliple times and sum values.', () => {
    const d6 = new Die(6);
    for (let i=0;i<10;i++) {
      var summed = utils.RollSingleDiceMultipleTimesAndSum(i, d6)
      expect(summed.rolledValues.length).toEqual(i)
      expect(summed.sum).toBeGreaterThanOrEqual(i)
      expect(summed.sum).toBeLessThanOrEqual(i*d6.sides);
    }
  })
  
  test('Story 6: Roll mixed dice, a 4 and 6 sided die', () => {
    const d4 = new Die(4);
    const d6 = new Die(6);
  
    for (let i=0; i<100; i++) {
      const value = utils.RollMultipleDiceAndSum([d4, d6])
      expect(value.rolledValues.length).toBe(2);
      expect(value.sum).toBeGreaterThanOrEqual(2);
      expect(value.sum).toBeLessThanOrEqual(10);
    }
  })

  test('Story 7', () => {
    console.log(`
    I believe a single eight sided dice is the right setup for a 100 space board with traps.
    to reach a maximum of 20 minute play time.`);
  })
})
