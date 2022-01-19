import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export type ArticleDocument = Article & mongoose.Document;

@Schema({ versionKey: false })
export class Article {
    @Prop()
    _id: string;

    @ApiProperty({required: false,default: false})
    @Prop({ default: false })
    featured?: boolean;

    @ApiProperty({required: false})
    @Prop({ required: true })
    title: string;

    @ApiProperty({required: false})
    @Prop({ required: true })
    url: string;

    @ApiProperty({required: false})
    @Prop({ required: true })
    imageUrl: string;

    @ApiProperty({required: false})
    @Prop({ required: true })
    newsSite: string;

    @ApiProperty({required: false})
    @Prop()
    summary?: string;

    @ApiProperty({required: false})
    @Prop({ required: true })
    publishedAt: Date;

    @Prop()
    updatedAt?: Date;

    @ApiProperty({ required: false })
    @Prop()
    launches?: [{
        id: String,
        provider: String
    }];

    @ApiProperty({ required: false })
    @Prop()
    events?: [{
        id: String,
        provider: String
    }];
}
export const ArticleSchema = SchemaFactory.createForClass(Article);