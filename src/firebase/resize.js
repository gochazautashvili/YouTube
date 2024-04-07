import Resizer from 'react-image-file-resizer';

export const resizeImage = (file, maxWidth, maxHeight, type) => {
    const compressFormat = 'JPEG';
    const quality = 90;

    return new Promise((resolve, reject) => {
        Resizer.imageFileResizer(
            file,
            maxWidth,
            maxHeight,
            compressFormat,
            quality,
            0,
            (resizedImage) => {
                resolve(resizedImage);
            },
            type
        );
    });
};
