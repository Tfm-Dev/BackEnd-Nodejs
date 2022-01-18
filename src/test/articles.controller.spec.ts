import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from '../articles/articles.service';
import { ArticlesController } from '../articles/articles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from '../articles/schemas/article.schema';

describe('ArticlesController', () => {
  let controller: ArticlesController;
  let service: ArticlesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MongooseModule.forRoot('mongodb://monguinho:alfaiateMongo@192.168.100.67:27017/backend?authSource=admin&readPreference=primary&directConnection=true&ssl=false'), MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }])],
      controllers: [ArticlesController],
      providers: [ArticlesService]
    }).compile();

    controller = module.get<ArticlesController>(ArticlesController);
    service = module.get<ArticlesService>(ArticlesService);
  });

  describe('Root', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
  });

  describe('findAll', () => {
    it('Should be findAll Articles', async () => {
      let result: Promise<Article[]>
      jest.spyOn(service, 'findAll').mockImplementation(() => result)

      expect(await controller.findAll()).toBe(result);
    })
  })
});
