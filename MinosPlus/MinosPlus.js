#!/usr/bin/env node
const fs = require('fs');
const path = require('path');



function Contar(str){
    let mas = 0;
    let menos = 0;
    let commented = false;
    
    
    if (str === ""){
      return null;
    }
    for (let i=0; i<str.length; i++){
      const char = str[i]
      
      
      if (char === "("){
        if (commented){
          console.warn(`Error: Coments aren't allowed at pos. ${i}`);
          return null;
        }
        
        commented = true;
        continue;
      }
      
      if (char === ")"){
        if (!commented){
          console.warn(`Error: There is no start of coment`);
          return null;
        }
        commented = false;
        continue;
      }
      
      if (commented) continue;
      
      
      switch (char) {
        case "+":
          mas++;
          break;
        case "-":
          menos++;
          break;
        case "/":
          mas = Math.floor(mas/2);
          menos = Math.floor(menos/2);
          break;
        case "~":
          menos *= -1;
          break;
        case "#":
          mas *= -1;
          break;
        case "%":
          if (mas === menos)
            return mas
          else
            break;
        case "i":
          let mast = mas;
          let menst = menos;
          mas = menst;
          menos = mast;
          break;
        case "@":
          console.log([mas, menos]);
          break;
        case " ":
          break;
        case "n":
          mas = 0;
          menos = 0;
          break;
        case "*":
          return [mas, menos];
        default:
          console.warn(`Error: Undefined Symbol ${str[i]} at possition ${i}`);
          return null;
      }
    }
    
    console.warn("Error: No matching end");
    return null;
}
function readFileAndProcess(filePath) {
    if (path.extname(filePath) !== '.mp') {
      console.error("Error: Only .mp files are supported");
      return null;
    }

    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      return Contar(fileContent);
    } catch (error) {
      console.error(`Error reading file: ${error.message}`);
      return null;
    }
  }
if (require.main === module) {
    const input = process.argv[2];
    if (!input) {
        console.error("Ussage: minosplus '<código>'");
        process.exit(1);
    }

    const result = readFileAndProcess(process.argv[2]);
    console.log(result);
}
