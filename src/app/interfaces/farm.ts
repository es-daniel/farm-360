export default interface Farm {
  id?: string;
  name: string;
  description?: string;
  image?: File; // to upload new images
  imageUrl?: string; // image URL on server
}
