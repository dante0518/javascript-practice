//random password generator


function genPass(){
    function generatePassword(lenght, includeLowercase, includeUpprecase, includeNumbers, includeSymbols){

        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const numberChars = '1234567890'
        const symbolChars = "!%/=><,`'.*-_&#@";
        
        let allowedChars = "";
        let password = "";
    
        allowedChars += includeLowercase ? lowercaseChars : "";
        allowedChars += includeUpprecase ? uppercaseChars : "";
        allowedChars += includeNumbers ? numberChars : "";
        allowedChars += includeSymbols ? symbolChars : "";
    
        if(lenght <= 0){
            return `(password lenght must be at least 1)`;
        };
        if(allowedChars.length === 0){
            return `(At least 1 set of chars needs to be selected)`;
        }
    
        for (let i = 0; i < lenght; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length)
            password += allowedChars[randomIndex];
        };
    
        return password;
    
    };
    
    let passwordLenght = document.getElementById('passwordLenght').value;
    // const includeLowercase = true;
    // const includeUpprecase = true;
    // const includeNumbers = true;
    // const includeSymbols = true;
    let includeLowercase = document.getElementById('lowercase').checked;
    let includeUpprecase = document.getElementById('uppercase').checked;
    let includeNumbers = document.getElementById('numbers').checked;
    let includeSymbols = document.getElementById('symbols').checked;


    
    
    const password = generatePassword(passwordLenght, includeLowercase, includeUpprecase, includeNumbers, includeSymbols);
    const passwordResult = document.getElementById('passwordResult')

    passwordResult.textContent = password


    
    console.log(`Generated password: ${password}`);
};

