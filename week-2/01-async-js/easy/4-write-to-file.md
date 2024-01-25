## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require("fs");
fs.readFile("atul.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log(data);
    fs.writeFile("atul.txt", "content ", (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("written succesfully");
      }
    });
  }
});
