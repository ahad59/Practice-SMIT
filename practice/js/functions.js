function letshandshake(handOne, handTwo) {
  const handshake = handOne + handTwo;
  console.log(handOne, handTwo);
  console.log("Handshake Completed", letshandshake);
  return letshandshake;
 }

 const result = letshandshake(1, 4);
 console.log(result);


 function fruitProcessor(apple, orange) {
  const juice = `Juice with ${apple} apple and ${orange} orange`;
  return juice;
}

 const time = 6

 switch (time) {
   case 6:
     const item1 = fruitProcessor(1, 1);
     console.log(item1);
     break

   case 18:
     const item2 = fruitProcessor(2, 2);
     console.log(item2);
     break

   default:
     console.log("Chup krke bethe raho");
     break;
 }

 // update | insert, upsert
const student111 = {
  name: "Rehan",
  age: 30,
  gender: "M",
  qualification: "Intermediate",
  rollNo: "WSS-001",
  push: function () {},
};

 student111.fullName = "Allah wala";
 student111.age = 31

 student111.fullName

 //delete student111.age

 student111.push()
 console.log(student111["name"])
 console.log(student111["fullName"])
 console.log(student111)


