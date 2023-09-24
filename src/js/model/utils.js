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

// Should take a number argument >= 1 and return a number value
import {SummedRoll} from "./summed_roll.js";

export const generateRandomNumber = (upperBound) => {
  return Math.floor(Math.random()*upperBound) + 1;
}

/**
 *
 * @param dice the dice to roll
 * @return number[] each dice that was rolled once.
 */
export const rollDice = (...dice) => {
  return dice.map(d => d.roll());
}

export const rollSingleDiceMultipleTimes = (count, die) => {
  return Array(count).fill(die.roll());
}

/**
 *
 * @param totalRolls the total number of times to roll
 * @param dice one or more dice
 * @return number[][] an array of values
 */
export const rollMultipleDiceMultipleTimes = (totalRolls, ...dice) => {
  const out = Array(0)
  for (let i=0;i<totalRolls;i++) {
    out.push(rollDice(dice))
  }
  return out;
}

export const rollSingleDiceMultipleTimesAndSum = (count, dice) => {
  return new SummedRoll(rollSingleDiceMultipleTimes(count), dice);
}
/**
 *
 * @param dice
 * @return SummedRoll
 */
export const rollMultipleAndSum = (...dice) => {
  const values = dice.reduce(d => d.roll())
  return new SummedRoll(values);
}
