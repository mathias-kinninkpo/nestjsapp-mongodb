import { Injectable, NotFoundException } from '@nestjs/common';
import * as mongoose from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { Article } from 'src/schema/articles.schema';


@Injectable()
export class ArticlesService {
  constructor (@InjectModel(Article.name) private articleModel : mongoose.Model<Article>){}
  async findAll(): Promise<Article[]> {
    const articles = await this.articleModel.find();
    return articles;
  }

  async create(article: Article): Promise<Article> {
    const res = await this.articleModel.create(article);
    return res;
  }

  async findById(id: string): Promise<Article> {
    const article = await this.articleModel.findById(id);

    if (!article) {
      throw new NotFoundException('Book not found.');
    }

    return article;
  }

  async updateById(id: string, article: Article): Promise<Article> {
    return await this.articleModel.findByIdAndUpdate(id, article, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Article> {
    return await this.articleModel.findByIdAndDelete(id);
  }
}

