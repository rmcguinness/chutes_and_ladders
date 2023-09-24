
// The rules file contains rules and validation functions for the game.

import { SpaceType } from "./space";

const LastSpaceValidator = (space) => {
  return space.type == SpaceType.FINISH;
}

const FirstSpaceValidator = (space) => {
  return space.type == SpaceType.START;
}

export default {LastSpaceValidator, FirstSpaceValidator}

