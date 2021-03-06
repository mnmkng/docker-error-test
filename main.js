// This is the main Node.js source code file of your actor.
// It is referenced from the "scripts" section of the package.json file.

const Apify = require('apify');

Apify.main(async () => {
    // Get input of the actor.
    // If you'd like to have your input checked and generate a user
    // interface for it, add INPUT_SCHEMA.json file to your actor.
    // For more information, see https://docs.apify.com/actor/input-schema
    const input = await Apify.getInput();
    console.log('Input:');
    console.dir(input);

    // Do something useful here...

    // Save output
    const output = {
        receivedInput: input,
        message: 'Hello sir!',
    };
    console.log('Output:');
    console.dir(output);
    await Apify.setValue('OUTPUT', output);
});