import { Body, Controller, Post } from '@nestjs/common';
import { PocketmonService } from './pocketmon.service';
import { PostCharacteristicDto, PostItemDto, PostPocketmonDto, PostSkillDto, PostSkillMachineDto } from './dto';

@Controller('pocketmon')
export class PocketmonController {
    constructor(
        private readonly pocketmonService: PocketmonService
    ) {}

    @Post('')
    post(
        @Body() dto: PostPocketmonDto
    ) {
        return this.pocketmonService.post(dto);
    }

    @Post('skill')
    postSkill(
        @Body() dto: PostSkillDto
    ) {
        return this.pocketmonService.postSkill(dto);
    }

    @Post('skill-machine')
    postSkillMachine(
        @Body() dto: PostSkillMachineDto
    ) {
        return this.pocketmonService.postSkillMachine(dto);
    }

    @Post('characteristic')
    postCharacteristic(
        @Body() dto: PostCharacteristicDto
    ) {
        return this.pocketmonService.postCharacteristic(dto);
    }

    @Post('item')
    postItem(
        @Body() dto: PostItemDto
    ) {
        return this.pocketmonService.postItem(dto);
    }
}
