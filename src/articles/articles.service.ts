import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, ArticleDocument } from './schemas/article.schema';

@Injectable()
export class ArticlesService {
  constructor(@InjectModel(Article.name) private articleModel: Model<ArticleDocument>) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    try { 
      const date = new Date()
      const createdArticle = new this.articleModel(createArticleDto)
      createdArticle._id = (await this.articleModel.findOne().sort({ _id: -1 }).exec())._id + 1
      createdArticle.publishedAt = date.getFullYear()+'-'+((date.getMonth()+1)<10?'0'+(date.getMonth()+1):(date.getMonth()+1))+'-'+(date.getDate()<10?'0'+date.getDate():date.getDate())+'T'+(date.getHours()<10?'0'+date.getHours():date.getHours())+':'+(date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())+':'+(date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds())+'.'+(date.getMilliseconds()<10?'00'+date.getMilliseconds():(date.getMilliseconds()<100?'0'+date.getMilliseconds():date.getMilliseconds()))+'Z'
      createdArticle.updatedAt = ''
      return createdArticle.save()
    } catch(e) {
      console.log(e)
      return e.message
    }
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec()
  }

  async findOne(id: number): Promise<Article> {
    try {
      if (!this.articleModel.findById(id).exec()) throw 'Not find Id'
      return this.articleModel.findById(id).exec()
    } catch(e) {
      console.log(e)
      return e.message
    }
  }

  async update(id: number, updateArticleDto: UpdateArticleDto): Promise<Article> {
    try {
      const date = new Date()
      updateArticleDto.updatedAt = date.getFullYear()+'-'+((date.getMonth()+1)<10?'0'+(date.getMonth()+1):(date.getMonth()+1))+'-'+(date.getDate()<10?'0'+date.getDate():date.getDate())+'T'+(date.getHours()<10?'0'+date.getHours():date.getHours())+':'+(date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())+':'+(date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds())+'.'+(date.getMilliseconds()<10?'00'+date.getMilliseconds():(date.getMilliseconds()<100?'0'+date.getMilliseconds():date.getMilliseconds()))+'Z'
      if (!this.articleModel.findById(id).exec()) throw 'Not find Id'
      return this.articleModel.findByIdAndUpdate(id, updateArticleDto).exec();
    } catch(e) {
      console.log(e)
      return e.message
    }
  }

  async remove(id: number){
    try {
      if (!this.articleModel.findById(id).exec()) throw 'Not find Id'
      return this.articleModel.remove({_id: id}).exec()
    } catch(e) {
      console.log(e)
      return e.message
    }
  }
}
