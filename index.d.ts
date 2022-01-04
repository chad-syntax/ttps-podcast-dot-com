declare global {
  interface Window {
    fnames: any[];
    ftypes: any[];
    jQuery: any;
  }

  interface Episode {
    url: string;
    title: string;
    slug: string;
  }
}

export {};
