export interface Project {
  id: number;
  title: string;
  imgSrc: string;
  mobileImgSrc?: string;
  techStack: string;
  slides: string[];
  repoUrls: string[];
  collaboration: boolean;
  description: string;
}
