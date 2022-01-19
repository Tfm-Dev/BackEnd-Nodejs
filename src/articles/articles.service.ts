import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, ArticleDocument } from './schemas/article.schema';

@Injectable()
export class ArticlesService {
  constructor(@InjectModel(Article.name) private readonly model: Model<ArticleDocument>, ) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    return await new this.model({...createArticleDto, _id: !await this.model.findOne().sort({ _id: -1 }).exec() ? 1 : Number((await this.model.findOne().sort({ _id: -1 }).exec())._id) + 1, publishedAt: new Date()}).save()
  }

  async findAll(): Promise<Article[]> {
    return await this.model.find().exec()
  }

  async findOne(id: number): Promise<Article> {
    return await this.model.findById(id).exec()
  }

  async update(id: number, updateArticleDto: UpdateArticleDto): Promise<Article> {
    return await this.model.findByIdAndUpdate(id, {...updateArticleDto, updatedAt: new Date()}).exec();
  }

  async remove(id: number){
    return await this.model.remove({_id: id}).exec()
  }
}
