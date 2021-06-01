const notes = [
  {
    id: 1,
    subject: "Learned how to code objects in arrays.",
    date: "5/27/21",
    feeling: "Feeling excited to be learning at NSS",
    timeInMinutes: 240,
  },

  {
    id: 2,
    subject: "Learned how to use modules in .js",
    date: "5/27/21",
    feeling:
      "Felt lost at first but got some great help from my classmates as well as Christina.",
    timeInMinutes: 45,
  },
];

// console.log(notes);

const noteAboutToday = {
  id: 3,
  subject:
    "Practiced some function writing this morning and now I'm working on completing chapter 2",
  date: "5/28/21",
  feeling: "Still pretty pumped about coding.",
  timeInMinutes: 120,
};

notes.push(noteAboutToday);
// console.log(notes);

// for (const note of notes) {
//   console.log(
//     `Note ${note.id}
//   ${note.date}
//   ${note.subject}
//   I spent ${note.timeInMinutes}min working on it.
//   ${note.feeling}
//   --------------`
//   );
// }

// const searchTerm = "Still pretty pumped about coding.";

// for (const note of notes) {
//   if (note.feeling === searchTerm) {
//     console.log(note);
//   }
// }
const createNote = (noteObj) => {
  const lastIndex = notes.length - 1;
  const currentLastNote = notes[lastIndex];
  const maxId = currentLastNote.id;
  const idForNewNote = maxId + 1;

  noteObj.id = idForNewNote;

  notes.push(noteObj);
};

// Create a new note object
const moreNewerNote = {
  subject: "Learned teamwork",
  date: "6/1/21",
  feeling: "Awesome.",
  timeInMinutes: 300,
};

// Specify object as argument for function
//         |
//         |
//         V
createNote(moreNewerNote);
// console.log(moreNewerNote);

const createNoteDate = (noteCurrentDate) => {
  const currentDate = new Date();
  const dateTime =
    currentDate.getMonth() +
    1 +
    "/" +
    (currentDate.getDay() - 1) +
    "/" +
    currentDate.getFullYear() +
    " " +
    "@" +
    " " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
  const dateForNewNote = dateTime;

  noteCurrentDate.dateOfEntry = dateForNewNote;
  notes.push(noteCurrentDate);
};

createNoteDate(moreNewerNote);
console.log(moreNewerNote);
