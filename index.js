// Code your solution in this file
const returnFirstTwoDrivers = (function(drivers) {
    return [drivers[0], drivers[1]]
})
const returnLastTwoDrivers = (function(drivers) {
    return [drivers[2], drivers[3]]
})
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num) => (fare) => num * fare

const fareDoubler = (fare) => fare * 2

const fareTripler = (fare) => fare * 3

function selectDifferentDrivers(names, fn) {
    return fn(names)
}
