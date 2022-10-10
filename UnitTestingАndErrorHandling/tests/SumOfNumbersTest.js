const sumOfNums = require('../SumOfNumber');
const { expect } = require('chai');

describe('sum', () => {
    it('should be equal to 10', () => {
        // Arrange
        let arr = [1,2,3,4];

        // Act 
        let res = sumOfNums.sum(arr);

        // Assert
        expect(res).to.be.equal(10);
    })
})