import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemDocument = HydratedDocument<Item>;

@Schema()
// schema: 도구 //
export class Item {
    @Prop()
    // description: 번호 //
    code: string;

    @Prop()
    // description: 한글 이름 //
    koName: string;

    @Prop()
    // description: 일본어 이름 //
    jpName: string;

    @Prop()
    // description: 엉여 이름 //
    enName: string;

    @Prop()
    // description: 아이템 타입 //
    type: string;

    @Prop()
    // description: 효과 //
    effect: string;

}

export const ItemSchema = SchemaFactory.createForClass(Item);