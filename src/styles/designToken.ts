// Design Tokens für konsistente Styling-Werte
export const designTokens = {
  spacing: {
    sectionPadding: 'py-32',
    containerPadding: 'px-6',
    gridGap: 'gap-20',
    textSpacing: 'mb-8',
    titleSpacing: 'mb-12'
  },
  
  typography: {
    // Logo - Canto Bold, Versalien
    logo: 'font-canto-bold text-2xl lg:text-3xl font-bold tracking-wide uppercase',
    
    // Headlines - Canto Semibold, Versalien  
    heroTitle: 'font-canto-semibold text-5xl lg:text-7xl font<-semibold tracking-wide uppercase',
    heroSubtitle: 'font-canto-semibold text-xl lg:text-2xl font-semibold opacity-90 uppercase',
    sectionTitle: 'font-canto-semibold text-4xl lg:text-6xl font-semibold tracking-[0.2em] uppercase',
    subsectionTitle: 'font-canto-semibold text-3xl lg:text-5xl font-semibold tracking-[0.15em] uppercase',
    
    // Body Text - Muli Regular
    bodyLarge: 'font-muli text-xl lg:text-2xl font-normal leading-[1.8] tracking-wide',
    bodyRegular: 'font-muli text-lg font-normal leading-[1.8] tracking-wide',
    bodySmall: 'font-muli text-base font-normal leading-[1.6] tracking-wide'
  },
  
  layout: {
    maxContentWidth: 'max-w-3xl',
    maxTextWidth: 'max-w-lg',
    gridCols: 'lg:grid-cols-12',
    imageCol: 'lg:col-span-7',
    textCol: 'lg:col-span-5',
    aspectRatio: 'aspect-[5/4]'
  },
  
  colors: {
    // Brand Colors - CSS Variables
    primary: 'var(--brand-primary)',
    secondary: 'var(--brand-secondary)',
    tertiary: 'var(--brand-tertiary)',
    black: 'var(--brand-black)',
    
    // Background Colors - Using semantic tokens
    backgroundWhite: 'bg-background',
    backgroundPrimary: 'bg-brand-primary',
    backgroundSecondary: 'bg-brand-secondary',
    backgroundTertiary: 'bg-brand-tertiary',
    backgroundBlack: 'bg-brand-black',
    backgroundMuted: 'bg-muted',
    backgroundSurface: 'bg-surface',
    
    // Text Colors - Using semantic tokens
    textPrimary: 'text-brand-primary',
    textSecondary: 'text-brand-secondary',
    textTertiary: 'text-brand-tertiary',
    textBlack: 'text-foreground',
    textWhite: 'text-primary-foreground',
    textMuted: 'text-muted-foreground',
    
    // Border Colors - Using semantic tokens
    borderPrimary: 'border-brand-primary',
    borderSecondary: 'border-brand-secondary',
    borderTertiary: 'border-brand-tertiary',
    borderBlack: 'border-foreground',
    borderDefault: 'border-border'
  },
  
  elements: {
    designLine: 'w-px bg-brand-primary',
    designLineSecondary: 'w-px bg-brand-secondary',
    designLineBlack: 'w-px bg-foreground',
    designLineShort: 'h-12',
    designLineLong: 'h-16',
    imagePlaceholder: 'bg-brand-tertiary relative overflow-hidden',
    button: 'bg-brand-primary text-primary-foreground px-12 py-4 text-lg font-muli font-medium tracking-wide hover:bg-brand-primary-hover transition-colors duration-300',
    buttonSecondary: 'bg-brand-secondary text-secondary-foreground px-12 py-4 text-lg font-muli font-medium tracking-wide hover:bg-brand-secondary-hover transition-colors duration-300',
    buttonOutline: 'border-2 border-brand-primary text-brand-primary px-12 py-4 text-lg font-muli font-medium tracking-wide hover:bg-brand-primary hover:text-primary-foreground transition-colors duration-300'
  }
} as const

// Helper-Funktionen für häufige Kombinationen
export const getBackgroundClass = (bg: 'white' | 'primary' | 'secondary' | 'tertiary' | 'black') => {
  switch (bg) {
    case 'primary': return designTokens.colors.backgroundPrimary
    case 'secondary': return designTokens.colors.backgroundSecondary
    case 'tertiary': return designTokens.colors.backgroundTertiary
    case 'black': return designTokens.colors.backgroundBlack
    default: return designTokens.colors.backgroundWhite
  }
}

export const getTextColorClass = (color: 'primary' | 'secondary' | 'tertiary' | 'black' | 'white') => {
  switch (color) {
    case 'primary': return designTokens.colors.textPrimary
    case 'secondary': return designTokens.colors.textSecondary
    case 'tertiary': return designTokens.colors.textTertiary
    case 'white': return designTokens.colors.textWhite
    default: return designTokens.colors.textBlack
  }
}

export const getImageOrderClass = (position: 'left' | 'right') => 
  position === 'right' ? 'lg:order-2' : ''

export const getTextOrderClass = (position: 'left' | 'right') => 
  position === 'right' ? 'lg:order-1' : ''

export const getTextAlignClass = (position: 'left' | 'right') => 
  position === 'right' ? 'lg:ml-auto' : ''
