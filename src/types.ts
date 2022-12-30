export interface PokemonRoot {
    results: Pokemon[]
}

export interface Pokemon{
    id?: number;
    name: string;
    url?: string;
    height?: number;
    weight?: number;
    sprites?: Sprites;
}



export interface Sprites{
    front_default: string
}


export interface ToDoItem { 
    name: string;
    completed: boolean;
}


export interface IThemeContext {
    theme: string
}


export interface QuizResponse {
    response_code: number;
    results:       QuizQuestion[];
}

export interface QuizQuestion {
    category:          string;
    type:              Type;
    difficulty:        Difficulty;
    question:          string;
    correct_answer:    string;
    incorrect_answers: string[];
    user_answer? :     string;
}

export enum Difficulty {
    Easy = "easy",
    Hard = "hard",
    Medium = "medium",
}

export enum Type {
    Boolean = "boolean",
    Multiple = "multiple",
}



export interface RootObjectBitcoin {
    time:       Time;
    bpi:        Bpi;
  }
  
export interface Bpi {
    USD: Usd;
    GBP: Gbp;
    EUR: Eur;
  }
  
export interface Usd {
    rate: string;
  }
  
export interface Gbp {
    rate: string;
  }
  
export interface Eur {
    rate: string;
  }
  
export interface Time {
    updateduk:  string;
  }
  

  export interface WeatherRoot {
    name: string;
    weather: WeatherInterface[];
    main: Main;
  
  }
  
  export interface WeatherInterface {
    id: number;
    main: string;
    description: string;
  }
  
  export  interface Main {
    temp: number;
  }