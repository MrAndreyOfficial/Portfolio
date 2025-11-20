document.addEventListener('DOMContentLoaded', async() => {
    const response = await fetch('https://api.github.com/users/MrAndreyOfficial/repos');
    const projects = await response.json();

    const projectsContainer = document.getElementById('projects');

    for (const project of projects) {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        
        const linkElement = document.createElement('a');

        linkElement.textContent = project.name;
        linkElement.classList.add('link');

        linkElement.setAttribute('target', '_blank');
        linkElement.href = project.html_url;

        projectElement.appendChild(linkElement);

        projectsContainer.appendChild(projectElement);
    }
})
