const core = require("@actions/core");
const exec = require('child_process').exec;

async function run() {
    const version = core.getInput("version");
    const gitTagVersion = core.getInput("git-tag-version") ?? false;
    const package = core.getInput("package").replace("package.json", "");

    const child = exec("npm version " + version + " --prefix " + package + " " + (!gitTagVersion ? "--no-git-tag-version" : ""), (error, stdout, stderr) => {
        if(error != null) {
            core.setFailed(error);
        }
        if(stderr != null) {
            console.log(stderr);
        }
        console.log(stdout);
    });
}

run();