let words: string[] = [
    "BONDAD",
    "SINCERIDAD",
    "EMPATIA",
    "AMOR",
    "PACIENCIA",
    "GRATITUD",
    "HUMILDAD",
    "PERDON",
    "RESPONSABILIDAD",
    "SOLIDARIDAD"
  ];

  export const getRandomWords = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }