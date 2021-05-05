const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((start) => start.startLocation);
};

//films.map - on the films object, call the map function
// map function takes another function as an argument - (film) => film.title)
// return films.map((film) => film.title);
 
// }
// Cinema.prototype.filmTitles = function () {
//   return this.films.map((film) => {
//     return film.title;
//   });
// };




Traveller.prototype.getJourneyEndLocations = function () {

};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
