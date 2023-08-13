import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill } from 'src/schemas/skill.schema';
import { PostCharacteristicDto, PostItemDto, PostPocketmonDto, PostSkillDto, PostSkillMachineDto } from './dto';
import { SkillMachine } from 'src/schemas/skill-machine.schema';
import { Pocketmon } from 'src/schemas/pocketmon.schema';
import { Characteristic } from 'src/schemas/characteristic.schema';
import { Item } from 'src/schemas/item.schema';

@Injectable()
export class PocketmonService {
    constructor(
        @InjectModel(Item.name) private itemModel: Model<Item>,
        @InjectModel(Skill.name) private skillModel: Model<Skill>,
        @InjectModel(Pocketmon.name) private pocketmonModel: Model<Pocketmon>,
        @InjectModel(SkillMachine.name) private skillMachineModel: Model<SkillMachine>,
        @InjectModel(Characteristic.name) private characteristicModel: Model<Characteristic>,
    ) {}

    async post(dto: PostPocketmonDto): Promise<Pocketmon> {
        const createdPocketmon = new this.pocketmonModel(dto);
        createdPocketmon.save();
        return createdPocketmon;
    }

    async postSkill(dto: PostSkillDto): Promise<Skill> {
        const createdSkill = new this.skillModel(dto);
        createdSkill.save();
        return createdSkill;
    }

    async postSkillMachine(dto: PostSkillMachineDto): Promise<SkillMachine> {
        const createdSkillMachine = new this.skillMachineModel(dto);
        createdSkillMachine.save();
        return createdSkillMachine;
    }

    async postCharacteristic(dto: PostCharacteristicDto): Promise<Characteristic> {
        const createdCharacteristic = new this.characteristicModel(dto);
        createdCharacteristic.save();
        return createdCharacteristic;
    }

    async postItem(dto: PostItemDto): Promise<Item> {
        const createdItem = new this.itemModel(dto);
        createdItem.save();
        return createdItem;
    }

    
}
