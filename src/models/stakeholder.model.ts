import { Schema, model } from 'mongoose';

export interface Stakeholder {
    nombre?: string;
    lugar?: string;
    tipo?: string;
}

const stakeholderSchema = new Schema<Stakeholder>({
    nombre: String,
    lugar: String,
    tipo: String,
}, {
    versionKey: false, toJSON: {
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
        }
    }
});

export default model<Stakeholder>('Stakeholder', stakeholderSchema);