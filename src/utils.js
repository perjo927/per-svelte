const next = function() {
    const { next } = this.get();
    const nextElement = document.querySelector(next);
    nextElement.scrollIntoView({
        behavior: "smooth"
    });
}

export default next;