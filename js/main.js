let i = 0;
let kru = document.getElementById('field');
kru.innerHTML = i; 
function al() {
    i++;
    kru.innerHTML = i; 
    console.log(i);
}
function ret() {
    i--;
    kru.innerHTML = i; 
    console.log(i);
}

let input = document.getElementById('form');
let kru2 = document.getElementById('field2');
let finalAnswer = "Click Enter";
kru2.innerHTML = finalAnswer;
function inp() {
    
    let str = input.value;
    let str2 = input.value;

    let first = -1, second = -1, third = -1;

    for(let i = 0; i < 4; i++){
        if(str[i] > first && str[i] <= 2)
            first = str[i];
    }
    str = str.replace(first, '');

    if(str.length < 4){
        if(first <= 1){
            for(let i = 0; i < 3; i++){
                if(str[i] > second && str[i] <= 9)
                    second = str[i];
            }
            str = str.replace(second, '');
        }
        else{
            for(let i = 0; i < 3; i++){
                if(str[i] > second && str[i] <= 3)
                    second = str[i];
            }
            str = str.replace(second, '');
        }

        if(str.length < 3){
            for(let i = 0; i < 2; i++){
                if(str[i] > third && str[i] <= 5)
                    third = str[i];
            }
            str = str.replace(third, '');
        }
        else
            finalAnswer = "error";
        
        if(str.length == 1)
            finalAnswer = `${first}${second}:${third}${str}`;
        else
            finalAnswer = "error";
    }
    else
        finalAnswer = "error";
    //For example:
    //If we have str = "1266", the code will process like this first = 2, second = 1, and we will get an "error" in the response. But the correct answer "16:26".
    //So we have to assign the value 1 to the variable first(first = 1), and then continue to compose the correct value.
    if(finalAnswer == "error" && first == 2 && second == 1){
        first = 1;
        str2 = str2.replace(first, '');

        if(str2.length < 4){

            for(let i = 0; i < 3; i++){
                if(str2[i] > second && str2[i] <= 9)
                    second = str2[i];
            }
            str2 = str2.replace(second, '');
    
            if(str2.length < 3){
                for(let i = 0; i < 2; i++){
                    if(str2[i] > third && str2[i] <= 5)
                        third = str2[i];
                }
                str2 = str2.replace(third, '');
            }
            else
                finalAnswer = "error";
            
            if(str2.length == 1)
                finalAnswer = `${first}${second}:${third}${str2}`;
            else
                finalAnswer = "error";
        }
        else
            finalAnswer = "error";
    }

    kru2.innerHTML = finalAnswer;
    console.log(finalAnswer);
}

const digits = [9, 3, 1, 6];

function findLatestTime(digits) {
    let latestTime = '';
    
    // Проверка и добавление возможного значения часов (для разрядов 0-2)
        if (digits.includes(2)) {
            latestTime += '2';
            digits.splice(digits.indexOf(2), 1);
    
            if (digits.some(digit => digit <= 3)) {
                latestTime += Math.max(...digits.filter(digit => digit <= 3));
                digits.splice(digits.indexOf(parseInt(latestTime[1])), 1);
    
                latestTime += ':';
            } else {
                latestTime = '';
            }
        } else if (digits.includes(1) || digits.includes(0)) {
            latestTime += Math.max(...digits.filter(digit => digit <= 1));
            digits.splice(digits.indexOf(parseInt(latestTime[0])), 1);
    
            latestTime += Math.max(...digits);
            digits.splice(digits.indexOf(parseInt(latestTime[1])), 1);
    
            latestTime += ':';
        } else {
            return 'Невозможно составить время из заданных цифр';
        }
    
    // Проверка и добавление возможного значения минут (для разрядов 0-5)
        if (digits.some(digit => digit <= 5)) {
            latestTime += Math.max(...digits.filter(digit => digit <= 5));
            digits.splice(digits.indexOf(parseInt(latestTime[3])), 1);
    
            latestTime += Math.max(...digits);
            digits.splice(digits.indexOf(parseInt(latestTime[4])), 1);
        } else {
            return 'Невозможно составить время из заданных цифр';
        }
    
        return latestTime;
    }

    const result = findLatestTime(digits);
    console.log(result); // Выводит "21:49"