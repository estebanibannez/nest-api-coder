import { Injectable } from '@nestjs/common';
import { Model } from  'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { IProduct } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private productModel: Model<IProduct>){}

    async getProducts(): Promise<IProduct[]> {
        const result = await this.productModel.find();
        return result;
    }

    async getProductById(id:string): Promise<IProduct> {
       const result = await this.productModel.findById(id);
       return result;
    }

    async createProduct(producto: CreateProductDTO): Promise<IProduct> {
        const product = new this.productModel(producto);
        return await product.save();
    }

    async deleteProduct(id: string): Promise<IProduct>{
        const result = await this.productModel.findByIdAndDelete(id, { new: true});
        return result;
    }

    async updateProduct(id:string, producto: CreateProductDTO): Promise<IProduct>{
        const result = await this.productModel.findByIdAndUpdate(id,
            { $set: producto },
            { new: true });
        return result;
    }
}
