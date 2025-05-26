let taskList = [ ];

while(true){
    console.log("To-Do List:")
    console.log("1. Add Task");
    console.log("2. View All Task");
    console.log("3. Mark Task as Done");
    console.log("4. Delete Task");
    console.log("5. Exit");
    console.log();
    
    let choice = Number(prompt("Choice: "));
    console.log();
    
    if(choice === 1){
        console.log("ADD NEW TASK");
        console.log("Let's write your goal!");
        console.log();
        
        let nu = Number(prompt("Task number: "));
        let ta = prompt("Task: ")
        
        let task = {
            taskNum: nu,
            taskTodo: ta,
            taskStatus: "Pending"
        };
        
        taskList.push(task);
        console.log("Task added");
        console.log("");
    }
    
    else if(choice === 2){
        console.log("YOUR TO-DO LIST");
        console.log("Here's everything you planned");
        console.log();
        
        for(let t in taskList){
            console.log(`Task number  : ${taskList[t].taskNum}`)
            console.log(`Task         : ${taskList[t].taskTodo}`)
            console.log(`Task status  : ${taskList[t].taskStatus}`)
            console.log();
        }
    }
    
    else if(choice === 3){
        console.log("MARK TASK AS DONE");
        console.log("Which task did you finish today?");
        console.log();
        
        let taNu = Number(prompt("Task number: "));
        
        for(let t in taskList){
            if(taNu === taskList[t].taskNum){
                let currentStatus = ("Done");
                
                taskList[t].taskStatus = currentStatus;
                
                console.log("Task Done");
                console.log();
            }
            
            else{
                console.log("Invalid task number!");
                console.log();
            }
        }
    }
    
    else if(choice === 4){
        console.log("DELETE TASK");
        console.log("Say goodbye to a task you don't need");
        console.log();
        
        let taNu = Number(prompt("Task number: "));
        
        for(let t in taskList){
            if(taNu === taskList[t].taskNum){
                taskList.splice(t, 1);
                
                console.log("Task deleted")
                console.log();
            }
        
            else{
            console.log("Invalid task number!");
            console.log();
            }
        }
    }
    
    else if(choice === 5){
        let exit = String(prompt("Are you sure you want to exit? Yes or No: ")).toLowerCase();
        console.log();
        
        if(exit === "yes"){
            console.log("Thankyou for using my To-Do List console based system!");
            break;
        }
        
        else{
            console.log("Exit cancelled. Returning to main menu...");
            console.log();
        }
    }
    
    else{
        console.log("Invalid choice! Enter a number from 1 to 5.");
        console.log();
    }
}