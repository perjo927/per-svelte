export default function next() {
    const { next } = this.get();
    const nextElement = document.querySelector(next);
    nextElement.scrollIntoView({
        behavior: "smooth",
        block: "start", 
        inline: "start"
    });
};