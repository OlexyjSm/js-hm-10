let person = {
    name: "",
    age: 0,
    gender: "",
    introduce: function() {
      return `Мене звати ${this.name}, мені ${this.age} років я ${this.gender}`;
    },
    changeName: function(newName) {
      this.name = newName;
    }
  };

  
  
  person.name = "Іван";
  person.age = 25;
  person.gender = "чоловік";
  console.log(person.introduce()); 
  
  person.changeName("Петро");
  console.log(person.introduce()); 
  