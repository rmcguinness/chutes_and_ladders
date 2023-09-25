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


import { Die } from '../../src/js/model/die'
import { rollSingleDiceMultipleTimesAndSum, rollSingleDiceMultipleTimes } from '../../src/js/model/utils'
import {describe, expect, test} from '@jest/globals';

describe('Iteration 1 test', () => {
  describe('Single die', () => {
    const d6 = new Die(6);
    const minLoops = 10;
    const maxLoops = 100;

    test('High-Low', () => {
      for (let i=0;i<maxLoops; i++) {
        let rollValue = d6.roll()
        expect(rollValue).toBeGreaterThanOrEqual(1);
        expect(rollValue).toBeLessThanOrEqual(d6.sides);
      }
    });

    test('', () => {
      const values = rollSingleDiceMultipleTimes(3, d6);
      expect(values).toBeTruthy()
      expect(values.length).toBe(3)
      for (let i = 0; i<values.length; i++) {
        expect(values[i]).toBeGreaterThanOrEqual(1)
        expect(values[i]).toBeLessThanOrEqual(d6.sides)
      }
    })


    test('Summing roll', () => {
      const values = rollSingleDiceMultipleTimesAndSum(10, d6);
      expect(values).toBeTruthy();
      expect(values.rollValues).toBeTruthy();
      expect(values.sum).toBeTruthy();
      for (let i = 0; i<values.rollValues.length; i++) {
        expect(values.rollValues[i]).toBeGreaterThanOrEqual(1)
        expect(values.rollValues[i]).toBeLessThanOrEqual(d6.sides)
      }
    });

  })

});