const skills = [
    {id: 125223, skill: 'HTML', add_to_resume: true},
    {id: 127904, skill: 'CSS', add_to_resume: true},
    {id: 139608, skill: 'JavaScript', add_to_resume: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll(){
    return skills;
}

function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.add_to_resume = false
    skills.push(skill)
}

function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}