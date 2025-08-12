import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

interface PostCSSContext {
  syntax?: string;
  env?: 'development' | 'production';
  map?: boolean;
}

const config = (ctx: PostCSSContext) => ({
  syntax: ctx.syntax || 'postcss-scss',
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: [autoprefixer(), cssnano()],
});

export default config;
