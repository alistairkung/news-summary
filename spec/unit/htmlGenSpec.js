// Displaying Headers
// ------------------
htmlGen.createHeader(document.body);

assert.isEqual(document.getElementById("main-header").innerHTML, "Notes App",
               "Header is visible on page")

// Displaying Forms
// ----------------
htmlGen.createForm(document.body);

assert.isEqual(document.getElementById("notes-form").localName, "form",
              "form is of the correct type");

assert.isEqual(document.getElementById("notes-form").id, "notes-form",
"form has the correct ID");

htmlGen.createTextarea(document.getElementById("notes-form"))

assert.isEqual(document.getElementById("notes-input").localName, "textarea",
"textarea is of the correct type");

assert.isEqual(document.getElementById("notes-input").id, "notes-input",
"textarea has the correct ID");

htmlGen.createButton(document.getElementById("notes-form"))

assert.isEqual(document.getElementById("btn").localName, "button",
"button is of the correct type");

assert.isEqual(document.getElementById("btn").innerHTML, "Submit",
"button has the value 'Submit'");

// Displaying Notes
// ----------------
list = [];
note1 = "note1";
note2 = "note2";

list.push(note1);
list.push(note2);

htmlGen.createList(document.body);

list.forEach(htmlGen.createListItem);

var retrievedNote = document.getElementsByTagName("li")[1].innerHTML;

assert.isEqual(retrievedNote, "note2", "Notes are visible on the page");
