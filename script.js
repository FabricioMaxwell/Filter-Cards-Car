const btns = document.querySelectorAll(".btn");
const filter = document.getElementById("container-filters")

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.category;

        removeActiveClasses()
        btn.classList.add("active");

        filters(category)
    })
})


function removeActiveClasses() {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    })
}

function filters(category) {
    filter.querySelectorAll(".filterCard").forEach((filters1) => {
        if (category === "all" || filters1.dataset.category === category) {
            filters1.style.display = "flex"
        } else {
            filters1.style.display = "none"
        }
    })
}