/* =========================
   SHOW SECTIONS (TABS)
========================= */

function showSection(sectionId) {

    const sections = document.querySelectorAll('.content-section');

    sections.forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}


/* =========================
   PROJECT DETAILS
========================= */

function toggleProject(projectId) {

    const project =
    document.getElementById(projectId);

    if (
        project.style.display === "block"
    ) {

        project.style.display = "none";

    } else {

        project.style.display = "block";

    }
}


/* =========================
   SKILL DETAILS
========================= */

function toggleSkill(skillId) {

    const skill =
    document.getElementById(skillId);

    if (
        skill.style.display === "block"
    ) {

        skill.style.display = "none";

    } else {

        skill.style.display = "block";

    }
}


/* =========================
   DEFAULT PAGE
========================= */

window.onload = function () {

    showSection('about');

};


/* =========================
   ACTIVE NAVBAR LINK
========================= */

const navLinks =
document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {

    link.addEventListener('click', function () {

        navLinks.forEach(item => {
            item.classList.remove('active-link');
        });

        this.classList.add('active-link');

    });

});


/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "Hariram Portfolio Loaded Successfully"
);