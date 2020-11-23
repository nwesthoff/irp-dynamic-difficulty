const myReferences: AcademicRef[] = [
  {
    citationKey: "nacke_2008_flow",
    entryType: "ACADEMIC",
    entryTags: {
      author: "Nacke and Lindley",
      year: "2008",
      inBib:
        "Nacke, L. and Lindley, C.A. (2008). Flow and Immersion in first-person Shooters. Proceedings of the 2008 Conference on Future Play Research, Play, Share - Future Play ’08.",
    },
  },
  {
    citationKey: "sugar_2019_the",
    entryType: "TRUSTED",
    entryTags: {
      author: "Sugar",
      year: "2019",
      inBib:
        "Sugar, R. (2019). The World Is chaos. Escape Rooms Make sense. [online] Vox. Available at: https://www.vox.com/the-goods/2019/8/7/20749177/escape-room-game [Accessed 18 Nov. 2020].",
    },
  },
  {
    citationKey: "bates_1997_designing",
    entryType: "TRADEMAG",
    entryTags: {
      author: "Bates",
      year: "1997",
      inBib:
        "Bates, B. (1997). Designing the Puzzle. [online] www.scottkim.com.previewc40.carrierzone.com. Available at: http://www.scottkim.com.previewc40.carrierzone.com/thinkinggames/GDC00/bates.html [Accessed 23 Nov. 2020].",
    },
  },
];

export interface AcademicRef {
  citationKey: string;
  entryType: "TRUSTED" | "TRADEMAG" | "ACADEMIC";
  entryTags: {
    author: string;
    year: string;
    inBib: string;
  };
}

export default myReferences;
