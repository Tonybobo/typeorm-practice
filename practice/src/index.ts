import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User';
import { Photo } from './entity/Photo';
import { PhotoMetadata } from './entity/PhotoMetadata';
import { connect } from 'net';
import { ConnectionOptions } from 'tls';
import { Album } from './entity/Album';

createConnection()
	.then(async (connection) => {
		// let photo = new Photo();
		// photo.name = 'tony';
		// photo.description = 'i am tony';
		// photo.filename = 'profile.jpg';
		// photo.views = 1;
		// photo.isPublished = true;
		// let metadata = new PhotoMetadata();
		// metadata.height = 640;
		// metadata.width = 480;
		// metadata.comment = 'cybershoot';
		// metadata.orientation = 'portrait';
		// metadata.compressed = true;
		// metadata.photo = photo;
		// let photoRepository = connection.getRepository(Photo);
		// let metadataRepository = connection.getRepository(PhotoMetadata);
		// await photoRepository.save(photo);
		// await metadataRepository.save(metadata);
		// console.log(
		// 	'Metadata is saved, and relation between metadata and photo is created in the database too'
		// );
		// let photoRepository = connection.getRepository(Photo);
		// let photos = await photoRepository.find({ relations: ['metadata'] });
		// console.log(photos);
		// let photos = await connection
		// 	.getRepository(Photo)
		// 	.createQueryBuilder('photo')
		// 	.innerJoinAndSelect('photo.metadata', 'metadata')
		// 	.getMany();
		// console.log(photos);
		// let photo = new Photo();
		// photo.name = 'Me and Bears';
		// photo.description = 'I am near polar bears';
		// photo.filename = 'photo-with-bears.jpg';
		// photo.views = 1;
		// photo.isPublished = true;
		// // create photo metadata object
		// let metadata = new PhotoMetadata();
		// metadata.height = 640;
		// metadata.width = 480;
		// metadata.compressed = true;
		// metadata.comment = 'cybershoot';
		// metadata.orientation = 'portrait';
		// photo.metadata = metadata; // this way we connect them
		// // get repository
		// let photoRepository = connection.getRepository(Photo);
		// // saving a photo also save the metadata
		// await photoRepository.save(photo);
		// console.log('Photo is saved, photo metadata is saved too.');
		// let album1 = new Album();
		// album1.name = 'Bears';
		// await connection.manager.save(album1);
		// let album2 = new Album();
		// album2.name = 'Me';
		// await connection.manager.save(album2);
		// // create a few photos
		// let photo = new Photo();
		// photo.name = 'Me and Bears';
		// photo.description = 'I am near polar bears';
		// photo.filename = 'photo-with-bears.jpg';
		// photo.views = 1;
		// photo.isPublished = true;
		// photo.album = [album1, album2];
		// await connection.manager.save(photo);
		// // now our photo is saved and albums are attached to it
		// // now lets load them:
		// const loadedPhoto = await connection
		// 	.getRepository(Photo)
		// 	.find({ relations: ['album'] });
		// console.log(loadedPhoto);
		// console.log(photo.album);
		// let photos = await connection
		// 	.getRepository(Photo)
		// 	.createQueryBuilder('photo') // first argument is an alias. Alias is what you are selecting - photos. You must specify it.
		// 	.innerJoinAndSelect('photo.metadata', 'metadata')
		// 	.leftJoinAndSelect('photo.albums', 'album')
		// 	.where('photo.isPublished = true')
		// 	.orderBy('photo.id', 'DESC')
		// 	.skip(5)
		// 	.take(10)
		// 	.getMany();
		// console.log(photos);
	})
	.catch((error) => console.log(error));
