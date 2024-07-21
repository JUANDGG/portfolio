function AsideSocialNetworks(socialNetworkData) {
  
    const socialNetworkItems = socialNetworkData.map(element => `
        <li>
            <a href="${element.url}">${element.network}</a>
        </li>
    `).join(''); 


    return `
        <div class="container_social_network">
            <h2>Redes Sociales</h2>
            <ul>
                ${socialNetworkItems}
            </ul>
        </div>
    `;
}

export default AsideSocialNetworks;
