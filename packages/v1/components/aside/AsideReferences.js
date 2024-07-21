function AsideReferences(referencesData){
    const referencesItem =referencesData.map(element=>{
        return`
            <li>
                <strong>${element.name}</strong>
                <em><strong>${element.role ==null ? '':element.role}</strong></em>
                <a href="tel:${element.phoneNumber}">
                    ${element.phoneNumber}
                </a>
            </li>
        `
    }).join('');


    return `
        <div class="references">
            <h2>Referencias</h2>
            <ul>
                ${referencesItem}
            </ul>
        </div>
    `
}

export default AsideReferences;