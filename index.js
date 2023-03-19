// Code your solution here
// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(drivers, name) {
 const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
 return matchingDrivers;
}

function fuzzyMatch(drivers, letters) {
    const matchingDrivers = drivers.filter(driver => driver.startsWith(letters));
    return matchingDrivers;
}

const driversAndTown = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(driversAndTown, name) {
    const matchingDrivers = driversAndTown.filter(driver => driver.name === name);
    return matchingDrivers;
  }