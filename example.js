/**
 * File path prompt example
 */

"use strict";
import inquirer from "inquirer";
import InquirerParseJsonFiles from "./index.js";

inquirer.registerPrompt("filePath", InquirerParseJsonFiles);

inquirer
  .prompt([
    {
      type: "filePath",
      name: "path",
      message: "What JSON file would you like to load?",
      basePath: "./test",
    },
  ])
  .then((answers) => {
    console.log("[result]", JSON.stringify(answers, null, "  "));
  });
