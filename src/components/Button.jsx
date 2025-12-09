const Button = ({text, className, id}) => {
    const basePath = import.meta.env.BASE_URL;
    return (
        // Call to action
        <a
            onClick={(e) => {
                e.preventDefault();

                const target = document.getElementById('work');

                if (target && id) {
                    const offset = window.innerHeight * 0.15;

                    const top = target.getBoundingClientRect().top + window.scrollY - offset;

                    window.scrollTo({ top, behavior: "smooth" });
                }
            }}
            className={`${className ?? ''} cta-wrapper`}>
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src={`${basePath}/arrow-down.svg" alt="arrow`} alt="arrow"/>
                </div>
            </div>
        </a>
    )
}
export default Button
