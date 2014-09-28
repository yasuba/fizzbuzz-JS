describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it("knows that 3 is divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
  });

  it('knows that 1 is not divisible by 3', function(){
    expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
  });

  it('knows that 5 is divisible by 5', function(){
    expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
  });

  it('knows that 5 is not divisible by 1', function(){
    expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
  });

  it('knows that 15 is divisible by 15', function(){
    expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
  });

  it('knows that 15 is not divisible by 1', function(){
    expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
  });

  it('returns 1 for the number 1', function(){
    expect(fizzbuzz.playGame(1)).toEqual(1);
  });

  it('returns "Fizz" for the number 3', function(){
    expect(fizzbuzz.playGame(3)).toEqual("Fizz");
  });

  it('returns "Buzz" for the number 5', function(){
    expect(fizzbuzz.playGame(5)).toEqual("Buzz");
  });

  it('returns "FizzBuzz" for the number 15', function(){
    expect(fizzbuzz.playGame(15)).toEqual("FizzBuzz");
  });

}); // close describe
