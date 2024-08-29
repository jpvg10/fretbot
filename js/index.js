import { getRandomNotes } from "./notes.js"

const form = document.getElementById("form")
const pNotes = document.getElementById("p-notes")
const pMessage = document.getElementById("p-message")

const printNotes = (noteType, n) => {
  const notes = getRandomNotes(noteType, n)
  pNotes.innerText = notes.join(" ")
}

const printMessage = (exNumber) => {
  switch(exNumber) {
    case 1:
      pMessage.innerHTML = `<ul>
      <li>Ex. 1: Play the note going up and down.</li>
      <li>Ex. 2: This time use a metronome at 40 BPM.</li>
      </ul>
      `
      break
    case 3:
      pMessage.innerText = "Now there are sharps and flats. Play the note going up and down with metronome at 40 BPM."
      break
    case 4:
      pMessage.innerText = "Play the first note going up and the second one going down. Metronome at 40 BPM."
      break
    case 5:
      pMessage.innerText = "Play the notes in this order, going up and down in an alternating fashion. Metronome at 40 BPM."
      break
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const formData = new FormData(form)
  let exNumber = Number(formData.get("ex-number"))

  // Exercises 1 and 2
  let n = 1
  let isNatural = true
  
  //Others
  switch(exNumber) {
    case 3:
      isNatural = false
      n = 1
      break
    case 4:
      isNatural = false
      n = 2
      break
    case 5:
      isNatural = true
      n = 7
      break
  }

  printMessage(exNumber)
  printNotes(n, isNatural)
})

form.requestSubmit()
