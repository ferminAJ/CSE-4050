var side1 = 11
var side2 =5
var side3=5

if (side1 > side2 + side3 || side2 > side1 +side3 || side3 > side1 + side2)
{
    console.log("Not a triangle.")
}

else if(side1 == side2 && side1 == side3)
{
    console.log("This is an equilateral triangle.")
}

else if(side1 == side2 || side1  == side3 || side2 == side3)
{
    console.log("This is an isosceles triangle. "
    )
}

else
{
    console.log("This is a scaline triangle.")
}