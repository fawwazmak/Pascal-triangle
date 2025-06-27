PASCAL'S TRIANGLE GENERATOR
AIM
Demonstrate understanding of mathematical logic and clean documentation by generating Pascal's Triangle up to a specified number of rows.

OBJECTIVE
Create a function that accepts an integer and returns Pascal's Triangle up to that number of rows, represented as a list of lists (each inner list is a row).

Example:

Input: 3
Output: [[1], [1, 1], [1, 2, 1]]


APPROACH AND LOGIC
Pascal's Triangle is a triangular array of the binomial coefficients. Each row represents the coefficients of the binomial expansion (a + b)^n.


RULES TO GENERATE IT:

The first and last elements of every row are 1.

Each interior element is the sum of the two elements directly above it.

Step-by-step generation:

1. Start with the first row: [1].
2. For each subsequent row:

Begin with 1.

For positions in the middle, add the two numbers above it from the previous row.

End with 1.
3. Repeat until the desired number of rows is generated.

Example for 4 rows:

less
Copy
Edit
Row 1:        [1]
Row 2:      [1, 1]
Row 3:    [1, 2, 1]
Row 4:  [1, 3, 3, 1]