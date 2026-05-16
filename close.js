document.querySelectorAll('h1, h2').forEach(header => {
    header.style.cursor = "pointer";
    header.addEventListener('click', () => {
        const isH1 = header.tagName === 'H1';
        let next = header.nextElementSibling;
        const stopTags = isH1 ? ['H1'] : ['H1', 'H2'];
        const isOpening = !next || next.style.display === "none";

        while (next && !stopTags.includes(next.tagName)) {
            if (isOpening) {
                if (isH1 && next.tagName === 'H2') {
                    next.style.display = "block";
                } else if (!isH1) {
                    next.style.display = "block";
                }
            } else {
                next.style.display = "none";
            }
            next = next.nextElementSibling;
        }
    });
});
