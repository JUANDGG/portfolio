function Skills(skillsData){



    const skillsList =skillsData.map(element => {
        const tempSkills  =element.keywords.join(" | ");
        return `
            <li>
                <strong>${element.name}</strong>
                <p>${tempSkills}</p>
            </li>
        `
    }).join("")



    return `
            <div>
                <h2>Habilidades</h2>
                <ul>
                    ${skillsList}
                </ul>
            </div>
        `
}


export default Skills