# Trapping Rain Water

## The Challenge
[Trapping Rain Water - Leetcode](https://leetcode.com/problems/trapping-rain-water/)

## Thought Process
First, find all the viable peaks in the graph. A peak is viable if it is the highest point to the left and right of each column in the graph.

Each column will have a pair of left and right peaks. Get the lowest of the two peak heights to get the max holding capacity for that section. Cycle through all the columns, subtracting their respective heights from the maximum height possible and return the sum.