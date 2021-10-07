import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Post, Put, Req, Res } from '@nestjs/common';
import { CreateProductDTO } from 'src/product/dto/product.dto';
import { ProductService } from 'src/product/product.service';

@Controller('product')
export class ProductController {
    constructor(private _productService: ProductService){}

    @Get()
    async getProducts(@Req() req, @Res() res){

        const result = await this._productService.getProducts();
        return res.status(HttpStatus.OK).json({
            message:'Ok',
            data: result
        })
    }


    @Get('/:id')
    async getProductById(@Req() req, @Res() res){

        const result = await this._productService.getProductById(req.params.id);

        if(!result){
            throw new NotFoundException('Producto no encontrado');
        }
        return res.status(HttpStatus.OK).json({
            message:'Producto encontrado!',
            data: result
        });
    }

    @Post()
    async postProduct(@Body() createProductDTO: CreateProductDTO, @Res() res){
        
        const result = await this._productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message:'Producto guardado con éxito',
            data: result
        })
    }
   
    @Put('/:id')
    async putProduct(@Req() req, @Body() createProductDTO: CreateProductDTO, @Res() res){

        const result = await this._productService.updateProduct(req.params.id, createProductDTO);
        
        if(!result) throw new NotFoundException('Producto no encontrado');

        return res.status(HttpStatus.OK).json({
            message:'Producto actualizado con éxito',
            data: result
        })

    }

    @Delete('/:id')
    async deleteProduct(@Req() req, @Res() res ){
        const result = this._productService.deleteProduct(req.params.id);

        if(!result) throw new NotFoundException('Producto no encontrado');
        
        return res.status(HttpStatus.OK).json({
            message:'Producto eliminado con éxito',
            data: result
        });
    }
}
