// import React, { useState, useEffect } from 'react';

// function QuotesApp() {
//     const [quotes, setQuotes] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     useEffect(() => {
//         fetch("https://dummyjson.com/quotes")
//             .then(response => response.json())
//             .then(data => {
//                 setQuotes(data.quotes.slice(0, 10));
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error("Error fetching quotes:", error);
//                 setLoading(false);
//             });
//     }, []);

//     const toggleTheme = () => {
//         setIsDarkMode(prevMode => !prevMode);
//         document.body.className = isDarkMode ? 'light-mode' : 'dark-mode';
//     };

//     if (loading) {
//         return <h1>Loading...</h1>
//     }

//     return (
//         <div className='App-header'>
//             <button onClick={toggleTheme} className='toggle-button'>
//                 {isDarkMode ? 'Light' : 'Dark'} Mode
//             </button>
//             <div className="quotes-container">
//                 {quotes.map((quote, index) => (
//                     <div key={index} className="quote-card">
//                         <h1>{quote.quote}</h1>
//                         <p>- {quote.author}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default QuotesApp;

import React, { useState, useEffect } from 'react';

function QuotesApp() {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Retrieve the theme from localStorage or default to light mode
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        // Set the body class based on the theme
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';

        // Fetch quotes
        fetch("https://dummyjson.com/quotes")
            .then(response => response.json())
            .then(data => {
                setQuotes(data.quotes.slice(0, 10));
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching quotes:", error);
                setLoading(false);
            });
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            // Save the new theme to localStorage
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            return newMode;
        });
    };

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <header className="App-header">
                <button className="toggle-button" onClick={toggleTheme}>
                    {isDarkMode ? 'Light' : 'Dark'} Mode
                </button>
            </header>
            <div className="quotes-container">
                {quotes.map((quote, index) => (
                    <div key={index} className="quote-card">
                        <h1>{quote.quote}</h1>
                        <p>- {quote.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuotesApp;