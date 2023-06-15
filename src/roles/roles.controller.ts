import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus,
  UseFilters,
  ForbiddenException,
  ParseIntPipe,
  UsePipes, ParseBoolPipe, Query, DefaultValuePipe,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import {CreateRoleDto, createRoleSchema} from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Observable, of } from 'rxjs';
import { HttpExceptionFilter } from '../exception/http-exception.filter';
import { JoiValidationPipe } from '../pipes/joi-validation/joi-validation.pipe';
import {ValidationPipe} from "../pipes/validation/validation.pipe";


@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @HttpCode(204)
  @UsePipes(new JoiValidationPipe(createRoleSchema))
  create(@Body() createRoleDto: CreateRoleDto) {
    return `This action adds a new role with name: ${createRoleDto.name} admin: ${createRoleDto.admin} des: ${createRoleDto.des}`;
  }

  /*
The above code is fully valid. Furthermore,
 Nest route handlers are even more powerful by being able to return RxJS observable streams.
 Nest will automatically subscribe to the source underneath and take the last emitted value (once the stream is completed).
 @Get()
  findAll(): Observable<any[]> {
    return of([]);
  }
*/
  @Get()
  @UseFilters(new HttpExceptionFilter())
  async findAll(
    @Query('activeOnly', new DefaultValuePipe(false), ParseBoolPipe) activeOnly: boolean,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
  ): Promise<any[]> {
    return [
      { id: 1, name: 'Role #1' },
      { id: 2, name: 'Role #2' },
    ];
  }

  @Get(':id')
  @UseFilters(new HttpExceptionFilter())
  findOne(@Param('id', ParseIntPipe) id: number) {
    // try {
    //   if (id < 0) {
    //     throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    //   } else {
    return this.rolesService.findOne(+id);
    //   }
    // } catch (error) {
    //   throw new HttpException(
    //     {
    //       status: HttpStatus.FORBIDDEN,
    //       error: 'This is a custom message',
    //     },
    //     HttpStatus.FORBIDDEN,
    //     {
    //       cause: error,
    //     },
    //   );
    // }
  }

  /*
  you can use @Put(':id')
  PUT  and  PATCH  are HTTP request methods used to modify or update resources on a web server.
  PUT  is used to update an entire resource with a new representation.
  It replaces the entire resource with the new representation provided in the request.
  If the resource does not exist, it will be created by the server.

  PATCH , on the other hand, is used to modify an existing resource partially.
  It only updates the specific fields that were provided in the request and leaves any other fields unchanged.
  If the resource does not exist, the server should return a  404 Not Found  error.

  In summary,  PUT  is used to completely replace a resource, while  PATCH  is used to partially modify a resource.
  */
  @Patch(':id')
  update(@Param('id') id: string, @Body(new ValidationPipe()) updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseIntPipe()) id) {
    return this.rolesService.remove(+id);
  }
}
