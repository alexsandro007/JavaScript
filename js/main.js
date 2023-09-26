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
    let arr = [ 0, 0, 0, 0 ];
    for(let i = 0; i < 4; i++){
        arr[i] = Number(str[i]) ;
    }
    console.log(arr);

    let first = 0, second = 0, third = 0, four = 0;

    for(let i = 0; i < 4; i++){
        if(arr[i] > first && arr[i] <= 2){
            first = arr[i];
            arr[i] = arr[0];
            arr[0] = first;
        }
    }

    if(arr[0] <= 2){
        if(first <= 1){
            for(let i = 1; i < 4; i++){
                if(arr[i] > second && arr[i] <= 9){
                    second = arr[i];
                    arr[i] = arr[1];
                    arr[1] = second;
                }
            }
        }
        else{
            for(let i = 1; i < 4; i++){
                if(arr[i] > second && arr[i] <= 3){
                    second = arr[i];
                    arr[i] = arr[1];
                    arr[1] = second;
                }
            }
        }

        if(arr[0] == 2 && arr[1] <= 3){
            for(let i = 2; i < 4; i++){
                if(arr[i] > third && arr[i] <= 5){
                    third = arr[i];
                    arr[i] = arr[2];
                    arr[2] = third;
                }
            }
            if(arr[2] <= 5)
                finalAnswer = `${arr[0]}${arr[1]}:${arr[2]}${arr[3]}`;
            else
                finalAnswer = "error";
        }
        else if(arr[0] <= 1 && arr[1] <= 9){
            for(let i = 2; i < 4; i++){
                if(arr[i] > third && arr[i] <= 5){
                    third = arr[i];
                    arr[i] = arr[2];
                    arr[2] = third;
                }
            }
            if(arr[2] <= 5)
                finalAnswer = `${arr[0]}${arr[1]}:${arr[2]}${arr[3]}`;
            else
                finalAnswer = "error";
        }
        else
            finalAnswer = "error";
    }
    else
        finalAnswer = "error";


    kru2.innerHTML = finalAnswer;
    console.log(finalAnswer);
}