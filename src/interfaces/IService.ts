export default interface IService {
  reverse: boolean; // Reverse content-image to image-content
  title: string; // Service title
  icon: string; // Service bootstrap Icon
  description: string; // Service description
  imageSrc: string; // Image src
  imageAlt: string; // Image alternative text
  imagePosition: string; // Image position, end if not reversed else start
  buttonText: string;
  buttonTo: string;
}
