import { PocketmonType } from 'src/enums';

export default interface PostPocketmonDto {
    // description: 한글 이름 //
    koName: string;

    // description: 일본어 이름 //
    jpName: string;

    // description: 영어 이름 //
    enName: string;

    // description: 기본 이미지 //
    mainImage: string;

    // description: 테라레이드 이미지 //
    teraImage: string;

    // description: 도감 이미지 //
    illustratedImage: string;

    // description: 전국 도감 번호 //
    nationwideNumber: string;

    // description: 성도 도감 번호 //
    johtoNumber: string | null;

    // description: 호연 (RSE) 도감 번호 //
    hoennRseNumber: string | null;
    
    // description: 호연 (oras) 도감 번호 //
    hoennOrasNumber: string | null;
    
    // description: 신오 도감 번호 //
    sinnohNumber: string | null;

    // description: 칼로스 도감 번호 //
    kalosNumber: string | null;

    // description: 알로라(SM) 도감 번호 //
    alolaSmNumber: string | null;

    // description: 알로라(USUM) 도감 번호 //
    alolaUsumNumber: string | null;

    // description: 가라르 (본토) 도감 번호 //
    galarMainNumber: string | null;

    // description: 가라르 (갑옷섬) 도감 번호 //
    galarIslandNumber: string | null;

    // description: 히스이 도감 번호 //
    hisuiNumber: string | null;

    // description: 팔데아 도감 번호 //
    paldeaNumber: string | null;

    // description: 타입 //
    type: PocketmonType[];

    // description: 특성 종류 //
    characteristic: number[];

    // description: 성격 종류 //
    personality: number;

    // description: 테라레이드 난이도 //
    difficulty: number;

    // description: 개체 값 //
    iv: number;

    // description: 방어 상성 0 //
    defensiveNature00: PocketmonType[];

    // description: 방어 상성 0.5 //
    defensiveNature05: PocketmonType[];

    // description: 방어 상성 1.0 //
    defensiveNature10: PocketmonType[];

    // description: 방어 상성 2.0 //
    defensiveNature20: PocketmonType[];

    // description: 방어 상성 4.0 //
    defensiveNature40: PocketmonType[];

    // description: HP //
    hp: number;

    // description: 공격 //
    attack: number;

    // description: 방어 //
    defense: number;

    // description: 특수공격 //
    specialAttack: number;

    // description: 특수방어 //
    specialDefense: number;

    // description: 스피드 //
    speed: number;

    // description: 기술 //
    skillCode: string[];

    // description: 기술 머신 //
    skillMachineCode: string[];

    // description: 이로치 여부 //
    irochi: boolean;

    // description: 포획 가능 횟수 //
    numberOfCapturesAvailable: number;

    // description: 타이틀 횟수 //
    title: string;

    // description: 기본 테라스탈 횟수 //
    tera: string;
}