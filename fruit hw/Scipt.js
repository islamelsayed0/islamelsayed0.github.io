var fruitsData = [
    {name: "Apple", quantitySold: 20, displayColor: "red"},
    {name: "Orange", quantitySold: 10, displayColor: "orange"},
    {name: "Banana", quantitySold: 15, displayColor: "yellow"},
    {name: "Kiwi", quantitySold: 5, displayColor: "green"},
    {name: "Blueberry", quantitySold: 5, displayColor: "blue"},
    {name: "Grapes", quantitySold: 10, displayColor: "purple"}
];

var chartCanvas = document.getElementById("fruitChart");
var context = chartCanvas.getContext("2d");
//  doing the postion for the chart  and let it run throught the loop 
var maxQuantitySold = Math.max(...fruitsData.map(fruit => fruit.quantitySold));
var scaleFactor = (chartCanvas.width - 100) / maxQuantitySold; 
var barHeight = 30;
var gapBetweenBars = 10; 
var startYPosition = 20; 
// draws the bar for each loop
fruitsData.forEach(function(fruit) {
    context.fillStyle = fruit.displayColor;
    context.fillRect(0, startYPosition, fruit.quantitySold * scaleFactor, barHeight);
    context.fillStyle = "black";
    context.fillText(fruit.name + ": " + fruit.quantitySold, fruit.quantitySold * scaleFactor + 5, startYPosition + barHeight / 2 + 5);
    startYPosition += barHeight + gapBetweenBars;
});
