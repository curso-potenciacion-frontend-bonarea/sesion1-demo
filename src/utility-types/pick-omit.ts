interface Character {
  id: number;
  name: string;
  date: Date;
  category: string;
  description: string;
  reviews: string[];
  chapters: number[];
  isFavourite: boolean;
}

type CharacterPreview = Pick<Character, "id" | "name" | "isFavourite">;
type CharacterWithoutChapters = Omit<Character, "chapters">;

const tyrion: CharacterWithoutChapters = {};

const jaimeData: Character = {
  id: 1,
  name: "Jaime",
  category: "fighter",
  chapters: [],
  date: new Date(),
  description: "El buenorro de GoT",
  reviews: [],
  isFavourite: true,
};

const jaimePreviewData: CharacterPreview = {
  id: jaimeData.id,
  isFavourite: jaimeData.isFavourite,
  name: jaimeData.name,
};
