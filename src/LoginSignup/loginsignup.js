let container = [ ];

while(true){
    console.log("1. Sign up");
    console.log("2. Log in");
    console.log("3. Exit");
    console.log();
    
    let choice = Number(prompt("Number: "));
    console.log();
    
    
    if(choice === 1){
        let user = prompt("Username: ");
        let email = prompt("Email address: ");
        let pass = prompt("Password: ");
        
        let log = {
            User: user,
            Email: email,
            Pass: pass
        };
        
        container.push(log);
        
        console.log("Account created successfully! You can now log in.");
        console.log();
    }
    
    else if(choice === 2){
        let em = prompt("Email address: ");
        let pa = prompt("Password: ");
        console.log();
        
        for(let acct in container){
            if(em === container[acct].Email && pa === container[acct].Pass){
                console.log("Log in successful!");
                console.log(`Welcome back ${container[acct].User}`)
                console.log();
            }
            
            else if(em != container [acct].Email && pa != container[acct].Pass){
                console.log("Account does not exist.");
                console.log();
                    }
            
            else{
                console.log("Invalid Email address or Password!");
                console.log();
            }
        }
    }
    
    else if(choice === 3){
        let exit = prompt("Are you sure you want to exit? Yes or No: ").toLowerCase();
        
        if(exit === "yes"){
            console.log("  Thank you for using my mini console system!");
            console.log("      — Developed by Hard Pogi");
            console.log();
            break;
        }
        
        else{
            console.log("Exit cancelled. Returning to main menu...")
        }
    }
    
    else{
        console.log("Invalid choice! Enter a number again from 1-3.")
        console.log;
    }
}