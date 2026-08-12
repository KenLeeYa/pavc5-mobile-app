import { lesson13Content } from "./lesson13-content.js";
import { lesson14Content } from "./lesson14-content.js";

const lessonContents = [lesson13Content, lesson14Content];

export const lesson1314Cards = lessonContents.flatMap((content) => content.cards);
export const lesson1314Texts = lessonContents.flatMap((content) => content.texts);
export const lesson1314Grammar = lessonContents.flatMap((content) => content.grammar);
