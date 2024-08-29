const naturalNotes = ["C", "D", "E", "F", "G", "A", "B"]
const allNotes = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"]

export const getRandomNotes = (n, isNatural) => {
  const max = isNatural ? naturalNotes.length : allNotes.length
  const resultSet = new Set();
  while (resultSet.size < n) {
    const noteIndex = Math.floor(Math.random() * max)
    resultSet.add(noteIndex)
  }
  const resultArray = Array.from(resultSet);

  if (isNatural) {
    return resultArray.map((index) => naturalNotes[index])
  } else {
    return resultArray.map((index) => allNotes[index])
  }
}
