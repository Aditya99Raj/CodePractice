
// Check two  strings are anagram or not

// what is anagram?
// anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

let a="masai";
let b="iasam";

// check a is anagram of b or not

// first method is using object 

let obj={};

for(let i=0 ; i<a.length ; i++){
    let cur=a[i];
    if(obj[cur]){
        obj[cur]=obj[cur]+1;
    }
    else{
        obj[cur]=1;
    }
}

// console.log(CheckAnagram(b));

function CheckAnagram(b){
    if(a.length!==b.length){
        return false;
    }
    let obj1={};
    for(let i=0 ; i<b.length ; i++){
        let cur=b[i];
        if(obj1[cur]){
            obj1[cur]=obj1[cur]+1;
        }
        else{
            obj1[cur]=1;
        }
    }
    for(let key in obj){
        if(obj[key]!=obj1[key]){
            return false;
        }
    }
    return true;

}

// useing these method to solve this problem but time complexity is O(n) and space complexity is O(n)
