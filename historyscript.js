// Get the search history list and clear button
const historyList = document.getElementById('history-list');
const clearHistoryBtn = document.getElementById('clear-history-btn');

// Load search history from local storage and display it
let searchHistory = JSON.parse(localStorage.getItem('bookSearchHistory')) || [];
if (searchHistory.length > 0) {
    searchHistory.forEach(searchQuery => {
        const listItem = document.createElement('li');
        listItem.textContent = searchQuery;
        historyList.appendChild(listItem);

        // Add event listener to each search history item to view book data again
        listItem.addEventListener('click', () => {
            window.location.href = `index.html?search=${searchQuery}`;
        });
    });
} else {
    const noHistoryMsg = document.createElement('p');
    noHistoryMsg.textContent = 'No search history.';
    historyList.appendChild(noHistoryMsg);
}

// Add event listener to clear history button
clearHistoryBtn.addEventListener('click', () => {
    localStorage.removeItem('bookSearchHistory');
    historyList.innerHTML = '<p>Search history cleared.</p>';
});
