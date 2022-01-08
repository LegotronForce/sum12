import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
    .version().alias('v', 'version')
    .help().alias('h', 'help')
.argv;