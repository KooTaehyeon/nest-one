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

  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie {
    return this.movisesService.getOne(movieId);
  }
  @Post()
  create(@Body() movieData) {
    return this.movisesService.create(movieData);
  }
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return this.movisesService.deleteOne(movieId);
  }
  @Patch('/:id')
  path(@Param('id') movieId: string, @Body() updateData) {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}
