import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
    readonly title: string
    readonly url: string
    readonly imageUrl: string
    readonly newsSite: string
    readonly summary: string
    updatedAt: string
    readonly featured: boolean
    readonly launches: [{
        id: string,
        provider: string
    }]
    readonly events: any[]
}
