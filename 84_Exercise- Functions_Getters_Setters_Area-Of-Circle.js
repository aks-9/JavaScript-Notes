//Area of circle.
const circle = { 
  radius: 1 ,

  set setRadius(value) {
    this.radius = value;
  },
  get area(){
    const area = Math.PI * this.radius**2;
    return area;
  }
};

console.log(circle.area); //Getting the area.

circle.setRadius = 2; // Setting the new radius.

console.log(circle.area); //Getting the new area.