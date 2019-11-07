import { Controller, Get, Post, Body } from '@nestjs/common';
import * as cuid from 'cuid';
import { NewMovie } from './models';
@Controller('movies')
export class MoviesController {
    data: Movie[] = [
        { id: '1', title: 'E.T.', rentalDays: 3, rentalPrice: 3.99 },
        { id: '2', title: 'HaraKiri', rentalDays: 2, rentalPrice: 1.99 },
    ];

    @Get()
    getAllMovies() {
        return ({ movies: this.data });
    }

    @Post()
    async addMovie(@Body() movieToAdd: NewMovie) {
        movieToAdd.id = cuid();
        this.data.push(movieToAdd);

        return await new Promise((res) => {
            setTimeout(() => {
                res(movieToAdd);
            }, 3000);
        });
    }
}

interface Movie {
    id: string;
    title: string;
    rentalDays: number;
    rentalPrice: number;
}

