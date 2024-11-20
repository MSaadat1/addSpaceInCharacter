// adding space between characters in a string by an index
// to solve this coding problem :
// there are two parameters in a function , first is the string and second is the index
// (split) and (reduce) method and (if condition) are using for this code challenge
// first split the string and with reduce method , the accumulator, current value and i = index are used
// inside the (if condition) if i is bigger than 0 and i % the index of parameter of function is equal 0
// " " space is adding to accumulator
// with the accumulator, the current value adds
// example "hello" with index of 2 means after each two characters there is a space
// i         character      condition(i % 2 === 0)   updated accumulator
// 0         h               false                    h
// the condition is false because 0 % 2 is not equal 0 so no space
// 1         e               false                    he
// 2         l               true                     he l
// 3         l               false                    he ll
// 4         0               true                     he ll o
function addSpaceBetweenChar(s, index){
    return s.split("").reduce((acu, cur, i)=>{
        if(i > 0 && i % index === 0){
            acu += " "
        }
       return  acu + cur;
    }, "");
}

console.log(addSpaceBetweenChar("hello", 2));