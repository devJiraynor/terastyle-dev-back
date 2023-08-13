import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { PocketmonType, SkillKind } from 'src/enums';

export type CharacteristicDocument = HydratedDocument<Characteristic>;

@Schema()
// schema: 포켓몬 특성 //
export class Characteristic {
    @Prop()
    // description: 번호 //
    number: number;

    @Prop()
    // description: 한글 이름 //
    koName: string;

    @Prop()
    // description: 일본어 이름 //
    jpName: string;

    @Prop()
    // description: 영어 이름 //
    enName: string;

    @Prop()
    // description: 효과 //
    effect: number;

    @Prop()
    // description: 효과 설명 //
    description: string;

    @Prop()
    // description: 해당 포켓몬 //
    pocketmons: string[];
}

export const CharacteristicSchema = SchemaFactory.createForClass(Characteristic);