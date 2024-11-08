{
    type T = {
    name: string;
    age: number;
    email: string;
  };
  
  const validateKeys = <T, K extends keyof T>(obj: T, keys: K[]): boolean => {
    for (let i = 0; i < keys.length; i++) {
      if (obj[keys[i]] === undefined) {
        return false;
      }
    }
    return true;
  };
  
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"])); 
  
}