export default interface PostCharacteristicDto {

    // description: 번호 //
    number: number;

    // description: 한글 이름 //
    koName: string;

    // description: 일본어 이름 //
    jpName: string;

    // description: 영어 이름 //
    enName: string;

    // description: 효과 //
    effect: number;

    // description: 효과 설명 //
    description: string;
    
    // description: 해당 포켓몬 //
    pocketmons: string[];
}