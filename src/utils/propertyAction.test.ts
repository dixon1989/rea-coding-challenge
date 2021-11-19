import {
  addToSavedProperties,
  removeFromSavedProperties,
} from "./propertyAction";

describe("Making sure add an remove function initiated successfully", () => {
  it("Should add results to saved properties and results item should be removed as well", async () => {
    const lists = {
      results: [
        {
          price: "$726,500",
          agency: {
            brandingColors: {
              primary: "#ffe512",
            },
            logo: "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif",
          },
          id: "1",
          mainImage:
            "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg",
        },
      ],
      saved: [],
    };

    const item = {
      price: "$726,500",
      agency: {
        brandingColors: {
          primary: "#ffe512",
        },
        logo: "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif",
      },
      id: "1",
      mainImage:
        "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg",
    };

    const expectedResults = {
      results: [],
      saved: [
        {
          price: "$726,500",
          agency: {
            brandingColors: {
              primary: "#ffe512",
            },
            logo: "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif",
          },
          id: "1",
          mainImage:
            "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg",
        },
      ],
    };

    const mock = await addToSavedProperties(lists, item, 0);
    expect(mock).toEqual(expectedResults);
  });

  it("Should remove results from saved properties and saved property item should be removed as well", async () => {
    const lists = {
      results: [],
      saved: [
        {
          price: "$726,500",
          agency: {
            brandingColors: {
              primary: "#ffe512",
            },
            logo: "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif",
          },
          id: "1",
          mainImage:
            "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg",
        },
      ],
    };

    const item = {
      price: "$726,500",
      agency: {
        brandingColors: {
          primary: "#ffe512",
        },
        logo: "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif",
      },
      id: "1",
      mainImage:
        "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg",
    };

    const expectedResults = {
      results: [
        {
          price: "$726,500",
          agency: {
            brandingColors: {
              primary: "#ffe512",
            },
            logo: "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif",
          },
          id: "1",
          mainImage:
            "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg",
        },
      ],
      saved: [],
    };

    const mock = await removeFromSavedProperties(lists, item, 0);
    expect(mock).toEqual(expectedResults);
  });
});
