const removeDuplicates=(numbers:number[]):number[]=>{
   let uniqueValues:number[]=[];
    for(let i=0;i<numbers.length;i++)
   {
    let isduplicate=false;
    for(let j=0;j<uniqueValues.length;j++)
    {
        if(numbers[i]===uniqueValues[j])
        {
            isduplicate=true;
            break;
        }
    }
    if(!isduplicate)
    {
        uniqueValues.push(numbers[i]);
    }
     
   }

   return uniqueValues;
}
