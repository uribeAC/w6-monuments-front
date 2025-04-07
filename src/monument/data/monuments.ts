import getMonuments from "../client/getMonuments";

const monumentsUrl = "https://monuments-back-uribe.onrender.com/monuments";
export const monuments = await getMonuments(monumentsUrl);
