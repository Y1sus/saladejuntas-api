import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Salon } from "./salon.model";
import { Usuario } from "./usuario.model";

/**
 * @class Reservacion
 * @extends Model
 * @description Modelo de la tabla reservacion
 * @developer Jes´ús Montalvo
 * @version 1.0.0
 * @since 1.0.0
 * @date 2022-09-17
 * @license Owner
 * @language typescript
 * */
@Table({
  tableName: "reservacion",
  underscored: true,
  timestamps: true,
  createdAt: "created_at",
  updatedAt: false,
  deletedAt: false,
})
export class Reservacion extends Model {
  @Column({
    field: "id_reservacion",
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  })
  id_reservacion?: number;

  @ForeignKey(() => Usuario)
  @Column({ allowNull: false })
  id_usuario?: number;

  @BelongsTo(() => Usuario)
  private declare usuario?: Usuario;

  @ForeignKey(() => Salon)
  @Column({ allowNull: false })
  id_salon?: number;

  @BelongsTo(() => Salon)
  private declare salon?: Salon;

  @Column({ allowNull: false })
  private declare hora_inicial?: string;

  @Column({ allowNull: false })
  private declare hora_final?: string;

  @Column({ allowNull: false })
  private declare active?: number;
}
