import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { PocketmonType, SkillKind } from 'src/enums';

export type SkillDocument = HydratedDocument<Skill>;

@Schema()
// schema: 포켓몬 기술 //
export class Skill {
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
    // description: 기술 타입 //
    type: PocketmonType;

    @Prop()
    // description: 기술 종류 //
    kind: SkillKind;

    @Prop()
    // description: 효과 //
    effect: string;

    @Prop()
    // description: 위력 //
    power: number;

    @Prop()
    // description: 명중률 //
    accuracyRate: number;

    @Prop()
    // description: 소모 pp //
    pp: number;

    @Prop()
    // description: 우선도 //
    priority: number;

    @Prop()
    // description: 범위 //
    range: string;

}

export const SkillSchema = SchemaFactory.createForClass(Skill);