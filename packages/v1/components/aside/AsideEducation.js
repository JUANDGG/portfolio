function AsideEducation(educationData){
    const educationItem =educationData.map(element=>{
        return`
            <li>
                <em><strong>${element.area}</strong></em>
                <strong>${element.institution}</strong>
                <small>
                    ${element.startDate} - ${element.endDate}
                </small>
            </li>
        `
    }).join('');


    return `
        <div class="education_container">
            <h2>Educacion</h2>
            <ul>
                ${educationItem}
            </ul>
        </div>
    `
}

export default AsideEducation;