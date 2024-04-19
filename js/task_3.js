let students = [
    { name: "Олександр", age: 20, rating: 75 },
    { name: "Анна", age: 22, rating: 85 },
    { name: "Ігор", age: 21, rating: 90 }
  ];
  
  // Додавання методу вітання до кожного студента
  students.forEach(student => {
    student.greet = function() {
      return `Привіт, я ${this.name}!`;
    };
  });
  
  // Вивід привітань з кожним студентом
  let greetings = students.map(student => student.greet());
  console.log(greetings);
  
  // Фільтрація студентів за рейтингом
  let highRatingStudents = students.filter(student => student.rating > 80);
  console.log(highRatingStudents);
  
  // Функція для додавання рейтингу
  function addRating(points) {
    this.rating += points;
  }
  
  // Виклик функції addRating для кожного студента
  students.forEach(student => {
    addRating.call(student, 10); // Додаємо 10 балів до рейтингу кожного студента
  });
  
  // Виведення нового масиву зі зміненими рейтингами
  console.log(students);
  