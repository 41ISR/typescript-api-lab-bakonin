import { BookCard } from "./components/BookCard"
import { BookFilter } from "./components/BookFilter"
import { ControlBar } from "./components/ControlBar"
import { Header } from "./components/Header"

export const App = () => {
    return (
        <>

            <Header />

            <div className="container">
                {/* ПОИСК И ФИЛЬТРЫ */}
                <section className="search-filter-section">
                    {/* Строка поиска */}
                    <div className="search-bar">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search for items, products, articles..."
                            defaultValue=""
                        />
                        <button className="search-button">Search</button>
                    </div>
                    <BookFilter />
                </section>

                <ControlBar />

                <BookCard />

                {/* ПАГИНАЦИЯ */}
                <div className="pagination">
                    <button className="pagination-button" disabled>
                        ← Previous
                    </button>
                    <button className="pagination-button active">1</button>
                    <button className="pagination-button">2</button>
                    <button className="pagination-button">3</button>
                    <button className="pagination-button">4</button>
                    <button className="pagination-button">5</button>
                    <span className="pagination-info">...</span>
                    <button className="pagination-button">21</button>
                    <button className="pagination-button">Next →</button>
                </div>

                {/* LOADING STATE (можно использовать когда нужно) */}
                {/* 
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        */}

                {/* EMPTY STATE (можно использовать когда нет результатов) */}
                {/* 
        <div className="empty-state">
          <div className="empty-state-icon">📭</div>
          <h3 className="empty-state-title">No results found</h3>
          <p className="empty-state-text">Try adjusting your filters or search query</p>
        </div>
        */}
            </div>
        </>

    )
}