document.querySelectorAll('h1, h2, th1-f, footer').forEach(header => {
    header.style.cursor = "pointer";
    header.addEventListener('click', () => {
        const isH1 = header.tagName === 'H1';
        let next = header.nextElementSibling;
        const stopTags = isH1 ? ['H1'] : ['H1', 'H2', 'TH1-F', 'FOOTER'];
        const isOpening = !next || window.getComputedStyle(next).display === "none";
        while (next && !stopTags.includes(next.tagName)) {
            if (isOpening) {
                next.style.display = ""; 
            } else {
                next.style.display = "none";
            }
            next = next.nextElementSibling;
        }
 });
});
