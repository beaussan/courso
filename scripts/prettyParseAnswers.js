const { read, write } = require('fs-jetpack');

(async function () {
  const data = read('./old_answers.json', 'json');
  const prettyData = data[0].map((item) => {
    return {
      studentEmail: item[2],
      cowSay: item[10],
      pythonShell: item[11],
      toRun: item[12],
      curly: item[13],
      pythonApp: item[14],
      dockerHubUrl: item[15],
      dockerCompose: item[16],
    };
  });
  write('prettyStudentData.json', prettyData);
  console.log(prettyData[0]);
  console.log('Done.');
  process.exit(0);
})();
