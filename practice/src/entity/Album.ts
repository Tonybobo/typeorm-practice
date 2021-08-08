import {
	Column,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn
} from 'typeorm';
import { Photo } from './Photo';

@Entity({ name: 'Album' })
export class Album {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@ManyToMany((type) => Photo, (photo) => photo.album)
	@JoinTable()
	photos: Photo[];
}
