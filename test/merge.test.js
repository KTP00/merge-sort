"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("../src/merge");
describe('merge', () => {
    it('should merge and sort 3 collections correctly', () => {
        const c1 = [1, 3, 5];
        const c2 = [9, 6, 2];
        const c3 = [0, 4, 8];
        const result = (0, merge_1.merge)(c1, c2, c3);
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 8, 9]);
    });
    it('should work with empty arrays', () => {
        expect((0, merge_1.merge)([], [], [])).toEqual([]);
        expect((0, merge_1.merge)([1, 2], [], [])).toEqual([1, 2]);
        expect((0, merge_1.merge)([], [5, 3], [])).toEqual([3, 5]);
    });
    it('should handle duplicates', () => {
        const result = (0, merge_1.merge)([1, 2], [3, 2, 1], [2, 3]);
        expect(result).toEqual([1, 1, 2, 2, 2, 3, 3]);
    });
});
