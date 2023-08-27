import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  password: string;
  @Prop()
  userId: number;
  @Prop()
  username: string;
}

// export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
