describe("Cart", function () {
    var cartService = require('../../app/scripts/services/cart');
    var cartItems;
    var cart;
    var product = { "id": 1, "name": "Whatever", "description": "Hello", "price": 500, "categories": ["Hardware"] };

    beforeEach(function () {
    });

    it("should have correct total cost", function () {
        cartItems = {};
        cart = new cartService(cartItems);
        
        cart.incrementQuantity(product);

        // Demonstrates use of custom matcher
        expect(cart.totalCost()).toHaveCorrectCost(500);
    });

    //describe("when song has been paused", function () {
    //    beforeEach(function () {
    //        cart.play(song);
    //        cart.pause();
    //    });

    //    it("should indicate that the song is currently paused", function () {
    //        expect(cart.isPlaying).toBeFalsy();

    //        // demonstrates use of 'not' with a custom matcher
    //        expect(cart).not.toBePlaying(song);
    //    });

    //    it("should be possible to resume", function () {
    //        cart.resume();
    //        expect(cart.isPlaying).toBeTruthy();
    //        expect(cart.currentlyPlayingSong).toEqual(song);
    //    });
    //});

    // demonstrates use of spies to intercept and test method calls
    //it("tells the current song if the user has made it a favorite", function () {
    //    spyOn(song, 'persistFavoriteStatus');

    //    cart.play(song);
    //    cart.makeFavorite();

    //    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    //});

    //demonstrates use of expected exceptions
    //describe("#resume", function () {
    //    it("should throw an exception if song is already playing", function () {
    //        cart.play(song);

    //        expect(function () {
    //            cart.resume();
    //        }).toThrowError("song is already playing");
    //    });
    //});
});
