export const BookCard = () => {
    return (
        <div className="cards-grid">
            <a className="card">
                <div className="card-image-wrapper">
                    <img
                        src="https://via.placeholder.com/400x300/4F46E5/ffffff?text=Product+1"
                        alt="Harry Potter and the Sorcerer's Stone"
                        className="card-image"
                    />
                </div>
                <div className="card-content">
                    <h3 className="card-title">Harry Potter and the Sorcerer's Stone</h3>
                    <p className="card-date">
                        Jun 26, 1997
                    </p>
                    <p className="card-description">
                        On his birthday, Harry Potter discovers that he is the son of two well-known wizards, from whom he has inherited magical powers. 
                        He must attend a famous school of magic and sorcery, where he establishes a friendship with two young men who will become his companions on his adventure. 
                        During his first year at Hogwarts, 
                        he discovers that a malevolent and powerful wizard named Voldemort is in search of a philosopher's stone that prolongs the life of its owner.
                    </p>
                    <div className="card-tags">
                        <span className="tag">Pages: 223</span>
                    </div>
                </div>
            </a>
        </div>
    )
}