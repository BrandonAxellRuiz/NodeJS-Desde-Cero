const argv = require('yargs')
    .command('create', 'Create an element',{
        description: {
            demand: true,
            alias: 'd',
            desc: 'Description for create work'
        }
    })
    .command('update', 'Update a state of complete work', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Description of task to do'
        },
        complete: {
            default: true,
            alias: 'c',
            desc: 'Select as completed or pend the task'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};