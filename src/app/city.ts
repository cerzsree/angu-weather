export class City{
    id:number;
    name: string;
}

export class Ste{
    tempMax: number;
    tempMin: number;
    states: string;
}

export class Res{
    weather: [{
        main: string,
        description: string,
        }];
    main: {
        temp_min: number,
        temp_max: number};
 id: number;
 name: string;
}