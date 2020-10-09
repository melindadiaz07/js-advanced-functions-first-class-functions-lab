const returnFirstTwoDrivers = (array) => {
 return array.slice(0, 2)
 }

 const returnLastTwoDrivers = (array) => {
  return array.slice(-2)
  }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 function createFareMultiplier(int){
  return (fare) => fare * int
 }


const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driversArray, driversFn){
  return driversFn(driversArray)
}