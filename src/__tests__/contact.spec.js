function filterByTerm(inputArr, searchTerm) {
    return inputArr.filter(function(arrayElement) {
      return arrayElement.message.match(searchTerm);
    });
  }
  
  describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
      const input = [
        { id: 1, name: "https://www.url1.dev" },
        { id: 2, email: "https://www.url2.dev" },
        { id: 3, message: "https://www.link3.dev" }
      ];
  
      const output = [{ id: 3, message: "https://www.link3.dev" }];
  
      expect(filterByTerm(input, "message")).toEqual(output);
    });
  });