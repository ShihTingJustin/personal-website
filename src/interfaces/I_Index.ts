interface CustomImageLoaderProps {
  imgixDomain: string;
  imgixSecureURLToken: string;
  imgixParams?: {
    // aspect ratio
    ar: string;
    fit: string;
  };
}

export type { CustomImageLoaderProps };
