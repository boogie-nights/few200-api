import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { BooksController } from './books/books.controller';

@Module({
  imports: [],
  controllers: [AppController, MoviesController, BooksController],
  providers: [AppService],
})
export class AppModule {}
