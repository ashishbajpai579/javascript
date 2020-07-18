var john = {
    fullName : 'JOHN WICK',
    height: 169,
    mass: 80,
    johnBMI :  function(){
        this.BMI=this.mass / (this.height * this.height);
        return this.BMI;    
    }

}

var mark = {
    fullName : 'MARK ANDRESON',
    height: 179,
    mass: 89,
    markBMI :  function(){
 this.BMI=this.mass / (this.height * this.height);
 return this.BMI;    
}

}

if(john.johnBMI< mark.markBMI){
    console.log(mark.fullName + ' has higher BMI than ' + john.fullName);
}else if
    (john.johnBMI< mark.markBMI){
        console.log(mark.fullName + +' and ' + john.fullName + ' has equal BMI  ');
}
else{
    console.log(john.fullName + ' has higher BMI than ' + mark.fullName);
}
console.log(john);
console.log(mark);
john.johnBMI();