export { profile };

const profile = {
    
    name: "Joemar Questadio",

    title: "Web Developer",

    location: "Strongsville, Ohio USA",

    hardworker: true,

    quicklearner: true,

    criticalthinker: true,

    problemSolver: true,

    reliable: true,
    
    hireable: function() {
        return ( 
        this.hardworker && 
        this.quicklearner && 
        this.criticalthinker && 
        this.problemSolver && 
        this.reliable);
    }
};




