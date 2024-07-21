function Projects (projectData){
    const subItems = (keyObject)=>{

        if(keyObject==null){
            return '';
        }

        else {
            return keyObject.map (element =>{
                return `
                    <li>
                        ${element}
                    </li>
                `
            }).join("")
        }
        
    }


    

    const projectList = projectData.map(element =>{
        return `
            <li>
                <h3>${element.name_project} ${element.year}</h3>
                <p>${element.description==null ? '' :element.description}</p>
                <ul>
                    ${subItems(element.tecnologies)==null ?'':'<strong> Tecnologias utilizadas </strong>'}
                     ${subItems(element.tecnologies)==null ?'':subItems(element.tecnologies)}
                </ul>
                <ul>
                    ${subItems(element.tools)=='' ? '':'<strong> Herramientas </strong>'}
                    ${subItems(element.tools)==null ?'':subItems(element.tools)}
                </ul>
                <ul>
                    ${subItems(element.achievements)=='' ? '':'<strong> Logros </strong>'}
                    ${subItems(element.achievements)==null ?'':subItems(element.achievements)}
                </ul>
            </li>

        `
    }).join("")




    return `
        <div class="projects">
            <h2>Proyectos</h2>
            <ul>
                ${projectList}
            <ul>
           
        </div>
    
    `
}

export default Projects;