import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { PocketmonType } from 'src/enums';

export type PocketmonDocument = HydratedDocument<Pocketmon>;

@Schema()
// schema: 포켓몬 //
export class Pocketmon {

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
    // description: 기본 이미지 //
    mainImage: string;

    @Prop()
    // description: 테라레이드 이미지 //
    teraImage: string;

    @Prop()
    // description: 도감 이미지 //
    illustratedImage: string;

    @Prop()
    // description: 전국 도감 번호 //
    nationwideNumber: string;

    @Prop()
    // description: 성도 도감 번호 //
    johtoNumber: string | null;

    @Prop()
    // description: 호연 (RSE) 도감 번호 //
    hoennRseNumber: string | null;
    
    @Prop()
    // description: 호연 (oras) 도감 번호 //
    hoennOrasNumber: string | null;
    
    @Prop()
    // description: 신오 도감 번호 //
    sinnohNumber: string | null;

    @Prop()
    // description: 칼로스 도감 번호 //
    kalosNumber: string | null;

    @Prop()
    // description: 알로라(SM) 도감 번호 //
    alolaSmNumber: string | null;

    @Prop()
    // description: 알로라(USUM) 도감 번호 //
    alolaUsumNumber: string | null;

    @Prop()
    // description: 가라르 (본토) 도감 번호 //
    galarMainNumber: string | null;

    @Prop()
    // description: 가라르 (갑옷섬) 도감 번호 //
    galarIslandNumber: string | null;

    @Prop()
    // description: 히스이 도감 번호 //
    hisuiNumber: string | null;

    @Prop()
    // description: 팔데아 도감 번호 //
    paldeaNumber: string | null;

    @Prop()
    // description: 타입 //
    type: PocketmonType[];

    @Prop()
    // description: 특성 종류 //
    characteristic: number[];

    @Prop()
    // description: 성격 종류 //
    personality: number;

    @Prop()
    // description: 테라레이드 난이도 //
    difficulty: number;

    @Prop()
    // description: 개체 값 //
    iv: number;

    @Prop()
    // description: 방어 상성 0 //
    defensiveNature00: PocketmonType[];

    @Prop()
    // description: 방어 상성 0.5 //
    defensiveNature05: PocketmonType[];

    @Prop()
    // description: 방어 상성 1.0 //
    defensiveNature10: PocketmonType[];

    @Prop()
    // description: 방어 상성 2.0 //
    defensiveNature20: PocketmonType[];

    @Prop()
    // description: 방어 상성 4.0 //
    defensiveNature40: PocketmonType[];

    @Prop()
    // description: HP //
    hp: number;

    @Prop()
    // description: 공격 //
    attack: number;

    @Prop()
    // description: 방어 //
    defense: number;

    @Prop()
    // description: 특수공격 //
    specialAttack: number;

    @Prop()
    // description: 특수방어 //
    specialDefense: number;

    @Prop()
    // description: 스피드 //
    speed: number;

    @Prop()
    // description: 기술 //
    skillCode: string[];

    @Prop()
    // description: 기술 머신 //
    skillMachineCode: string[];

    @Prop()
    // description: 이로치 여부 //
    irochi: boolean;

    @Prop()
    // description: 포획 가능 횟수 //
    numberOfCapturesAvailable: number;

    @Prop()
    // description: 타이틀 횟수 //
    title: string;

    @Prop()
    // description: 기본 테라스탈 횟수 //
    tera: string;
}

export const PocketmonSchema = SchemaFactory.createForClass(Pocketmon);