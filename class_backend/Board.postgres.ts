import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment") //PK(Primary key): map의 id와 같은 역할 , 고유한 값을 가지게 함
  number!: number;

  @Column({ type: "text" })
  writer!: String;

  @Column({ type: "text" })
  title!: String;

  @Column({ type: "integer" })
  age!: number;
}
