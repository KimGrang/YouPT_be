import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import * as AWS from 'aws-sdk';

@ApiTags('이미지 업로드')
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'image upload',
    // type: FileUploadDto,
  })
  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return await this.imageService.upload(file)
  }
}
