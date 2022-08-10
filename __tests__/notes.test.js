const { filterByQuery, findById, createNewNote, validateNote } = require("../lib/notes");
const notesArray = require("../data/db.json");
jest.mock('fs');
// all tests
test("creates an note array", () => {
    const note = createNewNote(
        { title: "Note1", text: "Text of the note" },
        notesArray
    );
    expect(note.title).toBe("Note1");
    expect(note.text).toBe("Text of the note");
});

test("filters by query", () => {
    const startingNotes = [
        {
            id: "3",
            title: "Note Next",
            text: "Some random text"
        },
        {
            id: "4",
            title: "Note After the Next",
            text: "Another random text",
        }
    ];
    const updatedNotes = filterByQuery({ text: "Some random text" }, startingNotes);
    expect(updatedNotes.length).toEqual(1);
});
// checks
