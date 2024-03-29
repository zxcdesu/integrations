import { PartialType } from '@nestjs/mapped-types';
import { IsUUID } from 'class-validator';
import { CreateIntegrationDto } from './create-integration.dto';

export class UpdateIntegrationDto extends PartialType(CreateIntegrationDto) {
  @IsUUID()
  id: string;
}
