import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema({ versionKey: false })

export class provider {
    @ApiProperty()
    @Prop()
    id: string;

    @ApiProperty({required: false})
    @Prop({required: false})
    provider: string
}

export class Article {
    @ApiProperty({required: false})
    @Prop()
    _id: string;

    @ApiProperty({required: false,default: false})
    @Prop({required: false,default: false})
    featured: boolean;

    @ApiProperty({required: false})
    @Prop()
    title: string;

    @ApiProperty({required: false})
    @Prop()
    url: string;

    @ApiProperty({required: false})
    @Prop()
    imageUrl: string;

    @ApiProperty({required: false})
    @Prop()
    newsSite: string;

    @ApiProperty({required: false})
    @Prop({required: false})
    summary: string;

    @ApiProperty({required: false})
    @Prop()
    publishedAt: string;

    @Prop({required: false})
    updatedAt: string;

    @ApiProperty({ required: false, type: [provider] })
    @Prop({required: false})
    launches: [provider];

    @ApiProperty({ required: false, type: [provider] })
    @Prop({required: false})
    events: [provider];
}
export const ArticleSchema = SchemaFactory.createForClass(Article);