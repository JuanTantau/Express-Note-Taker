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
test("finds by id", () => {
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
    ];    const result = findById("3", startingNotes);
    expect(result.title).toBe("Note Next");
});
test("validations note", () => {
    const note = {
        id: "3"
        title: "Note Next",
        text: "Some random text"
    });
    const invalidNote = {
        id: "4",
        title: "Note After the Next"
    };
    // runs the functions
    const result = validateNote(note);
    const result2 = validateNote(invalidNote);
    // results
    expect(result).toBe(true);
    expect(result2).toBe(false);
});