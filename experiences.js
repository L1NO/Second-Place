const experiences = [
  // User Experience Design
  {
    category: "User Experience Design",
    items: [
      {
        title: "Figma",
      },
      {
        title: "Wireframing",
      },
      {
        title: "Prototyping",
      },
      {
        title: "User Flows",
      },
      {
        title: "UX writing",
      },
      {
        title: "HTML/CSS",
      },
      {
        title: "JavaScript",
      }
    ],
  },
  // User Experience Research
  {
    category: "User Experience Research",
    items: [
      {
        title: "User Interviews",
      },
      {
        title: "Surveys",
      },
      {
        title: "Card Sorting",
      },
      {
        title: "Personas",
      },
      {
        title: "Contextual Inquiry",
      },
      {
        title: "Usability Testing",
      },
      {
        title: "A/B Testing",
      },
    ],
  },
];

window.experiences = experiences;

document.addEventListener("DOMContentLoaded", function() {
  const frontendSkills = [
    "HTML",
    "CSS",
    "SASS",
    "LESS",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Material UI"
  ];

  const frontendSection = `
    <h3>Frontend</h3>
    <article class="frontend-skills">
      ${frontendSkills.map(skill => `<p>${skill}</p>`).join('')}
    </article>
  `;

  document.getElementById("frontend-experience").innerHTML = frontendSection;
});