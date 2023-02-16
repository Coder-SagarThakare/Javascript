function subtract (a,b,c) {

    const s = 6;

    return {
        subtract2Digit(){
            a= s+1;
            return a-b-s;
        },
        subtract3Digit(){
            return a-b-c;
        }
    }
}

var ans = subtract(100,20,30)

console.log(ans);
console.log(ans.subtract2Digit());
console.log(ans.subtract3Digit());