const $npm = {
  createTestCafe: require('testcafe'),
  config: require('./config.json')
};
let testcafe = null;

$npm
  .createTestCafe('localhost', 1337, 1338)
  .then(tc => {
    testcafe = tc;
    const runner = testcafe.createRunner();

    return runner
      .src($npm.config.settings.fixtures)
      .browsers($npm.config.settings.browsers)
      .run($npm.config.runSettings);
  }).then(failedCount => {
    console.log('Tests failed: ' + failedCount);
    testcafe.close();
    process.exit(0);
  }).catch((er) => {
    console.error(er);
    testcafe.close();
    process.exit(1);
  });
