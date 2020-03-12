let restaurant = {
    name: 'Torchys Tacos',
    guestCapacity: 75,
    guestCount: 0,
    checkavailablity: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

// A method is a property who's value is a function
restaurant.seatParty(72)
console.log(restaurant.checkavailablity(4))
restaurant.removeParty(5)
console.log(restaurant.checkavailablity(4))
