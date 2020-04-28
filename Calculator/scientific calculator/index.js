const addition=(x,y)=>{

    console.log("This is addition of"+" "+x+" "+"and"+" "+y);
return (x+y);
}

const subtraction=(x,y)=>{

    console.log("This is subtraction of"+" "+x+" "+"and"+" "+y);
    if(x>y)
    {
    return (x-y);
    }
    else{
    return (y-x);
    }
}
const multiplication=(x,y)=>{

        console.log("This is multiplication of"+" "+x+" "+"and"+" "+y);
        return (x*y);
}

const division=(x,y)=>{

    console.log("This is division of"+" "+x+" "+"and"+" "+y);
            if(y!=0)
            {
                return (x/y);
            }
            else
            {
            return "Error: Divide by zero";
            }
}
const square=(x)=>{

 console.log("This is squaring of number"+" "+" "+x);
 return (x*x);
}
const cube=(x)=>{
    console.log("This is for cube of number"+" "+" "+x)
    return (x*x*x);
}


module.exports={addition, subtraction, multiplication, division, square, cube }