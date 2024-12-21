# Unexpected Behavior in Addition Function with Zero Input

This repository demonstrates a subtle bug in a seemingly simple JavaScript addition function. The function `foo` is intended to add two numbers, but it exhibits unexpected behavior when either input is 0.

## Bug Description

The function incorrectly returns 0 when either `a` or `b` is 0, regardless of the value of the other input. This is a deviation from the expected behavior of adding numbers.

## Bug Reproduction

1. Clone this repository.
2. Open `bug.js`.
3. Run the file using a JavaScript runtime (e.g., Node.js).
4. Observe the unexpected output.

## Solution

The `bugSolution.js` file provides a corrected version of the function that handles the edge case of 0 input correctly. The solution clarifies the logic to ensure accurate addition regardless of the inputs. 

## Lessons Learned

This example highlights the importance of thorough edge case testing during software development. Seemingly trivial functions can contain hidden bugs that lead to unexpected behavior if not handled properly. Paying close attention to potential edge cases can prevent unexpected outcomes and improves software reliability.