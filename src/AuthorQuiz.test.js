function Hello(props) {
    return <h1>Hello at {props.now}</h1>;
}

describe("When setting up testing", () => {
    it("should fail", () => {
        expect(1 + 1).toBe(2);
    });
})