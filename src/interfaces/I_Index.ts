interface CustomImageLoaderProps {
  imgixDomain: string;
  imgixSecureURLToken: string;
  imgixParams?: {
    fit: string;
  };
}

export type { CustomImageLoaderProps };
