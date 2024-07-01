const Country = ({country, moveCountryToVisitedList}) => {

    const handleClick = () => {
        moveCountryToVisitedList(country);
    }

    const boldStyle = { fontWeight: 'bold' };



    return (
        <div>
            <p><span style={boldStyle}>Name:</span> {country.name.common}</p>
            <p><span style={boldStyle}>Capital:</span> {country.capital ? country.capital[0] : 'N/A'}</p>
            <p><span style={boldStyle}className="bold">Flag:</span> <span className="flag">{country.flag}</span></p>
            <button onClick={handleClick}>Visited</button>

        </div>



      );
}

export default Country;