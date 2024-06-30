// declarations.d.ts
declare module 'tailwindcss/lib/util/flattenColorPalette' {
    import { Config } from 'tailwindcss';
  
    const flattenColorPalette: (colors: Config['theme']['colors']) => Record<string, string>;
    export = flattenColorPalette;
  }
  