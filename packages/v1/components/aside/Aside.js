'use strict';

//// Aside componets
import AsidePhotoProfile from './AsidePhotoProfile.js';
import AsideConctact from './AsideConctact.js';
import AsideSocialNetworks from './AsideSocialNetworks.js';
import AsideEducation from './AsideEducation.js';
import AsideReferences from './AsideReferences.js';

//Services
import fetchinDataService from '../../services/fetchinDataService.js';


//use data service fetchin data
const responseDta =  fetchinDataService("/data/cv_data.json");


async function getImage() {
    const urlImageRouteData =(await responseDta)["basics"]["image"];    
    const imageComponent = AsidePhotoProfile(urlImageRouteData); 
    return imageComponent;
}

async function getConctact(){
    const conctactData =(await responseDta)["basics"]["conctact"];
    return AsideConctact(conctactData)

}

async function getSocialNetworks(){
    const socialNetworkData =(await responseDta)["basics"]['profile'];
    return AsideSocialNetworks(socialNetworkData);
}

async function getEducation(){
    const educationData =(await responseDta)["education"];
    return AsideEducation(educationData);
}

async function getReferences(){
    const referencesData =(await responseDta)["references"];
    return AsideReferences(referencesData);
}



async function aside() {
    const imageComponent = await getImage();
    const conctactComponent= await getConctact();
    const socialNetworksComponent =await getSocialNetworks();
    const educationComponent =await getEducation();
    const referencesComponent =await getReferences();
    return `
        <aside class="aside">
            ${imageComponent}
            ${conctactComponent}
            ${socialNetworksComponent}
            ${educationComponent}
            ${referencesComponent}
        </aside>
    `;
}

export default aside;
