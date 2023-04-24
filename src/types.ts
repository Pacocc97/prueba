/**
 * Model Product
 *
 */
export type Product = {
  id: string;
  name: string;
  description: string | null;
  brand: string | null;
  currency: string | null;
  slug: string;
  imageId: string;
  SKU: string | null;
  model: string | null;
  stock: number;
  stockWarn: number;
  price: number;
  height: number | null;
  width: number | null;
  length: number | null;
  weight: number | null;
  attributes: any | null;
  tags: string[];
  gifId: string | null;
  brochureId: string | null;
  manualId: string | null;
  type: string | null;
  unit: string | null;
  title: string | null;
  descriptionMeta: string | null;
  canonical: string | null;
  noindex: boolean | null;
  nofollow: boolean | null;
  charset: string | null;
  openGraphBasicTitle: string | null;
  openGraphBasicType: string | null;
  openGraphBasicImageId: string | null;
  openGraphBasicUrl: string | null;
  openGraphOptionalAudio: string | null;
  openGraphOptionalDescription: string | null;
  openGraphOptionalDeterminer: string | null;
  openGraphOptionalLocale: string | null;
  openGraphOptionalLocaleAlternate: string | null;
  openGraphOptionalSiteName: string | null;
  openGraphOptionalVideo: string | null;
  openGraphImageUrl: string | null;
  openGraphImageSecureUrl: string | null;
  openGraphImageType: string | null;
  openGraphImageWidth: number | null;
  openGraphImageHeight: number | null;
  openGraphImageAlt: string | null;
  openGraphArticleAuthor: string | null;
  openGraphArticleSection: string | null;
  openGraphArticleTags: string[];
  twitterCard: string | null;
  twitterSite: string | null;
  twitterCreator: string | null;
  openGraphArticlePublishedTime: Date | null;
  openGraphArticleModifiedTime: Date | null;
  openGraphArticleExpirationTime: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  approval: string[];

  image: Image;
  ImagesExtra: (ImagesExtra & { image: Image })[];
  Gif: Gif | null;
  brochure: Pdf | null;
  manual: Pdf | null;
  ProductCategory: ProductCategory[] | null;
};

/**
 * Model Image
 *
 */
export type Image = {
  id: string;
  path: string;
  original: string;
  webp: string;
  blur: string;
  width: number;
  height: number;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Model ImagesExtra
 *
 */
export type ImagesExtra = {
  orden: number | null;
  imageId: string;
  productId: string;
  assignedAt: Date;
};

/**
 * Model Gif
 *
 */
export type Gif = {
  id: string;
  path: string;
  original: string;
  width: number;
  height: number;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Model Pdf
 *
 */
export type Pdf = {
  id: string;
  path: string;
  original: string;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Model ProductCategory
 *
 */
export type ProductCategory = {
  id: string;
  name: string;
  characteristics: any | null;
  parentId: string | null;
};
