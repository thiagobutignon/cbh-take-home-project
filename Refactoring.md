# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
- I have created several helper functions that can be reused whenever new features need to be implemented. Here are a few examples:
- `isString`: This function helps determine if a value is of the string type. It eliminates the need for unnecessary type checks.

- `stringify`: This function handles the conversion of values to a string using `JSON.stringify`. It ensures consistency when generating the partition key.

- `createHashAdapter`: This function abstracts the hashing logic, making it easier to understand and modify if necessary. I have implemented two design patterns here: the Factory design pattern and the Adapter pattern. The Factory pattern ensures that the calls related to the crypto library are instantiated only once, while the Adapter pattern allows for easy replacement of this library in the future. JavaScript and frameworks/packages tend to evolve rapidly, so having this flexibility is valuable.
- In the end, I have removed some unnecessary logic related to the `if` conditions. The code was difficult to read and understand, as it was redundantly checking validations in certain cases.