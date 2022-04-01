import ReactWeather, { useOpenWeather } from 'react-open-weather';
import './App.css';

function App() {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'dacb95d85259569091623991e635597a',
        lat: '1.2921',
        lon: '36.8219',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
    });

    return (
        <div className='App'>
            <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang='en'
                locationLabel='Kyrgyz Republic'
                unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                showForecast
            />
        </div>
    );
}

export default App;
