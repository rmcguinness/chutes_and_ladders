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

import {IDie, ISpace, ISummedRoll} from "./interfaces";

const GenerateRandomNumber = (upperBound : number) : number => {
  return Math.floor(Math.random()*upperBound) + 1;
}

/**
 *
 * @param dice the dice to roll
 * @return number[] each dice that was rolled once.
 */
const RollDice = (dice : Array<IDie>) : Array<number> => {
  return dice.map(d => d.roll());
}


const RollSingleDiceMultipleTimes = (count: number, die: IDie) : Array<number> => {
  return Array(count).fill(die.roll());
}

/**
 *
 * @param totalRolls the total number of times to roll
 * @param dice one or more dice
 * @return number[][] an array of values
 */
const RollMultipleDiceMultipleTimes = (totalRolls : number, ...dice : Array<IDie>) : Array<Array<number>> => {
  const out = Array<Array<number>>(0)
  for (let i = 0; i<totalRolls; i++) {
    out.push(RollDice(dice));
  }
  return out;
}

/**
 *
 * @param count number of roles
 * @param die single dice
 */
const RollSingleDiceMultipleTimesAndSum = (count: number, die: IDie) : ISummedRoll => {
  const values = Array(count).fill(die.roll())
  return {
    rolledValues: values,
    sum: values.reduce((p, i) => p+i, 0)
  } as ISummedRoll
}

/**
 *
 * @param dice
 * @return SummedRoll
 */
const RollMultipleDiceAndSum = (dice: Array<IDie>) : ISummedRoll => {
  const values = dice.map(d => d.roll());
  return {
    rolledValues: values,
    sum: values.reduce((p, i) => p+i, 0)
  } as ISummedRoll
}


export default { GenerateRandomNumber, RollDice, RollSingleDiceMultipleTimes,  RollSingleDiceMultipleTimesAndSum, RollMultipleDiceMultipleTimes, RollMultipleDiceAndSum }
