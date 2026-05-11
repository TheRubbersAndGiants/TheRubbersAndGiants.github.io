document.querySelectorAll('h1').forEach(header => {
    header.style.cursor = "pointer";
    header.title = "Click to expand/collapse";

    header.addEventListener('click', () => {
        let next = header.nextElementSibling;
        while (next && next.tagName !== 'H1') {
            if (next.style.display === "none") {
                next.style.display = "block";
            } else {
                next.style.display = "none";
            }
            next = next.nextElementSibling;
        }
    });
});
