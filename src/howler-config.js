import { Howl } from "howler";

export const sounds = new Howl({
  src: [require("@/assets/misc.wav")],
  sprite: {
    bd: [0, 500],
    cb: [497, 365],
    ch: [865, 142],
    cp: [1009, 328],
    cy: [1341, 2352],
    hc: [3690, 351],
    lc: [4044, 407],
    mc: [4453, 440],
    oh: [4898, 480],
    rs: [5384, 22],
    sd: [5409, 118],
  },
});

export default sounds;
