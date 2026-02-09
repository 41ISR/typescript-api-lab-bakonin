export const ControlBar = () => {
    return (
        <div className="controls-bar">
            <div className="results-count">Showing 1-12 of 248 results</div>

            <div className="sort-group">
                <label className="sort-label">Sort by:</label>
                <select className="sort-select">
                    <option>Most Relevant</option>
                    <option>Newest First</option>
                    <option>Oldest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating: High to Low</option>
                    <option>Most Popular</option>
                    <option>Name: A to Z</option>
                    <option>Name: Z to A</option>
                </select>
            </div>
        </div>
    )
}