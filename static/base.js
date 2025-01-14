const subjects = [
    {
        title: "Math",
        info: "Mathematics is the study of numbers, quantity, and space. It is a diverse field that includes arithmetic, algebra, geometry, and calculus. Mathematics is used in a wide range of fields, including science, engineering, and economics. It is also an important tool for understanding the world around us and making informed decisions.",
        color: "lightgreen",
        picture: "math.jpg",
    },
    {
        title: "Biology",
        info: "Biology is the study of living organisms and their interactions with each other and their environment. It is a broad field that includes many different sub-disciplines, such as genetics, ecology, and microbiology. Biology is important because it helps us understand how living things work and how they are connected to each other and the world around them.",
        color: "lightblue",
        picture: "biology.jpg",
    },
    {
        title: "Computer Science",
        info: "Computer science is the study of computers and computational systems. It involves the study of algorithms, data structures, and programming languages, as well as the design and analysis of computer hardware and software. Computer science is important because it underpins many of the technologies we use every day, from smartphones and social media to self-driving cars and artificial intelligence.",
        color: "lightcoral",
        picture: "computer-science.jpg",
    }
]

const displayMenu = () => {
    document.getElementById("menu").style.animation = "fadeIn 0.5s forwards";
    document.addEventListener("click", (e) => {
        if (e.target.id !== "menu" && e.target.id !== "menuIcon") {
            hideMenu();
        }
    });
}

const hideMenu = () => {
    document.getElementById("menu").style.animation = "none";
}

window.onload = () => {
    for (const subject of subjects) {
        const subjectElement = document.createElement("div");
        subjectElement.classList.add("subject");
        subjectElement.style.background = subject.color;
        subjectElement.onclick = () => window.location.href = `/${subject.title.toLowerCase().replace(" ", "-")}`;

        const subjectTitleWrapper = document.createElement("div");
        subjectTitleWrapper.classList.add("subject-title");

        const h1 = document.createElement("h1");
        h1.innerText = subject.title;
        subjectTitleWrapper.appendChild(h1);

        const learnMore = document.createElement("button");
        learnMore.onclick = () => window.location.href = `/${subject.title.toLowerCase().replace(" ", "-")}`;
        learnMore.classList.add("learn-more");
        learnMore.innerText = "Learn more";
        subjectTitleWrapper.appendChild(learnMore);

        subjectElement.appendChild(subjectTitleWrapper);

        const subjectInfoWrapper = document.createElement("div");
        subjectInfoWrapper.classList.add("subject-info");

        const backgroundImage = document.createElement("div");
        backgroundImage.classList.add("background-image");
        backgroundImage.style.backgroundImage = `url(static/assets/images/${subject.picture})`;
        subjectInfoWrapper.appendChild(backgroundImage);

        const textBackground = document.createElement("div");
        textBackground.classList.add("text-background");
        subjectInfoWrapper.appendChild(textBackground);

        const p = document.createElement("p");
        p.innerText = subject.info;
        subjectInfoWrapper.appendChild(p);

        subjectElement.appendChild(subjectInfoWrapper);

        document.getElementById("main").appendChild(subjectElement);
    }
}