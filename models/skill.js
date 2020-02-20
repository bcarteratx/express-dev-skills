const skills = [
    {skill: 'JavaScript', learned: true, timesCried: 2},
    {skill: 'HTML/CSS', learned: true},
    {skill: 'Node.js', learned: false},
    {skill: 'Express.js', learned: false}
// add another key/value and display on view
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}