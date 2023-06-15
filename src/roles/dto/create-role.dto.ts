import * as Joi from 'joi';
import { IsString, IsInt, IsBoolean } from 'class-validator';

export const createRoleSchema = Joi.object({
  name: Joi.string().required(),
  admin: Joi.boolean().required(),
  des: Joi.string().required(),
});

export class CreateRoleDto {
  name: string;
  admin: boolean;
  des: string;
}

export class CreateRoleDto2 {
  @IsString()
  name: string;

  @IsBoolean()
  admin: boolean;

  @IsString()
  des: string;
}