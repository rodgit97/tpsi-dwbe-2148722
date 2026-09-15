//3
//a
class Person {
  constructor(firstName, lastName) {
    //b
    this.firstName = firstName;
    this.lastName = lastName;
    //c
    this.prototype.greet = function () {
      console.log = "Hello," + " " + this.firstName + " " + this.lastName;
    };
    Person.prototype.age = 0;
    //d
    var person1 = new person("Pão", "Lô", "25");
    person1.greet();
    var person2 = new person("Maria", "Joana", "24");
    person2.greet();

    //e
    this.age = age;
    //h
    this._proto_ = { age: 0 };

    console.log(person1._proto_);
    console.log(person2._proto_);
    console.log(person1._proto_);
  }
}
