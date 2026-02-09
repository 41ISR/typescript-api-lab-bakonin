export const BookFilter = () => {
    return (
                    <div className="filters-row">
                <div className="filter-group">
                    <label className="filter-label">Category</label>
                    <select className="filter-select">
                        <option>All Categories</option>
                        <option>Technology</option>
                        <option>Science</option>
                        <option>Business</option>
                        <option>Education</option>
                        <option>Entertainment</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label className="filter-label">Price Range</label>
                    <select className="filter-select">
                        <option>Any Price</option>
                        <option>$0 - $50</option>
                        <option>$50 - $100</option>
                        <option>$100 - $500</option>
                        <option>$500+</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label className="filter-label">Rating</label>
                    <select className="filter-select">
                        <option>All Ratings</option>
                        <option>4+ Stars</option>
                        <option>3+ Stars</option>
                        <option>2+ Stars</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label className="filter-label">Status</label>
                    <select className="filter-select">
                        <option>All Status</option>
                        <option>Available</option>
                        <option>Out of Stock</option>
                        <option>Coming Soon</option>
                    </select>
                </div>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="featured"
                        className="checkbox-input"
                    />
                    <label htmlFor="featured" className="checkbox-label">
                        Featured only
                    </label>
                </div>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="onSale"
                        className="checkbox-input"
                    />
                    <label htmlFor="onSale" className="checkbox-label">
                        On Sale
                    </label>
                </div>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="inStock"
                        className="checkbox-input"
                        defaultChecked
                    />
                    <label htmlFor="inStock" className="checkbox-label">
                        In Stock
                    </label>
                </div>
            </div>
    )
}