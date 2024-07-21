function Work(workData){

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


    

    const workList = workData.map(element =>{
        return `
            <li>
                <h3>${element.name_company} (${element.position}) ${element.startYear}-${element.endYear}</h3>
                <p>${element.description==null ? '' :element.description}</p>
                <ul>
                    ${subItems(element.responsabilities)==null ?'':'<strong> Responsailidades </strong>'}
                     ${subItems(element.responsabilities)==null ?'':subItems(element.responsabilities)}
                </ul>
                <ul>
                    ${subItems(element.achievements)=='' ? '':'<strong> Logros </strong>'}
                    ${subItems(element.achievements)==null ?'':subItems(element.achievements)}
                </ul>
            </li>

        `
    }).join("")




    return `
        <div class="experience">
            <h2>Experiencia</h2>
            <ul>
                ${workList}
            <ul>
           
        </div>
    
    `
}

export default Work;