import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({ type: 'datetime' })
  createdAt: string;

  @ManyToOne(() => MenuItem, menuItem => menuItem.children)
  parent: MenuItem;

  @OneToMany(() => MenuItem, menuItem => menuItem.parent)
  children: MenuItem[];
}
