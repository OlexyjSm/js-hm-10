let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    speed: 100,
  
    showInfo: function() {
      console.log(`Марка: ${this.brand}; Модель: ${this.model}; Рік випуску: ${this.year};`);
    }
  };
  
  let location = {
    city: "Київ",
    distance: 300
  };
  
  function showTime(car, location) {
    let time = location.distance / car.speed;
    console.log(`Автомобіль ${car.brand}, марки ${car.model} дістанеться міста ${location.city} за ${time} годин`);
  }
  
  car.showInfo();
  showTime(car, location);
  