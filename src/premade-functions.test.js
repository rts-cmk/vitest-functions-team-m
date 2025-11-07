import { describe, expect, it } from "vitest";
import { findLongestWord, charCount, mergeSortedArrays, groupBy, debounce } from "./premade-functions.js";

describe("findLongestWord", () => {

    it("should recieve a string and return the longest word", () => {
        expect(findLongestWord("The quick brown fox jumps over the lazy dog")).toBe("quick");
    });

    it("should return an empty string if the sentence is empty", () => {
        expect(findLongestWord("")).toBe("");
    });
});

describe("charCount", () => {
    it("should count occurrences of each character in a string", () => {
        expect(charCount("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    });

    it("should return an empty object for an empty string", () => {
        expect(charCount("")).toEqual({});
    });
});

describe("mergeSortedArrays", () => {
    it("should merge two sorted arrays into one sorted array", () => {
        expect(mergeSortedArrays(
            [1, 3, 5],
            [2, 4, 6]
        )).toEqual(
            [1, 2, 3, 4, 5, 6]
        );
    });

    it("should handle arrays of different lengths", () => {
        expect(mergeSortedArrays(
            [1, 2], 
            [3, 4, 5, 6]
        )).toEqual(
            [1, 2, 3, 4, 5, 6]
        );
    });
});

describe("groupBy", () => {
    it("should group objects by a property", () => {
        const arr = [
            { name: "Alice", age: 25 },
            { name: "Bob", age: 30 },
            { name: "Charlie", age: 25 }
        ];
        expect(groupBy(arr, "age")).toEqual({
            25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }],
            30: [{ name: "Bob", age: 30 }]
        });
    });

    it("should return an empty object for an empty array", () => {
        expect(groupBy([], "age")).toEqual({});
    });
});

describe("debounce", () => {
    it("should delay function execution", async () => {
        let callCount = 0;
        const func = () => { callCount++; };
        const debouncedFunc = debounce(func, 100);
        
        debouncedFunc();
        expect(callCount).toBe(0);
        
        await new Promise(resolve => setTimeout(resolve, 150));
        expect(callCount).toBe(1);
    });

    it("should cancel previous calls when called multiple times", async () => {
        let callCount = 0;
        const func = () => { callCount++; };
        const debouncedFunc = debounce(func, 100);
        
        debouncedFunc();
        debouncedFunc();
        debouncedFunc();
        
        await new Promise(resolve => setTimeout(resolve, 150));
        expect(callCount).toBe(1);
    });
});
