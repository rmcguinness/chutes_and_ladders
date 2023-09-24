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


import { rollMultipleAndSum, rollMultipleDiceMultipleTimes } from "../../src/js/model/utils";
import {Die} from "../../src/ts/model/die";

test('Sprint 1, Story 2: Dice Roll Test', () => {
  const d6 = new Die(6)
  for (let i=0;i<100;i++) {
    const result = d6.roll();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(d6.sides);
  }
})

test('Sprint 1, Story 4', () => {
  const d6 = new Die(6);
  const d10 = new Die(10);
  expect(d6.sides).toBe(6);
  expect(d10.sides).toBe(10);
  expect(d6.sides).toBeLessThan(d10.sides);
  expect(d6.roll()).toBeTruthy();
  expect(d10.roll()).toBeTruthy();
})

test('Sprint 1, Story 5: Roll a single dice muliple times and sum values', () => {
  const d6 = new Die(6);
  rollMultipleAndSum()
})



