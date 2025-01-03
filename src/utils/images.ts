export const imageConfig = {
  sizes: [16, 32, 192, 512],
  formats: ['png', 'webp'],
  baseUrl: '/icons/icon',
  defaultSize: 512
};

export function getSrcSet(basename: string, size: number) {
  return `${basename}-${size}.webp 1x, ${basename}-${size * 2}.webp 2x`;
}
