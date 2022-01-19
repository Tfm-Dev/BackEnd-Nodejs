import { ApiProperty } from "@nestjs/swagger"

export class BaseArticleDto {
    @ApiProperty()
    readonly title: string

    @ApiProperty()
    readonly url: string

    @ApiProperty()
    readonly imageUrl: string

    @ApiProperty()
    readonly newsSite: string

    @ApiProperty()
    readonly summary?: string

    @ApiProperty()
    readonly featured?: boolean

    @ApiProperty({ type: [{id: {type: "string"}, provider: {type: "string"}}]})
    readonly launches?: [{
        id: string,
        provider: string
    }]

    @ApiProperty({ type: 'array', items: { type: 'object'} })
    readonly events?: [{
        id: string,
        provider: string
    }]
}