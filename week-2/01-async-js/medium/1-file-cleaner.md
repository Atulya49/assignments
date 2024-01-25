## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman

```
const fs = require("fs");
fs.readFile("atul.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log("read succesfully");
    console.log(data);
    const cleanedContent = data.replace(/\s+/g, " ");
    fs.writeFile("atul.txt", cleanedContent, "utf8", (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("File has been successfully cleaned and updated.");
        fs.readFile("atul.txt", "utf8", (err, updatedData) => {
          if (err) {
            console.error("Error reading updated file:", err);
          } else {
            console.log("Updated content in the file:", updatedData);
          }
        });
      }
    });
  }
});

