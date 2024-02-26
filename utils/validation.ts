const IMAGE_MAX_SIZE = 5000000;

export function checkImageExtension(image: File) {
    try {
        const imageExtension = image.name.split('.').pop();
        if (imageExtension === 'jpg' || imageExtension === 'png' || imageExtension === 'jpeg') {
            return true;
        }
        return false;
    } catch (error) {
        const err = error as Error;
        console.error(err);
    }
}

export function checkImageSize(image: File) {
    try {
        return image.size < IMAGE_MAX_SIZE;
    } catch (error) {
        const err = error as Error;
        console.error(err);
    }
}
