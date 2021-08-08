import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Photo } from './Photo';

@Entity({ name: 'Author' })
export class Author {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@OneToMany((type) => Photo, (photo) => photo.author)
	photos: Photo[];
}
