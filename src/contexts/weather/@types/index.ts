export interface iDefaultProviderProps {
   children: React.ReactNode;
}

export interface iWeatherContext{
   getGeocoding: () => Promise<void>
   weathers: iWaether[]
}


export interface iGeocoding {
   name: string
   lat: number
   lon: number
   country: string
   state: number
}

export interface iweatherDescription{
   id: number,
   main: string,
   description: string,
   icon: string
}

export interface iWaether {
   id:number
   main: {
      temp: number
      feels_like: number,
		temp_min: number,
		temp_max: number,
      humidity: number,
   }
   wind: {
		speed: number,
	},
   sys: {
		type: number,
		id: number,
		country: string
   }
   dt:number
   name: string
   timezone: number
   weather: iweatherDescription[]
}