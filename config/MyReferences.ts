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
