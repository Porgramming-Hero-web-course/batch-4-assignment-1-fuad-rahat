type Circle={
    shape:"circle",
    radius:number
}

type Rectangle={
    shape:"rectangle",
    width:number,
    height:number
}

type Shape= Circle | Rectangle;

const calculateShapeArea=(obj:Shape):number=>{
    if(obj.shape==="circle")
    {
        return parseFloat((obj.radius*obj.radius*Math.PI).toFixed(2));
    }
    else if (obj.shape==="rectangle")
    {
        return obj.width*obj.height;
    }

    return 0;
}

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  
console.log(rectangleArea);

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

console.log(circleArea);