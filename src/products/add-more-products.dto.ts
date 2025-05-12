import { IsInt, IsOptional, IsString } from "class-validator";

// Schema
export class AddMoreProductsDto{
    @IsInt()
    count:number;

    @IsInt()
    @IsOptional()
    price?:number;

    @IsString()
    name:string;
}
