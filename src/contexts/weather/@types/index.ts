export interface iDefaultProviderProps {
   children: React.ReactNode;
}

export interface iWeatherContext{
   getCurrentWeather: () => Promise<void>
}