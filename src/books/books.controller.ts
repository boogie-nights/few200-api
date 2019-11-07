import { Controller, Get, Post, Body } from '@nestjs/common';
import * as cuid from 'cuid';
import { NewBook } from './model';

@Controller('books')
export class BooksController {
    data: Book[] = [
        { id: '1', title: 'A Series of Unfortunate Events: The Bad Beginning', author: 'Lemony Snickett', format: 'Hardcover' },
        { id: '2', title: 'A Series of Unfortunate Events: The Reptile Room', author: 'Lemony Snickett', format: 'Hardcover' },
    ];

    @Get()
    getAllBooks() {
        return ({ books: this.data });
    }

    @Post()
    async addBook(@Body() bookToAdd: NewBook) {
        bookToAdd.id = cuid();
        this.data.push(bookToAdd);

        return await new Promise((res) => {
            setTimeout(() => {
                res(bookToAdd);
            }, 3000);
        });
    }
}

interface Book {
    id: string;
    title: string;
    author: string;
    format: string;
}
