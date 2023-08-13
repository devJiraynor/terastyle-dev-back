import { Module } from '@nestjs/common';
import { PocketmonService } from './pocketmon.service';
import { PocketmonController } from './pocketmon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Skill, SkillSchema } from 'src/schemas/skill.schema';
import { SkillMachine, SkillMachineSchema } from 'src/schemas/skill-machine.schema';
import { Pocketmon, PocketmonSchema } from 'src/schemas/pocketmon.schema';
import { Characteristic, CharacteristicSchema } from 'src/schemas/characteristic.schema';
import { Item, ItemSchema } from 'src/schemas/item.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Item.name, schema: ItemSchema },
    { name: Skill.name, schema: SkillSchema },
    { name: Pocketmon.name, schema: PocketmonSchema },
    { name: SkillMachine.name, schema: SkillMachineSchema },
    { name: Characteristic.name, schema: CharacteristicSchema },
  ])],
  providers: [PocketmonService],
  controllers: [PocketmonController]
})
export class PocketmonModule {}
