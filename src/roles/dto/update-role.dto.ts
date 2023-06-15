import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';
/*
 It is creating a new UpdateRoleDto class based on the CreateRoleDto class using the PartialType utility.
 This means that the UpdateRoleDto will have all the same properties as the CreateRoleDto,
 but any of those properties can optionally be omitted when constructing the UpdateRoleDto.
 This makes it useful for when you want to update only some of the properties of a given object.
*/
export class UpdateRoleDto extends PartialType(CreateRoleDto) {}
