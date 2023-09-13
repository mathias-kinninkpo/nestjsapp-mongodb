import { Body, Controller, Delete, Get, Param,  Post, Put } from '@nestjs/common';
import { Article } from 'src/schema/articles.schema';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from 'src/dto/create-article.dto';
import { UpdateArticleDto } from 'src/dto/update-article.dto';
  
@Controller('books')
export class ArticlesController {
    constructor(private articleService: ArticlesService) {}
  
    @Get("articles")
    async getAllArticles(): Promise<Article[]> {
      return this.articleService.findAll();
    }
  
    @Post("articles")
    async createArticle(
      @Body()
      book: CreateArticleDto,
    ): Promise<Article> {
      return this.articleService.create(book);
    }
  
    @Get('articles/:id')
    async getArticle(
      @Param('id')
      id: string,
    ): Promise<Article> {
      return this.articleService.findById(id);
    }
  
    @Put('articles/:id')
    async updateArticle(
      @Param('id')
      id: string,
      @Body()
      book : UpdateArticleDto
    ): Promise<Article> {
      return this.articleService.updateById(id, book);
    }
  
    @Delete('articles/:id')
    async deleteArticle(
      @Param('id')
      id: string,
    ): Promise<Article> {
      return this.articleService.deleteById(id);
    }
}