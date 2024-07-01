import Country from './Country';

const CountryList = ({ countries, moveCountryToVisitedList }) => {


    const mappedCountries = countries.map((country, index) => {
        return <Country country={country} 
        moveCountryToVisitedList={moveCountryToVisitedList}
        key={index} />
    })

    return (
        <>
            {mappedCountries}
        </>
    )

}

export default CountryList;