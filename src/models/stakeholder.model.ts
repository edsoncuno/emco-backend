import { Schema, model } from 'mongoose';

interface IStakeholder {
    nombre?: string;
    lugar?: string;
    tipo?: string;
}

const stakeholderSchema = new Schema<IStakeholder>({
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

export default model<IStakeholder>('Stakeholder', stakeholderSchema);