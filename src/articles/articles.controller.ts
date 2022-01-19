import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './schemas/article.schema';

@ApiTags('Articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Article,
  })
  create(@Body() createArticleDto: CreateArticleDto): Promise<Article> {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  @ApiCreatedResponse({
    description: 'Find all articles.',
    type: Article,
  })
  findAll(): Promise<Article[]> {
    return this.articlesService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({
    description: 'Find article by id.',
    type: Article,
  })
  findOne(@Param('id') id: string): Promise<Article> {
    return this.articlesService.findOne(+id);
  }

  @Put(':id')
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: Article,
  })
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto): Promise<Article> {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: Article,
  })
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }
}
