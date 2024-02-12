import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PaginationRequestDto } from 'dto/pagination-request.dto';

@Injectable()
export class PaginationTransformPipe implements PipeTransform {
  async transform(dto: PaginationRequestDto, { metatype }: ArgumentMetadata) {
    if (!metatype) {
      return dto;
    }
    return plainToInstance(metatype, dto);
  }
}
