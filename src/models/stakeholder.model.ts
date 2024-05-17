import { Schema, model } from 'mongoose';
import { Stakeholder } from "../interfaces/stakeholder.interface"

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