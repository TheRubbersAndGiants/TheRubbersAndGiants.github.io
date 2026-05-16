document.querySelectorAll('h1, h2').forEach(header => {
    header.style.cursor = "pointer";
    header.addEventListener('click', () => {
        let next = header.nextElementSibling;
        const stopTags = header.tagName === 'H1' ? ['H1'] : ['H1', 'H2'];
        while (next && !stopTags.includes(next.tagName)) {
            const isHidden = next.style.display === "none";
            next.style.display = isHidden ? "block" : "none";
            if (!isHidden && next.tagName === 'H2') {
                let subNext = next.nextElementSibling;
                while (subNext && !['H1', 'H2'].includes(subNext.tagName)) {
                    subNext.style.display = "none";
                    subNext = subNext.nextElementSibling;
                }
            }
            next = next.nextElementSibling;
        }
    });
});
