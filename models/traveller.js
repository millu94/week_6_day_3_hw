const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((start) => start.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((end) => end.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => journey.distance >= minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => total += journey.distance);
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
