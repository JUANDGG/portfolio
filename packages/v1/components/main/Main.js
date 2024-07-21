
//Imports components
import Header from './Header.js'
import AboutMe from './AboutMe.js'
import Skills from './Skills.js';
import Work from './Work.js';
import Projects from './Projects.js';


//import services
import fetchinDataService from '../../services/fetchinDataService.js'

const responseDta =  fetchinDataService("/data/cv_data.json");


async function getHeader(){
    const headerData = (await responseDta)["basics"];
    return Header(headerData["name"],headerData["role"])
}

async function getAboutMe(){
    const AboutMeData = (await responseDta)["basics"];
    return AboutMe(AboutMeData["about_me"]);
}   


async function getSkills(){
    const skillsData = (await responseDta)["skills"];
    return Skills(skillsData);
}


async function getWorks(){
    const workData =(await responseDta)["work"];
    return Work(workData);
}

async function getProjects(){
    const projectData =(await responseDta)["projects"];
    return Projects(projectData);
}


async function Main(){
    const headerComponent = await getHeader() ;
    const aboutMeComponent = await getAboutMe();
    const skillsComponent = await getSkills();
    const workComponent = await getWorks();
    const projectComponent = await getProjects();
    return`
        <main class="main">
            ${headerComponent}
            ${aboutMeComponent}
            ${skillsComponent}
            ${workComponent}
            ${projectComponent}
        </main>
    `


}


export default Main;
