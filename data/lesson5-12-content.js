import { lesson5Content } from "./lesson5-content.js";
import { lesson6Content } from "./lesson6-content.js";
import { lesson7Content } from "./lesson7-content.js";
import { lesson8Content } from "./lesson8-content.js";
import { lesson9Content } from "./lesson9-content.js";
import { lesson10Content } from "./lesson10-content.js";
import { lesson11Content } from "./lesson11-content.js";
import { lesson12Content } from "./lesson12-content.js";

const lessonContents = [
  lesson5Content,
  lesson6Content,
  lesson7Content,
  lesson8Content,
  lesson9Content,
  lesson10Content,
  lesson11Content,
  lesson12Content,
];

export const lesson512Cards = lessonContents.flatMap((content) => content.cards);
export const lesson512Texts = lessonContents.flatMap((content) => content.texts);
export const lesson512Grammar = lessonContents.flatMap((content) => content.grammar);
