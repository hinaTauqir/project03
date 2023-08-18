#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

let toDo:string[]=[];
let again=true;
function wait(){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
         resolve(1);
          },2000);
    })
}
 
async function welcome(){
     console.log(`         ${chalk.yellow(`HELLO`)} `);
     let title=chalkAnimation.karaoke(`      "WELCOME IN TODO APP"\n`);
     await wait();
     title.stop();
}

let askQuestion=async ()=>
{
      await 
      inquirer.prompt([
        {
            name:"todo",
            type:"input",
            message:"what you want to add in yours todo list \n",
            
        },
        {
            name:"addmore",
            type:"confirm",
            message:"do you want to add more todo?? \n",
            default:false
        }
       
     ]) 
     .then((answers)=>{
        again=answers.addmore;
        if(answers.todo){toDo.push(answers.todo);}
        else {console.log(chalk.red(`plz enter the valid text`));}
     })
}


 function showAns(){
    if(toDo.length>=1){console.log(`your todo list is : `);
    console.log(chalk.yellow(toDo))}
    else{console.log(chalk.yellow("no todo"));}
 }


 function lastmessage(){
        console.log(`       ${chalk.green('GOOD BYE')} \n   ${chalk.blue('see you again')}`);
 }


async function steps(){
   await welcome();
   while(again) 
         {
           await askQuestion();
           await wait();
         }  
    await showAns();
    await lastmessage();
}

steps();