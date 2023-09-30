const {Circle, Square, Triangle} = require("./shapes");

describe("Circle", () => {
    test("renders circle correctly", () => {
      const expectedCircleSvg = '<circle cx="150" cy="100" r="80" fill="red" />';
      const shape = new Circle();
      shape.setColor("red");
      const circleSvg = shape.render();
      expect(circleSvg).toEqual(expectedCircleSvg);
    });
});
describe("Square", () => {
    test("renders square correctly", () => {
      const expectedSquareSvg = '<rect x="90" y="40" width="120" height="120" fill="blue" />';
      const shape = new Square();
      shape.setColor("blue");
      const squareSvg = shape.render();
      expect(squareSvg).toEqual(expectedSquareSvg);
    });
});
describe("Triangle", () => {
    test("renders Triangle correctly", () => {
      const expectedTriangleSvg = '<polygon points="150, 18 244, 182 56, 182" fill="green" />';
      const shape = new Triangle();
      shape.setColor("green");
      const triangleSvg = shape.render();
      expect(triangleSvg).toEqual(expectedTriangleSvg);
    });
});