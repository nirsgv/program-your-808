import { v4 as uuidv4 } from "uuid";
export const INSTRUMENTS = [
  "BD",
  "SD",
  "LC",
  "MC",
  "HC",
  "RS",
  "CP",
  "CB",
  "CY",
  "OH",
  "CH",
];

export const TRACK_INFO = [
  "Artist",
  "Track",
  "Genre",
  "Year",
  "Label",
  "Country",
];
class Part {
  constructor({ instruments, notes }) {
    this.part = instruments.reduce((acc, inst) => {
      acc[inst] = Array.from({ length: 16 }).map((item, index) =>
        notes[inst] && Array.isArray(notes[inst]) && notes[inst].includes(index)
          ? 1
          : 0
      );
      return acc;
    }, {});
    this.part.uid = uuidv4();
  }
}
export const data = [
  {
    artist: "Afrika Bambaataa",
    track: "Planet Rock",
    color: "#DD311B",
    genre: "Electro",
    year: "1982",
    label: "Tommy Boy Music",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6],
          SD: [4, 12],
          CP: [4, 12],
          CB: [0, 2, 4, 6, 7, 9, 11, 12, 14],
          CH: [0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 10, 13],
          SD: [4, 12],
          CP: [4, 12],
          CB: [0, 2, 4, 6, 7, 9, 11, 12, 14],
          CH: [0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],
    id: 1,
  },
  {
    artist: "Cybotron",
    track: "Clear",
    color: "#E26F0A",
    genre: "Electro",
    year: "1983",
    label: "Fantasy",
    country: "Unites States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 3, 6, 10],
          SD: [4, 12],
          CP: [4, 12],
          OH: [4, 12],
          CH: [0, 1, 2, 3, 8, 10, 11, 12],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 10],
          SD: [4, 12],
          CP: [4, 12],
          OH: [4, 12],
          CH: [0, 1, 2, 3, 8, 10, 11, 12],
        },
      }),
    ],
    id: 2,
  },
  {
    artist: "A Guy Called Gerald",
    track: "Voodoo Ray",
    color: "#FBD700",
    genre: "Acid House",
    year: "1988",
    label: "Rham!",
    country: "Unites Kingdom",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 4, 8, 12],
          SD: [4, 12],
          LC: [9, 12, 14],
          MC: [1, 4],
          HC: [7, 8, 11, 14],
          RS: [3, 7, 14],
          CP: [4, 12],
          OH: [6, 10],
          CH: [0, 1, 2, 3, 4, 5, 7, 8, 9, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 4, 8, 12],
          SD: [4, 12],
          MC: [1, 4],
          HC: [7, 8, 11, 14],
          RS: [3, 8, 13],

          CP: [4, 12],
          OH: [4, 12],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],

    id: 3,
  },
  {
    artist: "Adonis",
    track: "No Way Back",
    color: "#A7ABA1",
    genre: "Acid House",
    year: "1986",
    label: "Trax",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6],
          SD: [4, 12],
          CP: [4, 12],
          CB: [0, 2, 4, 6, 7, 9, 11, 12, 14],
          CH: [0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 10, 13],
          SD: [4, 12],
          CP: [4, 12],
          CB: [0, 2, 4, 6, 7, 9, 11, 12, 14],
          CH: [0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],

    id: 4,
  },
  {
    artist: "Hashim",
    track: "Al Naafiysh (The Soul)",
    color: "#00BBB4",
    genre: "Electro",
    year: "1983",
    label: "Cutting Records",
    country: "Unites States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 7, 10],
          SD: [4, 12],
          RS: [2, 3, 6, 8, 9, 11, 13, 14],
          CP: [9, 12],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 1, 10],
          SD: [4, 12],
          RS: [2, 3, 6, 8, 9, 11, 13, 14],
          CP: [0, 1, 4, 10, 12, 13, 14, 15],
        },
      }),
    ],
    id: 5,
  },
  {
    artist: "Freeez",
    track: "I.O.U",
    color: "#53C8EA",
    genre: "Electro",
    year: "1983",
    label: "Beggars Banquet",
    country: "United Kingdom",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 4, 8, 12],
          SD: [4, 12],
          RS: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          CP: [4, 10, 12],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 4, 8, 12, 14],
          SD: [4, 12, 14, 15],
          RS: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          CP: [4, 12],
        },
      }),
    ],
    id: 6,
  },
  {
    artist: "Warp 9",
    track: "Light Years Away",
    color: "#93D401",
    genre: "Electro",
    year: "1983",
    label: "Prism",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 8],
          SD: [3, 12],
          LC: [6, 10],
          MC: [0, 1, 5, 9],

          HC: [6, 10],
          CP: [3, 12],
          OH: [11],
          CH: [0, 1, 2, 3, 4, 6, 7, 8, 10, 12, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 8],
          SD: [3, 12],
          LC: [6],
          MC: [0, 1, 5],

          HC: [3, 7],

          CP: [3, 12],

          CB: [0, 2, 4, 6, 7, 9, 11, 12, 14],
          OH: [15],
          CH: [0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],
    id: 7,
  },
  {
    artist: "Mantronix",
    track: "Needle To The Groove",
    color: "#7764A0",
    genre: "Electro",
    year: "1985",
    label: "Sleeping Bag Records",
    country: "United States",

    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 3, 7, 10],
          SD: [4, 12],
          MC: [2, 5, 8, 11, 13, 14, 15],
          RS: [2, 3, 6, 9, 14],
          CP: [7, 10],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 3, 7, 10],
          SD: [4, 12],
          MC: [2, 5, 8, 11, 13, 14, 15],
          RS: [2, 3, 6, 9],
          CP: [7, 10],
        },
      }),
    ],
    id: 8,
  },
  {
    artist: "C.O.D",
    track: "In The Bottle",
    color: "#718470",
    genre: "Electro",
    year: "1983",
    label: "Emergency Records",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 10, 13, 15],
          SD: [4, 12, 15],
          LC: [0, 4, 9, 15],
          MC: [12],
          HC: [2, 3, 6, 7, 10, 11, 14, 15],

          RS: [0, 1, 4, 5, 8, 9, 12, 13],
          CP: [0, 3, 6, 10, 13, 15],
          CY: [0],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 10, 12],
          SD: [4, 12, 14, 15],
          LC: [0, 4, 9],
          MC: [12],
          HC: [2, 3, 6, 7, 9, 10, 11, 13, 14, 15],
          RS: [0, 1, 4, 5, 8, 9, 12, 13],
          CP: [0, 1, 2, 4, 6, 10, 11, 12, 14, 15],
          OH: [9, 11, 13, 14, 15],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12],
        },
      }),
    ],
    id: 9,
  },
  {
    artist: "B.B. & Q. Band",
    track: "Genie",
    color: "#B99AC4",
    genre: "Soul/Funk",
    year: "1985",
    label: "Elektra",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 8],
          SD: [4, 12],
          RS: [5, 6, 7, 13, 14, 15],
          CP: [4, 12],
          OH: [10],
          CH: [0, 1, 2, 3, 4, 6, 7, 8, 9, 14],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 8],
          SD: [4, 12],
          RS: [5, 6, 7, 13, 14, 15],

          CP: [4, 12],
          OH: [10],

          CH: [0, 1, 2, 3, 4, 6, 7, 8, 9, 14],
        },
      }),
    ],
    id: 10,
  },
  {
    artist: "Marvin Gaye",
    track: "Sexual Healing",
    color: "#FC91A3",
    genre: "Soul/Funk",
    year: "1982",
    label: "CBS",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 7, 8, 10, 12, 15],
          SD: [10, 11],
          HC: [12],

          RS: [0, 3, 6],
          CB: [0, 2, 4, 6, 7, 9, 11, 12, 14],
          CH: [0, 2, 3, 4, 6, 8, 10, 11, 12, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 8, 15],
          SD: [7, 9, 11, 13],
          LC: [12, 14],
          MC: [6],
          HC: [12],

          RS: [0, 3, 6, 10, 13],
          OH: [13],
          CH: [0, 2, 4, 6, 8, 9, 10, 12, 14, 15],
        },
      }),
    ],
    id: 11,
  },
  {
    artist: "Loose Ends",
    track: "Hangin' On A String",
    color: "#f0d78f",
    genre: "Soul/Funk",
    year: "1982",
    label: "10 Records",
    country: "United Kingdom",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 8],
          SD: [4, 12],
          RS: [3, 11],
          CP: [4, 12],
          CB: [10, 11, 12, 13, 14],
          OH: [0],
          CH: [3, 4, 6, 8, 11, 12, 14],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 8],
          SD: [4, 12],
          LC: [14],
          MC: [13],
          HC: [10, 11, 12],

          OH: [8],

          CH: [0, 3, 4, 6, 9, 11, 12, 13, 14],
        },
      }),
    ],
    id: 12,
  },
  {
    artist: "Planet Patrol",
    track: "Play At Your Own Risk",
    color: "#71aad9",
    genre: "Electro",
    year: "1983",
    label: "Tommy Boy Records",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6],
          SD: [4, 12],
          CP: [4, 12],
          CB: [0, 2, 4, 5, 7, 9, 11, 12, 14],
          CH: [0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 10, 13],
          SD: [4, 12],
          CP: [4, 12],
          CB: [0, 2, 4, 5, 7, 9, 11, 12],
          CH: [0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],
    id: 13,
  },
  {
    artist: "The S.O.S Band",
    track: "Just Be Good To Me",
    color: "#ead594",
    genre: "RnB",
    year: "1983",
    label: "CBS",
    country: "United Kingdom",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 8],
          SD: [4, 12],
          RS: [3, 5, 11, 15],
          CP: [4, 12],
          CB: [3, 6, 8],
          CH: [0, 2, 4, 6, 8, 10, 12, 14],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 3, 6, 8],
          SD: [4, 12],
          RS: [3, 5, 11, 15],
          CP: [4, 12],
          CB: [1, 2, 3, 5, 8, 10, 11, 14],
          OH: [14],

          CH: [0, 2, 4, 6, 8, 10, 12, 14],
        },
      }),
    ],
    id: 14,
  },
  {
    artist: "LL Cool J",
    track: "Rock The Bells",
    color: "#9a7850",
    genre: "Electro",
    year: "1985",
    label: "Def Jam Recordings",
    country: "Unitesd States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 3, 5, 10, 14],
          SD: [4, 7, 12],
          CB: [0, 2, 4, 6, 7, 9, 11, 12, 14],
          CH: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 10, 13],
          SD: [4, 7, 9, 12],
          RS: [4, 7, 9, 12],
          CH: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 14],
        },
      }),
    ],
    id: 15,
  },
  {
    artist: "Yellow Magic Orchestra",
    track: "Thousand Knives",
    color: "#a4e5da",
    genre: "Electro",
    year: "1981",
    label: "Alfa",
    country: "Japan",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 1, 8, 9],
          MT: [4],
          HT: [12, 14],
          RS: [4, 12],
          CP: [14],
          CY: [9],
          OH: [4, 12],
          CH: [2, 3, 7, 10, 11, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 1, 8, 9],
          MT: [4],
          HT: [12, 14],

          RS: [4, 12],
          CP: [14],
          CY: [9],
          OH: [4, 12],
          CB: [0, 2, 4, 6, 7, 9, 11, 12, 14],
          CH: [2, 3, 7, 10, 11, 15],
        },
      }),
    ],
    id: 16,
  },
  {
    artist: "Strafe",
    track: "Set It Off",
    color: "#F8EE4D",
    genre: "Electro",
    year: "1984",
    label: "Just Born",
    country: "Unitesd States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 1, 3, 10],
          SD: [4, 12],
          MC: [0, 1, 2, 4, 6, 12, 14],
          HC: [1, 3, 5, 9, 10],
          OH: [0, 4, 8, 12],
          CH: [2, 3, 6, 7, 10, 11, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 1, 3, 10],
          SD: [4, 12],
          LC: [12],
          MC: [0, 1, 2, 4, 6, 12, 14],
          HC: [1, 3, 5, 9, 10],

          OH: [0, 4, 8, 12],
          CH: [2, 3, 6, 7, 10, 11, 15],
        },
      }),
    ],
    id: 17,
  },
  {
    artist: "Drexciya",
    track: "Wavejumper",
    color: "#0194C8",
    genre: "Electro",
    year: "1995",
    label: "Underground Resistance",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 3, 10, 13, 15],
          SD: [4, 12],
          CP: [4, 12],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 2, 6, 10, 13, 14],
          SD: [4, 12, 14, 15],
          CP: [4, 12],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],
    id: 18,
  },
  {
    artist: "Paul Hardcastle",
    track: "19",
    color: "#A09959",
    genre: "Electro",
    year: "1985",
    label: "Chrysalis",
    country: "United Kingdom",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 1, 3, 7, 10],
          SD: [4, 12],
          RS: [0, 3, 6, 10, 11, 12],
          CP: [4, 12],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 1, 3, 7, 10],
          SD: [4, 12, 14, 15],
          RS: [0, 3, 6, 10, 13],
          CP: [4, 12, 14, 15],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],
    id: 19,
  },
  {
    artist: "Newcleus",
    track: "Jam On It",
    color: "#F28B6C",
    genre: "Electro",
    year: "1984",
    label: "Sunnyview",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 7, 9, 10, 14],
          SD: [4, 12],
          CP: [4, 12],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 1, 7, 9, 10, 12, 14],
          SD: [4, 12],
          CP: [4, 12],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],
    id: 20,
  },
  {
    artist: "Midnight Star",
    track: "Curious",
    color: "#B12970",
    genre: "RnB",
    year: "1984",
    label: "Solar",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 3, 6, 10, 13, 14],
          SD: [4, 12],
          LC: [1, 3, 7, 11, 15],
          CL: [1, 3, 8, 11, 15],
          CP: [4, 12],
          CH: [0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 3, 6, 9, 13, 14],
          SD: [4, 12],
          LC: [1, 3, 7, 11, 15],
          CL: [1, 3, 8, 11, 15],
          CP: [4, 12],
          CH: [0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15],
        },
      }),
    ],

    id: 21,
  },
  {
    artist: "Egyptian Lover",
    track: "Egypt, Egypt",
    color: "#C19E0A",
    genre: "Electro",
    year: "1984",
    label: "Freak Beat Records",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 10, 13],
          SD: [4, 12],
          AC: [0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15],
          CB: [0, 2, 4, 5, 6, 8, 10, 11, 13, 14],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 10, 14],
          SD: [4, 12],
          AC: [10, 2, 3, 4, 6, 7, 8, 10, 11, 12, 14, 15],
          CB: [0, 2, 4, 5, 6, 8, 10, 11, 13, 14],

          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],

    id: 22,
  },
  {
    artist: "UR",
    track: "The Final Frontier",
    color: "#161111",
    genre: "RnB",
    year: "1986",
    label: "Columbia",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 7, 10],
          SD: [4, 12],
          CP: [4, 12],
          CH: [0, 1, 2, 4, 6, 8, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 7, 10],
          SD: [4, 12],
          RS: [8, 9, 10],
          CP: [4, 12],
          OH: [7],
          CH: [0, 1, 2, 4, 6, 8, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],

    id: 23,
  },
  {
    artist: "Surface",
    track: "Happy",
    color: "#B2B5DD",
    genre: "Soul",
    year: "1984",
    label: "Atlantic",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 7, 10],
          SD: [4, 12],
          CP: [4, 12],
          CH: [0, 1, 2, 4, 6, 8, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 7, 10],
          SD: [4, 12],
          RS: [8, 9, 10],
          CP: [4, 12],
          OH: [7],
          CH: [0, 1, 2, 4, 6, 8, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],

    id: 24,
  },
  {
    artist: "Kleeer",
    track: "Intimate Connection",
    color: "#C5274A",
    genre: "Soul",
    year: "1984",
    label: "Atlantic",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 10, 13],
          SD: [4, 5, 12],
          LT: [3, 11],
          HC: [0, 4, 5, 8, 12, 13],
          CP: [4, 12],
          CH: [0, 2, 4, 6, 8, 10, 12, 14],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 4, 8, 14],
          SD: [4, 12],
          LT: [3, 11],
          HC: [0, 4, 8, 12, 13],

          CP: [4, 12],
          OH: [7],
          CH: [0, 2, 4, 6, 8, 10, 12, 14],
        },
      }),
    ],
    id: 25,
  },
  {
    artist: "Charanjit Singh",
    track: "Raga Bhairav'",
    color: "#817F24",
    genre: "Disco/Acid",
    year: "1983",
    label: "His Master's Voice",
    country: "India",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 4, 8, 12],
          SD: [4, 12],
          HC: [2, 3],
          MA: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 4, 8, 12],
          SD: [4, 12],
          MA: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          OH: [10, 14],
        },
      }),
    ],

    id: 26,
  },
  {
    artist: "Metro",
    track: "Brownstone Express",
    color: "#8A8A8A",
    genre: "House",
    year: "1990",
    label: "Nu Groove Records",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 4, 8, 12],
          SD: [4, 7, 9, 12, 15],
          HT: [0, 2, 3],
          RS: [2, 5, 8, 11, 15],
          CP: [4, 12],
          OH: [2, 7, 10, 14],
          CH: [0, 1, 3, 4, 5, 6, 8, 9, 11, 12, 13, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 4, 8, 12, 13],
          SD: [4, 7, 9, 12, 15],
          HT: [0, 2, 3],
          RS: [2, 5, 8, 9, 10, 11, 15],
          CP: [4, 7, 12],
          OH: [2, 7, 10, 14],
          CH: [0, 1, 3, 4, 5, 6, 8, 9, 11, 12, 13, 15],
        },
      }),
    ],

    id: 27,
  },
  {
    artist: "Joyce Sims",
    track: "You Are My) All And Al",
    color: "#F05098",
    genre: "Electro",
    year: "1986",
    label: "Sleeping Bag Records",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 2, 7, 9, 11, 14],
          SD: [4, 12],
          RS: [2, 4, 6, 7, 9, 11, 12, 14],
          CP: [6, 7, 9, 11, 12, 14],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 2, 7, 9, 11, 14],
          SD: [4, 12],
          RS: [2, 4, 6, 7, 9, 11, 12, 14],
          CP: [6, 7, 9, 11, 12, 14],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],

    id: 28,
  },
  {
    artist: "Keith Sweat",
    track: "Make It Last Forever",
    color: "#BF5728",
    genre: "Soul",
    year: "1987",
    label: "Electra",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 10, 13],
          SD: [4, 12],
          LC: [10],
          MC: [11, 14],
          HC: [12, 13, 15],

          RS: [10, 11, 14],
          CP: [4, 12],
          CH: [0, 1, 2, 4, 6, 7, 8, 10, 12, 13, 14],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 3, 6, 10, 13],
          SD: [4, 12],
          RS: [2, 5, 8, 11, 14, 15],
          CP: [4, 12],
          OH: [14],
          CH: [0, 2, 4, 6, 8],
        },
      }),
    ],

    id: 29,
  },
  {
    artist: "Alexander Robotnick",
    track: "Problèmes D'Amour",
    color: "#F1CB2C",
    genre: "Italo-Disco",
    year: "1983",
    label: "Fuzz Dance",
    country: "Italy",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 4, 8, 12],
          SD: [5, 12],
          RS: [0, 2, 4, 6, 7, 9, 11, 13, 15],
          CP: [4, 12],
          OH: [2, 6, 10, 14],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 4, 8, 12],
          SD: [5, 12],
          RS: [1, 3, 6, 7, 9, 11, 13, 14],
          CP: [4, 12],
          OH: [2, 6, 10, 14],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],

    id: 30,
  },
  {
    artist: "Oppenheimer Analysis",
    track: "The Devil's Dancers",
    color: "#598E34",
    genre: "New Wave",
    year: "1982",
    label: "Self-released",
    country: "United Kingdom",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 4, 8, 12],
          SD: [4, 12, 14],
          CP: [10, 11],
          CH: [2, 3, 6, 7, 10, 11, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 4, 8, 12],
          SD: [4, 9, 12],
          CP: [6, 7],
          CH: [2, 3, 6, 7, 10, 11, 14, 15],
        },
      }),
    ],

    id: 31,
  },
  {
    artist: "Beastie Boys",
    track: "Brass Monkey",
    color: "#B63B3B",
    genre: "Hip Hop",
    year: "1988",
    label: "Def Jam Recordings",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 8, 10],
          SD: [4, 12],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 10, 14],
          SD: [4, 12],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],

    id: 32,
  },
  {
    artist: "Pretty Tony",
    track: "Fix It In The Mix",
    color: "#94B6B8",
    genre: "Electro",
    year: "1983",
    label: "Music Specialists Inc.",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 10, 13],
          SD: [4, 12],
          CH: [0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6],
          SD: [4, 12],
          CH: [0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],

    id: 33,
  },
  {
    artist: "Connie",
    track: "Funky Little Beat",
    color: "#FF99D9",
    genre: "Freestyle",
    year: "1985",
    label: "Sunnyview",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6],
          SD: [4, 12],
          MA: [0, 1, 2, 3, 6, 7, 8, 9, 10, 11],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 10, 13],
          SD: [4, 12],
          MA: [0, 1, 2, 3, 6, 7, 8, 9, 10, 11],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],

    id: 34,
  },
  {
    artist: "Dopplereffekt",
    track: "Cellular Phone",
    color: "#A89182",
    genre: "Electro",
    year: "1985",
    label: "Dataphysix Engineering",
    country: "Germany",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 3, 6, 14],
          SD: [4, 12],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 10, 14],
          SD: [4, 12],
          OH: [6],
          CH: [0, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],

    id: 35,
  },
  {
    artist: "Ta La Rock",
    track: "It's Yours",
    color: "#FD6227",
    genre: "Hip Hop",
    year: "1984",
    label: "Partytime Records",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 2, 3, 10],
          SD: [4, 9, 12],
          CP: [4, 9, 12],
          OH: [1, 3, 5, 6, 7, 8, 9, 11, 13, 15],
          CH: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 2, 5, 7, 9, 10, 15],
          SD: [4, 12],
          CP: [4, 5, 7, 9, 10, 12],
          OH: [1, 3, 5, 6, 7, 8, 9, 11, 13, 15],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],

    id: 36,
  },
  {
    artist: "Gwen Guthrie",
    track: "Outside In The Rain",
    color: "#5494BF",
    genre: "Soul",
    year: "1986",
    label: "Polydor",
    country: "United States",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 2, 3, 10, 11],
          SD: [4, 12],
          RS: [1, 2, 3, 10, 11],
          CP: [4, 12],
          OH: [8],
          CH: [1, 2, 4, 6, 8, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 2, 3, 10, 11],
          SD: [4, 7, 12],
          RS: [1, 2, 3, 8, 9, 10, 11],
          CP: [4, 12],
          CB: [6, 8, 9],
          OH: [8],
          CH: [1, 2, 4, 6, 8, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],

    id: 37,
  },
  {
    artist: "I-F",
    track: "Space Invaders Are Smoking Grass",
    color: "#6DEC02",
    genre: "Electro",
    year: "1997",
    label: "Viewlexx",
    country: "Netherlands",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 7, 14],
          SD: [4, 12],
          RS: [3, 9, 15],
          CP: [4, 12],
          OH: [4, 9, 12],
          CH: [0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 7, 14],
          SD: [4, 12],
          RS: [3, 9, 15],
          CP: [4, 12],
          OH: [4, 9, 12],
          CH: [0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],

    id: 38,
  },
  {
    artist: "Klein & MBO",
    track: "Dirty Talk",
    color: "#F1E85F",
    genre: "Italo Disco",
    year: "1982",
    label: "Zanza",
    country: "Italy",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 4, 8, 12],
          SD: [4, 12],
          MC: [0, 1, 2, 7, 9],
          RS: [0, 2, 4, 6, 7, 9, 11, 13, 15],
          OH: [2, 6, 10, 14],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 4, 8, 12],
          SD: [4, 12],
          MC: [0, 1, 2, 7, 9],
          RS: [1, 3, 6, 7, 9, 11, 13, 14],
          OH: [2, 6, 10, 14],
          CH: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      }),
    ],

    id: 39,
  },
  {
    artist: "52nd Street",
    track: "Tell Me",
    color: "#9559D1",
    genre: "Soul",
    year: "1985",
    label: "10 Records",
    country: "United Kingdom",
    parts: [
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 8],
          SD: [4, 12],
          RS: [5],
          CP: [4, 12],
          OH: [4, 12],
          CH: [6, 8, 10, 11, 14, 15],
        },
      }),
      new Part({
        instruments: INSTRUMENTS,
        notes: {
          BD: [0, 6, 8],
          SD: [4, 12],
          LT: [15],
          MT: [12, 13, 14],

          RS: [0, 2, 3, 5],
          CP: [4, 12],
          CB: [9, 12],
          OH: [12],
          CH: [4, 6, 7, 8, 10, 11, 13, 14],
        },
      }),
    ],

    id: 40,
  },
];
