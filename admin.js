const form = document.getElementById("serviceForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const project = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        images: [
            document.getElementById("image1").value,
            document.getElementById("image2").value,
            document.getElementById("image3").value
        ]
    };

    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    projects.push(project);

    localStorage.setItem("projects", JSON.stringify(projects));

    alert("Project Added Successfully!");
    form.reset();
});
