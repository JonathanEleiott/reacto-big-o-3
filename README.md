# REACTO & Big O Notation

## REACTO

- R - Restate the question
  - rephrase the question in your own words
  - make sure you fully understand the question by asking more questions
- E - Examples
  - representative of the inputs and outpus
  - 3-5 examples
  - start with an easy/simple example
  - make sure each example is unique
  - WRITE YOUR EXAMPLES DOWN - we'll use them later
  - consider edge cases
  - consider errors
- A - Approach
  - come up with a conceptual solution
  - DON'T CODE YET!!!!!
  - use pseudocoding to make a step by step plan
  - you can pass an interview by only getting through this step
  - make sure your approach works for each of your examples
- C - Code / T - Test
  - translate your approach into working code
  - TEST AS YOU GO!
  - use examples from the Examples step
  - ensure that your code works for all examples
- O - Optimize
  - only if the code works
  - is there a more concise way to write the code?
  - are there built-in methods that could help?
  - does your code make sense to other devs?
  - is there a more optimal approach?
  - Big O Notation

## Big O Notation

- how many computations a function will complete BASED ON the size of the input, NOT how long in seconds
- worst case scenarios

Constant -> O(1)

- always has the same amount of computations no matter the size of the input
- just setting a variable or just returning something

Linear -> O(n)

- computations grow proportionally to the size of the input
- for loop

Quadratic - O(n^2)

- grows at a quadratic pace
- nested for loop

Logarithmic - O(log n)

- grows at a slower pace than linear (generally amount of computations get cut in half each time)
- binary search