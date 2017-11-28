import {default as bar} from "../src/bar" ;



test('Welcome Text is accurate', () => {


    expect(
        bar()
    ).toBe("A warm Welcome from the bar package !")



});


