// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    return `${this.uploader} watched all ${this.time}  of ${this.title}!`
  }
};
let video0 = new Video(`Hey Jude`, `Jhon Dou`, 4.6)
video0.watch()

const array = [[`Hey Jude1`, `Jhon Dou1`, 4.1],
               [`Hey Jude2`, `Jhon Dou2`, 4.2],
               [`Hey Jude3`, `Jhon Dou3`, 4.3],
               [`Hey Jude4`, `Jhon Dou4`, 4.4],
               [`Hey Jude5`, `Jhon Dou5`, 4.5]]

for (let i = 0; i < array.length; i++) {
     let video = new Video(array[i][1], array[i][2], array[i][3]);
     console.log(video)
}








