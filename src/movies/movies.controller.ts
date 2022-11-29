import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movisesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.movisesService.getAll();
  }
  @Get('/search')
  search(@Query('year') seachingYear: string) {
    return `we are searching for a movie made after:${seachingYear}`;
  }
  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie {
    return this.movisesService.getOne(movieId);
  }
  @Post()
  create(@Body() movieData) {
    return movieData;
  }
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will Delete a movie ${movieId}`;
  }
  @Patch('/:id')
  path(@Param('id') movieId: string, @Body() updateData) {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}
