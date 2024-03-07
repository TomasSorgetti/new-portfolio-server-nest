import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Project extends Model<Project> {
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    image: string;
}