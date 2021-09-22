 let myArr = new Array();
myArr[0] = [7];
myArr[1] = [6];
myArr[2] = [3];
myArr[3] = [9];
myArr[4] = [2];
myArr[5] = [12];

console.log(myArr)

for(i=0; i< myArr.length; i++)
{
    if(myArr[i]%2 == 0){
        console.log(`${myArr[i]} is even`);
    }
    else if(myArr[i]%3 == 0){
        console.log(`${myArr[i]} is odd`)
    }
}