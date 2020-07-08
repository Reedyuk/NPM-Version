const core = require("@actions/core");
const exec = require('child_process').exec;

async function run() {
    const version = core.getInput("version");
    const package = core.getInput("package");

    const child = exec("npm version " + version + " --no-git-tag-version", (error, stdout, stderr) => {
        if(error != null) {
            core.setFailed(error);
        }
        if(stderr != null) {
            core.setFailed(stderr);
        }
        console.log(stdout);
    });
}

run();