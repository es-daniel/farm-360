export default interface Farm {
  id?: string;
  name: string;
  description?: string;
  image?: File; // to upload new images
  imagePath?: string; // image path on firebase storage
  imageUrl?: string; // image URL on server
}
