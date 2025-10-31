function greetUser(
  firstName: string,
  lastName: string,
  age: number,
  hometown: string
): void {
    
  const fullName: string = `${firstName} ${lastName}`;
  console.log(
    `Hello, your name is ${fullName}.`,
    `You are ${age} years old.`,
    `And you live in ${hometown}.`
  );
}