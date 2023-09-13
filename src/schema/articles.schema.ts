import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({
    timestamps: true,
  })
  export class Article {
    @Prop()
    title: string;
  
    @Prop()
    description: string;

    @Prop()
    short_description: string;
  
    @Prop()
    author: string;
  
    @Prop()
    image: string;
  
   
  }
  
  export const ArticleSchema = SchemaFactory.createForClass(Article);