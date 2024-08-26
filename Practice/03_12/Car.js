/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Car {
  constructor(
    // Defines parameters:
    name,
    company,
    model,
    color,
    ownerFN,
    ownerLN
  ) {
    // Define properties:
    this.name = name;
    this.company = company;
    this.model = model;
    this.color = color;
    this.owner = {
      firstName : ownerFN,
      lastName : ownerLN
    };
    // this.changeOwner = function(FN, LN){
    //   this.owner.firstName = FN;
    //   this.owner.lastName = LN;
    // }
  }
  
  // Add methods like normal functions:
  changeOwner(FN, LN){
    this.owner.firstName = FN;
    this.owner.lastName = LN;
  }
}

export default Car;
