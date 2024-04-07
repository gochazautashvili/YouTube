import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { resizeImage } from "./resize";

export const uploadImage = async (file, onProgress, url) => {
    const storageRef = ref(storage, Date.now() + file.name);

    const resizedImage = await resizeImage(file, 500, 450, 'blob');

    const uploadTask = uploadBytesResumable(storageRef, resizedImage);

    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            onProgress(progress)
        },
        (error) => {
            console.log(error);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                url(downloadURL)
            });
        }
    );
}

export const uploadVideo = async (file, onProgress, url) => {
    const storageRef = ref(storage, Date.now() + file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            onProgress(progress)
        },
        (error) => {
            console.log(error);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                url(downloadURL)
            });
        }
    );
}

