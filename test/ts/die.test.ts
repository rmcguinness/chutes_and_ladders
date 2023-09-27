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


import { Die } from "../../src/ts/model/die";
import { ISummedRoll } from "../../src/ts/model/interfaces";
import utils from "../../src/ts/model/utils";


describe('Sprint 1 (Sept 2023)', () => {

  //: Dice Roll Test, at least 100 times and verifying that the value is >= 1 and <= 6.
  describe('Single Die', () => {
    const d6 = Die(6)
    test('Roll correctness', () => {
      for (let i=0;i<100;i++) {
        const result = d6.roll();
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(d6.sides());
      }
    })

    test('Roll summing', () => {
      // Story 5
      for (let i=0;i<10;i++) {
        var summed = utils.RollSingleDiceMultipleTimesAndSum(i, d6)
        expect(summed.rolledValues.length).toEqual(i)
        expect(summed.sum).toBeGreaterThanOrEqual(i)
        expect(summed.sum).toBeLessThanOrEqual(i*d6.sides());
      }
    })
  })

  describe('Multiple Dice', () => {
    // As a developer I will test my Die class to ensure that all methods work as expected.
    const d4 = Die(4);
    const d6 = Die(6);
    const d10 = new Die(10);

    test('Verfiy sides', () => {
      expect(d6.sides()).toBe(6);
      expect(d10.sides()).toBe(10);
      expect(d6.sides()).toBeLessThan(d10.sides());
    })

    test('Verify roll method', () => {
      expect(d6.roll()).toBeTruthy();
      expect(d10.roll()).toBeTruthy();
    })

    test('Mixed dice, rolled 100 times', () => {
      for (let i=0; i<100; i++) {
        const value = utils.RollMultipleDiceAndSum([d4, d6])
        console.log(value)
        expect(value.rolledValues.length).toBe(2);
        expect(value.sum).toBeGreaterThanOrEqual(2);
        expect(value.sum).toBeLessThanOrEqual(10);
      }
    })
  })
  
  test('Synopsis', () => {
    console.log(`
    I believe a single eight sided dice is the right setup for a 100 space board with traps.
    to reach a maximum of 20 minute play time.`);
  })
})


test('Mocked SummedRoll', () => {
  let MySum = {rolledValues: [1,3,5], sum: 9 } as ISummedRoll;

  // Ensure the object initialized
  expect(MySum).toBeTruthy();

  // Expect there are values
  expect(MySum.rolledValues).toBeTruthy();

  // Expect there is a sum
  expect(MySum.sum).toBeTruthy();

  // Expect the length to be 3
  expect(MySum.rolledValues.length).toBe(3);

  // Expect the sum to be 9
  expect(MySum.sum).toBe(9);

  // Expect the first value in the rolled values to be 1
  expect(MySum.rolledValues[0]).toBe(1)
})
