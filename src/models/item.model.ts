import { Schema, model } from 'mongoose';

interface IItem {
    nombre?: string;
    tipo?: string;
    precioDeCompra?: number;
    precioDeVenta?: number;
    unidadDeMedida?: string;
}

const itemSchema = new Schema<IItem>({
    nombre: String,
    tipo: String,
    precioDeCompra: Number,
    precioDeVenta: Number,
    unidadDeMedida: String
}, {
    versionKey: false, toJSON: {
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
        }
    }
});

const Item = model<IItem>('Item', itemSchema);