import { PocketmonType, SkillKind } from "src/enums";

export default interface PostSkillDto {
    // description: 번호 //
    code: string;

    // description: 한글 이름 //
    koName: string;

    // description: 일본어 이름 //
    jpName: string;

    // description: 엉여 이름 //
    enName: string;

    // description: 기술 타입 //
    type: PocketmonType;

    // description: 기술 종류 //
    kind: SkillKind;

    // description: 효과 //
    effect: string;

    // description: 위력 //
    power: number;

    // description: 명중률 //
    accuracyRate: number;

    // description: 소모 pp //
    pp: number;

    // description: 우선도 //
    priority: number;

    // description: 범위 //
    range: string;
}