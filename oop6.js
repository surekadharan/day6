//convert uml diagram to typescript class
 class Circle1{
  
    constructor(radius,color)
    {
      this.radius=radius;
      this.color=color;}
      setRadius()
      {
        return `The radius of the circle is ${this.radius}`;
      }
      setColor()
      {
        return `The color of the circle is ${this.color}`;
        }
        getArea()
        {
          const PI=3.14;
        
        let area=PI*(this.radius*this.radius);
        return area;
        }
        getCircumference()
        {
          let cir=2*3.14*this.radius;
          return cir;
        }
  }
        var c1=new Circle1(1.0,"red");
        console.log(c1.setRadius());
        console.log(c1.setColor());
        console.log(c1.getArea());
        console.log(c1.getCircumference());

      //  output:
        The radius of the circle is 1
        The color of the circle is red
        3.14
        6.28

      // The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
       class Movie{
           //a.
            constructor(title,studio,rating)
            {
              this.title=title;
              this.studio=studio;
              this.rating=rating;
            }
            //b.
            constructor(title,studio)
            {
              this.title=title;
              this.studio=studio;
              this.rating="PG";
            }
           //c.
            getPG( mov)
            {
              var pgmov=new movie[mov.length];
              var newArrayIndex=0;
              for(var i=0;i<mov.length;i++)
              {
                if(mov[i].ratings.equals("PG"))
                {
                  pgmov[newArrayIndex]=mov[i];
                  newArrayIndex++;
                }
              }
              return pgmov;
            }
          }
          //d.
          var mov=new Movie(“Casino Royale”, “Eon Productions”, “PG.13);

        //Write a “person” class to hold all the details.
  class Person
{
  constructor(firstname,lastname,age)
  {
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
  }
  getFullname()
  {
    return `${this.firstname} ${this.lastname}`;
  }
}
var p=new Person("sureka","gowtham",30);
console.log(p.getFullname());
//output: sureka gowtham

//write a class to calculate uber price
class Uber{
  constructor(distance,time)
  {
    this.distance=distance;
    this.time=time;
    this.costPerMinute=1.00;
  }
  getprice()
  {
 return this.distance*this.costPerMinute;
  }
}
var u=new Uber(18,10);
console.log(u.getprice());

//output:18