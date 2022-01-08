import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
    .usage('sum12 [options] <file>')

    .version().alias('v', 'version')
    .help().alias('h', 'help')
.argv;

