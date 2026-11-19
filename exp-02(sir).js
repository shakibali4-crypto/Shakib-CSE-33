const filesys=require("fs")
//creating file
filesys.writeFileSync("C:\\Users\\alini\\OneDrive\\Desktop\\fsd cse33\\exp-02(sir).js","name:ABES");
console.log("File created successfully");

//read file
const filedata=filesys.readFileSync("C:\\Users\\alini\\OneDrive\\Desktop\\fsd cse33\\exp-02(sir).js","Utf8");
console.log(filedata);

//update data
const u=filesys.writeFileSync("C:\\Users\\alini\\OneDrive\\Desktop\\fsd cse33\\exp-02(sir).js","name:Shakib");
console.log("File updated successfully");

const newfiledata=filesys.readFileSync("C:\\Users\\alini\\OneDrive\\Desktop\\fsd cse33\\exp-02(sir).js","Utf8");
console.log(newfiledata);
