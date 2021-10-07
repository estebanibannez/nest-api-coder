import { Document } from 'mongoose';

export interface IMessage extends Document{
    readonly autor: string;
    readonly email: string;
    readonly texto: string;
    readonly createdAt: string;
}