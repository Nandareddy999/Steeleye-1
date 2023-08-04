const highlightHTMLContent = require('./highlightHTMLContent');

describe('highlightHTMLContent function', () => {
    

  test('should handle multiple highlight positions', () => {
    const htmlContent = `<p>Hello world!</p>`;
    const plainText = `Hello world!`;
    const plainTextPositions = [
      {
        start: 0,
        end: 5,
      },
      {
        start: 6,
        end: 11,
      },
    ];
    const expectedOutput = `<p><mark>Hello</mark> <mark>world</mark>!</p>`;

    const result = highlightHTMLContent(htmlContent, plainText, plainTextPositions);
    expect(result).toEqual(expectedOutput);
  });
  
  test('should handle overlapping highlight positions', () => {
    const htmlContent = `<p>Hello world!</p>`;
    const plainText = `Hello world!`;
    const plainTextPositions = [
      {
        start: 0,
        end: 5,
      },
      {
        start: 6,
        end: 11,
      },
    ];
    const expectedOutput = `<p><mark>Hello</mark> <mark>world</mark>!</p>`;

    const result = highlightHTMLContent(htmlContent, plainText, plainTextPositions);
    expect(result).toEqual(expectedOutput);
  });
});
