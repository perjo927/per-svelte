const next = function() {
    const { next } = this.get();
    const nextElement = document.querySelector(next);
    nextElement.scrollIntoView({
        behavior: "smooth",
        block: "start", 
        inline: "start"
    });
}

export default next;