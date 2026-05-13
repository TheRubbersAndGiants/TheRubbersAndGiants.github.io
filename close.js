document.querySelectorAll('h1, h2').forEach(header => {
    header.style.cursor = "pointer";
    header.addEventListener('click', () => {
        let next = header.nextElementSibling;
        
        while (next && next.tagName !== 'H1' && next.tagName !== 'H2') {
            if (next.style.display === "none") {
                next.style.display = "block";
            } else {
                next.style.display = "none";
            }
            next = next.nextElementSibling;
        }
    });
});