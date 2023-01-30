import React, { useState } from 'react';

const SearchForm = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = e => {
        e.preventDefault();

        fetch(`https://63ae0cc8ceaabafcf17221ae.mockapi.io/TaskForm?q=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <>
            <nav>
                <form onSubmit={handleSearch}>
                    <label htmlFor="search">Search:</label>
                    <input
                        type="text"
                        id="search"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </nav>
        </>
    );
};

export default SearchForm;