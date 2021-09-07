const validator = require("validator"); //Intelisense not working for validator
const chalk = require("chalk");
const notes = require("./notes.js");
const yargs = require("yargs");

//Customize  yargs version
yargs.version("1.1.0");

//Create add command
yargs.command({
  command: "add",
  description: "Add a note",
  builder: {
    title: {
      description: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      description: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);

    // console.log("Title: ", +argv.title);
    // console.log("Body: ", +argv.body);
  },
});

//Create a remove command
yargs.command({
  command: "remove",
  description: "Remove a note",
  builder: {
    title: {
      description: "Note Title to remove",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
    //console.log("Removing a note!");
  },
});

//Create list command
yargs.command({
  command: "list",
  description: "List notes!",
  handler() {
    notes.listNotes();
  },
});

//Create read command
yargs.command({
  command: "read",
  description: "Read a note",
  builder: {
    title: {
      description: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

//add, remove, read, list
yargs.parse();

//console.log(yargs.argv);

//const getNotes = require("./notes.js");
//const msg = getNotes();
//console.log(msg);
//const command = process.argv[2];
//console.log(process.argv);

// if (command === "add") {
//   console.log("Adding Note!...");
// } else if (command === "remove") {
//   console.log("Removing Note!...");
// }

//console.log(validator.isURL("https://github.com/"));
//const greenMsg = chalk.default.bold.blue.inverse("Success!");

//console.log(greenMsg);

//console.log(process.argv[2]);

// fs.writeFileSync("notes.txt", "My name is Somanna.");
// fs.appendFileSync(
//   "notes.txt",
//   " This line is appeneded after the first sentense."
// );
