interface CustomImageLoaderProps {
  // width
  w?: number;
  // aspect ratio
  ar?: string;
  fit?: string;
}

enum Heading {
  intro = 'intro',
  career = 'career',
  life = 'life',
  info = 'info',
}

export type { CustomImageLoaderProps };
export { Heading };
