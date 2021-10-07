import { Body, Controller, Get, HttpStatus, Post, Put, Req, Res } from '@nestjs/common';
import { CreateProductDTO } from 'src/product/dto/product.dto';

@Controller('product')
export class ProductController {

    @Get()
    getProducts(@Req() req, @Res() res){
        return res.status(HttpStatus.OK).json({
            message:'Ok'
        })
    }

    @Post()
    postProduct(@Body() createProductDTO: CreateProductDTO, @Res() res){
        

        return res.status(HttpStatus.OK).json({
            message:'Ok',
            body: createProductDTO
        })
    }
   
    @Put('/:id')
    putProduct(@Req() req, @Body() createProductDTO: CreateProductDTO, @Res() res){
        return res.status(HttpStatus.OK).json({
            message:'Ok',
            body: req.params.id
        })

    }
}
