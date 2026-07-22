const storyItems = document.querySelectorAll(".story-item");

storyItems.forEach((item) => {
    const head = item.querySelector(".story-head");

    head.addEventListener("click", () => {

        storyItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
                otherItem.querySelector(".arrow").innerHTML = "&#8964;"; // down
            }
        });

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            item.querySelector(".arrow").innerHTML = "&#8963;"; // up
        } else {
            item.querySelector(".arrow").innerHTML = "&#8964;"; // down
        }
    });
});