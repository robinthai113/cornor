const { exec } = require('child_process');
const pLimit = require('p-limit');

const groups = process.argv.slice(2);


const runTag = (tag) => {
    return new Promise((resolve, reject) => {
        console.log(`Running command: npm test --TAGS="${tag}"`);
        const process = exec(`npm test --TAGS="${tag}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing ${tag}: ${error.message}`);
                reject(`Failed: ${tag}`);
            } else {
                console.log(stdout);
                resolve(`Passed: ${tag}`);
            }
        });


        process.stdout.on('data', (data) => console.log(`stdout: ${data}`));
        process.stderr.on('data', (data) => console.error(`stderr: ${data}`));
    });
};

// Function to run all tags in a group sequentially
const runGroupSequentially = async (group) => {
    const promises = group.map(tag => runTag(tag));
    const results = await Promise.allSettled(promises);

    results.forEach((result) => {
        if (result.status === 'fulfilled') {
            console.log(`Success: ${result.value}`);
        } else {
            console.error(`Failure: ${result.reason}`);
        }
    });

    return 'Group completed with some possible failures';
};


const runAllGroups = async () => {
    const limit = pLimit(2);
    const groupPromises = groups.map(group => {
        const tags = group.split(',');
        return limit(() => runGroupSequentially(tags));
    });

    try {
        const results = await Promise.allSettled(groupPromises);
        results.forEach((result) => {
            if (result.status === 'fulfilled') {
                console.log(`Group Success: ${result.value}`);
            } else {
                console.error(`Group Failure: ${result.reason}`);
            }
        });
    } catch (err) {
        console.error('Unexpected error during group execution', err);
        process.exit(1);
    }
};

// Start the script
runAllGroups();
