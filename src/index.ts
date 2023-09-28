#!/usr/bin/env node 

import yargs from 'yargs';
import fs from 'fs';
import { stderr } from 'process';
import { exec } from 'child_process';

const argv = yargs
    .command({
        command: "create",
        describe: "Create a style.css file",
        aliases: ["c"],
        builder: {},
        handler: function (argv){
            createStyleCss();
        }
    })
    .command("build", "Run npm run build")
    .help()
    .argv as { _: string[]};


if(argv._.includes("create")){
    createStyleCss();
}

//exec komut satırında kodun çalıştırılmasını sağlar.
if(argv._.includes("build")){
    exec("npm run build", (error, stdout, stderr) => {
        if(error){
            console.log(`Error: ${stdout}`)
        }

        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    })
}

function createStyleCss(){
    const defaultCss = `
    *{
        margin: 0;
        padding: 0;
    }`

    fs.writeFileSync("style.css",defaultCss);
    console.log("Style.css has been created.");
}


