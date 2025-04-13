const { execSync } = require('child_process');
const semver = require('semver');
const packageJson = require('../package.json');

function checkNodeVersion() {
    const currentVersion = process.version;
    const requiredVersion = packageJson.engines.node;

    if (!semver.satisfies(currentVersion, requiredVersion)) {
        console.error(`⚠️ Node.js version issue detected!`);
        console.error(`Current version: ${currentVersion}`);
        console.error(`Required version: ${requiredVersion}`);
        console.error(`Please run 'nvm use' to switch to the correct version`);
        process.exit(1);
    }
    console.log('✅ Node.js version check passed');
}

function checkForUpdates() {
    try {
        console.log('📦 Checking for dependency updates...');
        // Check if node_modules exists
        try {
            require.resolve('../node_modules');
        } catch (e) {
            console.log('Installing dependencies...');
            execSync('npm install', { stdio: 'inherit' });
            return;
        }

        const output = execSync('npm run check-updates', { encoding: 'utf8' });
        if (output.includes('All dependencies match the latest package versions')) {
            console.log('✅ All dependencies are up to date');
        } else {
            console.log('⚠️ Updates available. Run "npm run update-deps" to update.');
        }
    } catch (error) {
        console.error('❌ Error checking for updates:', error.message);
        // Don't exit process, just warn
        console.log('Continuing with startup...');
    }
}

try {
    checkNodeVersion();
    checkForUpdates();
} catch (error) {
    console.error('❌ Startup check failed:', error.message);
    // Continue anyway to allow app to run
    console.log('Continuing despite checks failing...');
}
