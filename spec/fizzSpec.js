describe("FizzBuzz Game", function() {
    describe("fizzBuzzFunction", function() {

        beforeEach(function() {
        check = new fizzBuzz();
        });

        it("test if fizzBuzz defined", function() {
           expect(fizzBuzz).toBeDefined
        }); 
        
        it("check number 15", function() {
            let result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });

        it("check number 9", function() {
            let result = fizzBuzz(9)
            expect(result).toBe("Fizz");
        });

        it("check number 10", function() {
            let result = fizzBuzz(10)
            expect(result).toBe("Buzz");
        });

        it("check number 11", function() {
            let result = fizzBuzz(11)
            expect(result).toBe(11);
        });        
    });
});