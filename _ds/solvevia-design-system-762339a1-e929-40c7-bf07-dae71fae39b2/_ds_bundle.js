/* @ds-bundle: {"format":4,"namespace":"SolveviaDesignSystem_762339","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"},{"name":"ComparisonTable","sourcePath":"components/marketing/ComparisonTable.jsx"},{"name":"ProcessStep","sourcePath":"components/marketing/ProcessStep.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"StatBlock","sourcePath":"components/marketing/StatBlock.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Gradient","sourcePath":"figma/components/Components.jsx"},{"name":"Star","sourcePath":"figma/components/Components.jsx"},{"name":"WhatWePower","sourcePath":"figma/components/Components.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"2542b65699a9","components/core/Button.jsx":"4db34d6e624e","components/core/Card.jsx":"110ee991dbe6","components/layout/Footer.jsx":"cd0ff9d3980d","components/marketing/ComparisonTable.jsx":"ffc8d2fd1c85","components/marketing/ProcessStep.jsx":"bc70e785124f","components/marketing/ServiceCard.jsx":"173a7ae98e0d","components/marketing/StatBlock.jsx":"da092a60814d","components/navigation/NavBar.jsx":"291171846393","figma/components/Components.jsx":"f856b8c3ee39","ui_kits/website/about.jsx":"22e1524d13ef","ui_kits/website/contact.jsx":"8959c27e14f4","ui_kits/website/data.js":"4958df886bf9","ui_kits/website/home.jsx":"c0b630ee01fc","ui_kits/website/howwework.jsx":"8b76138303ee","ui_kits/website/services.jsx":"7d9e43cca034","ui_kits/website/shared.jsx":"3fadaa868637"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SolveviaDesignSystem_762339 = window.SolveviaDesignSystem_762339 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const variantMap = {
  gold: {
    background: 'var(--accent-muted)',
    color: 'var(--accent)',
    border: '1px solid var(--accent)'
  },
  compliant: {
    background: 'rgba(77, 156, 110, 0.14)',
    color: 'var(--status-compliant)',
    border: '1px solid rgba(77,156,110,0.4)'
  },
  pending: {
    background: 'rgba(209, 164, 84, 0.14)',
    color: 'var(--status-pending)',
    border: '1px solid rgba(209,164,84,0.4)'
  },
  gap: {
    background: 'rgba(192, 99, 74, 0.14)',
    color: 'var(--status-gap)',
    border: '1px solid rgba(192,99,74,0.4)'
  },
  info: {
    background: 'rgba(74, 127, 192, 0.14)',
    color: 'var(--status-info)',
    border: '1px solid rgba(74,127,192,0.4)'
  },
  neutral: {
    background: 'var(--surface-muted)',
    color: 'var(--text-secondary)',
    border: '1px solid var(--border-default)'
  },
  dark: {
    background: 'var(--charcoal-800)',
    color: 'var(--text-muted)',
    border: '1px solid var(--border-subtle)'
  }
};
const sizeMap = {
  sm: {
    fontSize: 'var(--text-2xs)',
    padding: '3px 8px',
    letterSpacing: 'var(--tracking-widest)',
    borderRadius: 'var(--radius-xs)'
  },
  md: {
    fontSize: 'var(--text-xs)',
    padding: '4px 10px',
    letterSpacing: 'var(--tracking-wider)',
    borderRadius: 'var(--radius-xs)'
  }
};

/** @intentional Compliance-status label used across all service pages; no Figma kit counterpart. */
function Badge({
  children,
  variant = 'gold',
  size = 'md',
  dot = false,
  style: styleProp = {}
}) {
  const sz = sizeMap[size] || sizeMap.md;
  const vr = variantMap[variant] || variantMap.gold;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--weight-semibold)',
      textTransform: 'uppercase',
      lineHeight: 1,
      ...sz,
      ...vr,
      ...styleProp
    }
  }, dot && React.createElement('span', {
    style: {
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: 'currentColor',
      display: 'inline-block',
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeMap = {
  sm: {
    fontSize: 'var(--text-xs)',
    padding: '8px 18px',
    gap: '6px',
    letterSpacing: 'var(--tracking-widest)'
  },
  md: {
    fontSize: 'var(--text-sm)',
    padding: '12px 26px',
    gap: '8px',
    letterSpacing: 'var(--tracking-wider)'
  },
  lg: {
    fontSize: 'var(--text-base)',
    padding: '16px 34px',
    gap: '10px',
    letterSpacing: 'var(--tracking-wider)'
  }
};
const variantMap = {
  primary: {
    background: 'var(--accent)',
    color: 'var(--text-on-accent)',
    border: '1px solid var(--accent)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--accent)',
    border: '1px solid var(--accent)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid var(--border-default)'
  },
  dark: {
    background: 'var(--surface-elevated)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-default)'
  },
  light: {
    background: 'var(--beige-100)',
    color: 'var(--text-on-light)',
    border: '1px solid var(--border-on-light)'
  }
};

/** @intentional */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  href,
  icon,
  iconAfter,
  type = 'button',
  style: styleProp = {}
}) {
  const sz = sizeMap[size] || sizeMap.md;
  const vr = variantMap[variant] || variantMap.primary;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sz.gap,
    fontFamily: 'var(--font-primary)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: sz.fontSize,
    letterSpacing: sz.letterSpacing,
    textTransform: 'uppercase',
    padding: sz.padding,
    borderRadius: 'var(--radius-none)',
    border: vr.border,
    background: vr.background,
    color: vr.color,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'var(--transition-color)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    outline: 'none',
    ...styleProp
  };
  const props = {
    style,
    onClick: disabled ? undefined : onClick
  };
  if (href) {
    return React.createElement('a', {
      href,
      ...props
    }, icon || null, children, iconAfter || null);
  }
  return React.createElement('button', {
    type,
    disabled,
    ...props
  }, icon || null, children, iconAfter || null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
const variantMap = {
  dark: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-default)'
  },
  elevated: {
    background: 'var(--surface-elevated)',
    border: '1px solid var(--border-subtle)'
  },
  outlined: {
    background: 'transparent',
    border: '1px solid var(--border-default)'
  },
  light: {
    background: 'var(--surface-light)',
    border: '1px solid var(--border-on-light)'
  },
  accent: {
    background: 'var(--accent-muted)',
    border: '1px solid var(--border-accent)'
  },
  grid: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-default)'
  } /* Excel-cell style — use in grids */
};
const paddingMap = {
  none: '0',
  sm: 'var(--card-p-sm)',
  md: 'var(--card-p)',
  lg: 'var(--card-p-lg)'
};

/** @intentional */
function Card({
  children,
  variant = 'dark',
  padding = 'md',
  as: Tag = 'div',
  onClick,
  style: styleProp = {}
}) {
  const vr = variantMap[variant] || variantMap.dark;
  const pd = paddingMap[padding] ?? paddingMap.md;
  return React.createElement(Tag, {
    onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: pd,
      borderRadius: 'var(--radius-none)',
      ...vr,
      transition: 'var(--transition-color)',
      cursor: onClick ? 'pointer' : undefined,
      ...styleProp
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
/** @intentional */
function Footer({
  logoSrc,
  logoAlt = 'Solvevia',
  tagline,
  columns = [],
  legal = '© 2026 Solvevia. All rights reserved.',
  legalLinks = [],
  style: styleProp = {}
}) {
  return React.createElement('footer', {
    style: {
      background: 'var(--charcoal-950)',
      borderTop: '1px solid var(--border-default)',
      padding: 'var(--space-16) 0 var(--space-8)',
      ...styleProp
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-px)'
    }
  }, /* Top grid */
  React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: `1.4fr repeat(${columns.length}, 1fr)`,
      gap: 'var(--space-8)',
      paddingBottom: 'var(--space-12)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /* Brand column */
  React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, logoSrc ? React.createElement('img', {
    src: logoSrc,
    alt: logoAlt,
    style: {
      height: '32px',
      width: 'auto'
    }
  }) : React.createElement('span', {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-primary)'
    }
  }, logoAlt), tagline && React.createElement('p', {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-relaxed)',
      margin: 0,
      maxWidth: '280px'
    }
  }, tagline)), /* Nav columns */
  columns.map((col, ci) => React.createElement('div', {
    key: ci,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, React.createElement('p', {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-secondary)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      margin: '0 0 var(--space-2)'
    }
  }, col.title), (col.links || []).map((link, li) => React.createElement('a', {
    key: li,
    href: link.href || '#',
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      textDecoration: 'none',
      transition: 'color var(--duration-base) var(--ease-out)',
      display: 'block'
    }
  }, link.label))))), /* Bottom bar */
  React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 'var(--space-6)',
      gap: 'var(--space-4)'
    }
  }, React.createElement('p', {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, legal), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'center'
    }
  }, legalLinks.map((link, i) => React.createElement('a', {
    key: i,
    href: link.href || '#',
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, link.label))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ComparisonTable.jsx
try { (() => {
/** @intentional */
function ComparisonTable({
  headers = [],
  rows = [],
  caption,
  style: styleProp = {}
}) {
  const colCount = headers.length;
  return React.createElement('div', {
    style: {
      overflowX: 'auto',
      border: '1px solid var(--border-default)',
      ...styleProp
    }
  }, caption && React.createElement('div', {
    style: {
      padding: 'var(--space-4) var(--space-6)',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      background: 'var(--surface-muted)'
    }
  }, caption), React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-primary)'
    }
  }, React.createElement('thead', null, React.createElement('tr', null, headers.map((h, i) => React.createElement('th', {
    key: i,
    style: {
      padding: 'var(--space-4) var(--space-6)',
      textAlign: i === 0 ? 'left' : 'center',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      color: i === 0 ? 'var(--text-muted)' : 'var(--accent)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      borderBottom: '1px solid var(--border-default)',
      background: 'var(--surface-elevated)',
      whiteSpace: 'nowrap'
    }
  }, h)))), React.createElement('tbody', null, rows.map((row, ri) => React.createElement('tr', {
    key: ri,
    style: {
      background: ri % 2 === 0 ? 'transparent' : 'var(--surface-muted)'
    }
  }, row.map((cell, ci) => React.createElement('td', {
    key: ci,
    style: {
      padding: 'var(--space-4) var(--space-6)',
      fontSize: 'var(--text-sm)',
      fontWeight: ci === 0 ? 'var(--weight-medium)' : 'var(--weight-regular)',
      color: ci === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
      textAlign: ci === 0 ? 'left' : 'center',
      borderBottom: '1px solid var(--border-subtle)',
      lineHeight: 'var(--leading-normal)'
    }
  }, cell)))))));
}
Object.assign(__ds_scope, { ComparisonTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ComparisonTable.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProcessStep.jsx
try { (() => {
/** @intentional */
function ProcessStep({
  number,
  title,
  description,
  imageSrc,
  isLast = false,
  style: styleProp = {}
}) {
  return React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '72px 1fr',
      gap: '0 var(--space-8)',
      ...styleProp
    }
  }, /* Left: number + connector line */
  React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 0
    }
  }, React.createElement('div', {
    style: {
      width: '48px',
      height: '48px',
      border: '1px solid var(--border-accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--text-sm)',
      color: 'var(--accent)',
      letterSpacing: 'var(--tracking-widest)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, number)), !isLast && React.createElement('div', {
    style: {
      flex: 1,
      width: '1px',
      background: 'var(--border-default)',
      minHeight: '48px'
    }
  })), /* Right: content */
  React.createElement('div', {
    style: {
      paddingBottom: isLast ? '0' : 'var(--space-12)'
    }
  }, React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--text-primary)',
      margin: '0 0 var(--space-3) 0',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)',
      paddingTop: '10px'
    }
  }, title), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)',
      margin: '0 0 var(--space-6) 0',
      maxWidth: '520px'
    }
  }, description), imageSrc && React.createElement('img', {
    src: imageSrc,
    alt: title,
    style: {
      width: '100%',
      maxWidth: '480px',
      height: 'auto',
      display: 'block',
      border: '1px solid var(--border-subtle)'
    }
  })));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
/** @intentional */
function ServiceCard({
  number,
  title,
  description,
  active = false,
  onClick,
  imageSrc,
  style: styleProp = {}
}) {
  return React.createElement('div', {
    onClick,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      alignItems: 'start',
      gap: 'var(--space-6)',
      padding: 'var(--space-8) 0',
      borderTop: '1px solid var(--border-default)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--transition-color)',
      ...styleProp
    }
  }, React.createElement('div', {
    style: {
      flex: 1
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      marginBottom: active ? 'var(--space-4)' : '0'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--text-sm)',
      color: 'var(--accent)',
      letterSpacing: 'var(--tracking-widest)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, number), React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: active ? 'var(--text-2xl)' : 'var(--text-xl)',
      color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
      margin: 0,
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 'var(--leading-snug)',
      transition: 'color var(--duration-base) var(--ease-out), font-size var(--duration-base) var(--ease-out)'
    }
  }, title)), active && description && React.createElement('p', {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)',
      margin: '0 0 0 calc(var(--text-sm) * 3)',
      maxWidth: '540px'
    }
  }, description)), active && imageSrc && React.createElement('div', {
    style: {
      width: '320px',
      aspectRatio: '4/3',
      overflow: 'hidden',
      border: '1px solid var(--border-default)',
      flexShrink: 0
    }
  }, React.createElement('img', {
    src: imageSrc,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatBlock.jsx
try { (() => {
/** @intentional */
function StatBlock({
  value,
  label,
  sublabel,
  bordered = false,
  style: styleProp = {}
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      padding: bordered ? 'var(--card-p)' : '0',
      border: bordered ? '1px solid var(--border-default)' : 'none',
      ...styleProp
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-7xl)',
      color: 'var(--accent)',
      lineHeight: 'var(--leading-none)',
      letterSpacing: 'var(--tracking-tight)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)'
    }
  }, label), sublabel && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--weight-regular)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-normal)'
    }
  }, sublabel));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/** @intentional */
function NavBar({
  logoSrc,
  logoAlt = 'Solvevia',
  links = [],
  ctaLabel = 'Talk to Us',
  ctaHref = '#contact',
  transparent = false,
  style: styleProp = {}
}) {
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const bg = transparent && !scrolled ? 'transparent' : 'var(--charcoal-900)';
  const borderBottom = scrolled ? '1px solid var(--border-default)' : '1px solid transparent';
  return React.createElement('header', {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      height: 'var(--nav-height)',
      background: bg,
      borderBottom,
      transition: 'background var(--duration-slow) var(--ease-out), border-color var(--duration-slow) var(--ease-out)',
      ...styleProp
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-px)',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /* Logo */
  React.createElement('a', {
    href: '/',
    style: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      textDecoration: 'none'
    }
  }, logoSrc ? React.createElement('img', {
    src: logoSrc,
    alt: logoAlt,
    style: {
      height: '36px',
      width: 'auto'
    }
  }) : React.createElement('span', {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-xl)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, logoAlt)), /* Nav links */
  React.createElement('nav', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      flex: 1,
      justifyContent: 'center'
    }
  }, links.map((link, i) => React.createElement('div', {
    key: i,
    style: {
      position: 'relative'
    },
    onMouseEnter: () => link.children && setOpenDropdown(i),
    onMouseLeave: () => setOpenDropdown(null)
  }, React.createElement('a', {
    href: link.href || '#',
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      letterSpacing: 'var(--tracking-normal)',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      transition: 'color var(--duration-base) var(--ease-out)',
      padding: '4px 0'
    }
  }, link.label, link.children && React.createElement('span', {
    style: {
      fontSize: '10px',
      opacity: 0.6
    }
  }, '▾')), /* Dropdown */
  link.children && openDropdown === i && React.createElement('div', {
    style: {
      position: 'absolute',
      top: '100%',
      left: '-16px',
      marginTop: '8px',
      background: 'var(--charcoal-800)',
      border: '1px solid var(--border-default)',
      minWidth: '220px',
      padding: 'var(--space-2) 0'
    }
  }, link.children.map((child, j) => React.createElement('a', {
    key: j,
    href: child.href || '#',
    style: {
      display: 'block',
      padding: 'var(--space-3) var(--space-4)',
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      transition: 'color var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out)'
    }
  }, child.label)))))), /* CTA */
  React.createElement('a', {
    href: ctaHref,
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      padding: '10px 22px',
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid var(--accent)',
      textDecoration: 'none',
      borderRadius: '0',
      transition: 'var(--transition-color)',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// figma/components/Components.jsx
try { (() => {
// Figma-materialized bundle stub.
// Real components are in Components.bundle.js (pre-transpiled, loads via <script>).
// This file satisfies the compiler's component-discovery requirement.
// Load the bundle in HTML: <script src="figma/components/Components.bundle.js">

/** @intentional */
function Gradient({
  color = 'gradient_1',
  style,
  className
} = {}) {
  if (typeof window !== 'undefined' && window.Gradient) return window.Gradient({
    color,
    style,
    className
  });
  return null;
}

/** @intentional */
function Star({
  star = 'star_1',
  style,
  className
} = {}) {
  if (typeof window !== 'undefined' && window.Star) return window.Star({
    star,
    style,
    className
  });
  return null;
}

/** @intentional */
function WhatWePower({
  service = '1',
  text1,
  text2,
  text3,
  text4,
  style,
  className
} = {}) {
  if (typeof window !== 'undefined' && window.WhatWePower) return window.WhatWePower({
    service,
    text1,
    text2,
    text3,
    text4,
    style,
    className
  });
  return null;
}
Object.assign(__ds_scope, { Gradient, Star, WhatWePower });
})(); } catch (e) { __ds_ns.__errors.push({ path: "figma/components/Components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/about.jsx
try { (() => {
/* Solvevia — About Us page */
const GOLD = '#D1A454',
  CHARCOAL = '#3D3B38',
  BLACK = '#292827',
  BEIGE = '#FAF8F5',
  PAPER = '#FCF2DE',
  GREY = '#EBEAE9',
  WHITE = '#FFFFFF',
  SOIL = '#A89F8A';
const DG = {
  backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(rgba(209,164,84,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(209,164,84,0.4) 1px,transparent 1px)',
  backgroundSize: '64px 20px,64px 20px,1920px 600px,1920px 600px'
};
function AboutPage({
  navigate
}) {
  const d = SD.ABOUT;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    h1: d.hero.h1,
    sub: d.hero.sub
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: BEIGE,
      padding: '96px 0',
      borderBottom: `1px solid ${GREY}`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.6fr',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Lbl, {
    dark: true
  }, "Our story"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 34,
      letterSpacing: '-0.03em',
      lineHeight: 1.15,
      color: CHARCOAL,
      margin: 0
    }
  }, d.story.heading)), /*#__PURE__*/React.createElement("div", null, d.story.body.split('\n\n').map((para, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 16,
      lineHeight: 1.75,
      color: '#555',
      margin: '0 0 20px'
    }
  }, para)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: PAPER,
      padding: '80px 0',
      borderBottom: `1px solid ${GREY}`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 1,
      background: GREY
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: WHITE,
      padding: 40
    }
  }, /*#__PURE__*/React.createElement(Lbl, {
    dark: true
  }, "Mission"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 18,
      color: CHARCOAL,
      lineHeight: 1.5,
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, d.mission)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: BEIGE,
      padding: 40
    }
  }, /*#__PURE__*/React.createElement(Lbl, {
    dark: true
  }, "Vision"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 18,
      color: CHARCOAL,
      lineHeight: 1.5,
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, d.vision))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: BLACK,
      ...DG,
      padding: '96px 0',
      borderBottom: `1px solid rgba(255,255,255,0.1)`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement(Lbl, null, "Core values"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 34,
      letterSpacing: '-0.03em',
      color: BEIGE,
      margin: '0 0 48px'
    }
  }, "The principles that guide our work."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 1,
      background: 'rgba(255,255,255,0.1)'
    }
  }, d.values.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: CHARCOAL,
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 300,
      fontSize: 13,
      color: GOLD,
      letterSpacing: '0.1em',
      display: 'block',
      marginBottom: 16
    }
  }, v.n), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 16,
      color: BEIGE,
      margin: '0 0 12px'
    }
  }, v.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 14,
      color: 'rgba(250,248,245,0.6)',
      lineHeight: 1.65,
      margin: 0
    }
  }, v.desc)))))), /*#__PURE__*/React.createElement(TeamGrid, null), /*#__PURE__*/React.createElement("section", {
    style: {
      background: BEIGE,
      padding: '96px 0',
      borderBottom: `1px solid ${GREY}`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.6fr',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Lbl, {
    dark: true
  }, "Why this matters now"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 34,
      letterSpacing: '-0.03em',
      lineHeight: 1.15,
      color: CHARCOAL,
      margin: 0
    }
  }, d.whyNow.heading)), /*#__PURE__*/React.createElement("div", null, d.whyNow.body.split('\n\n').map((para, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 16,
      lineHeight: 1.75,
      color: '#555',
      margin: '0 0 20px'
    }
  }, para)))))), /*#__PURE__*/React.createElement(FooterCTA, {
    text: d.footerCta,
    navigate: navigate
  }));
}
window.AboutPage = AboutPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/about.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/contact.jsx
try { (() => {
/* Solvevia — Contact page */
const GOLD = '#D1A454',
  CHARCOAL = '#3D3B38',
  BLACK = '#292827',
  BEIGE = '#FAF8F5',
  PAPER = '#FCF2DE',
  GREY = '#EBEAE9',
  WHITE = '#FFFFFF',
  SOIL = '#A89F8A';
const DG = {
  backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(rgba(209,164,84,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(209,164,84,0.4) 1px,transparent 1px)',
  backgroundSize: '64px 20px,64px 20px,1920px 600px,1920px 600px'
};
const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  fontFamily: 'var(--font-primary)',
  fontSize: 15,
  color: CHARCOAL,
  background: WHITE,
  border: `1px solid ${GREY}`,
  borderRadius: 0,
  outline: 'none',
  boxSizing: 'border-box',
  display: 'block',
  marginTop: 6
};
const labelStyle = {
  fontFamily: 'var(--font-primary)',
  fontWeight: 600,
  fontSize: 12,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: SOIL,
  display: 'block'
};
const selectStyle = {
  ...inputStyle,
  appearance: 'none',
  cursor: 'pointer'
};
function ContactPage({
  navigate
}) {
  const d = SD.CONTACT;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    h1: d.hero.h1,
    sub: d.hero.sub
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: BEIGE,
      padding: '96px 0',
      borderBottom: `1px solid ${GREY}`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Lbl, {
    dark: true
  }, "Tell us about your situation."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 15,
      color: '#666',
      lineHeight: 1.65,
      margin: '0 0 32px'
    }
  }, d.formIntro), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      border: `1px solid ${GOLD}`,
      background: PAPER
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 18,
      color: CHARCOAL,
      margin: '0 0 8px'
    }
  }, "Message sent."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 15,
      color: '#666',
      margin: 0
    }
  }, "We will be in touch within one business day.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, [['Name', 'Your full name'], ['Organisation', 'Company or firm']].map(([lbl, ph]) => /*#__PURE__*/React.createElement("div", {
    key: lbl
  }, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, lbl), /*#__PURE__*/React.createElement("input", {
    placeholder: ph,
    style: inputStyle
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, [['Role / Title', 'Your title'], ['Email address', 'Your email']].map(([lbl, ph]) => /*#__PURE__*/React.createElement("div", {
    key: lbl
  }, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, lbl), /*#__PURE__*/React.createElement("input", {
    placeholder: ph,
    style: inputStyle
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Which best describes you?"), /*#__PURE__*/React.createElement("select", {
    style: selectStyle
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select..."), /*#__PURE__*/React.createElement("option", null, "Listed company navigating SECP's sustainability mandate"), /*#__PURE__*/React.createElement("option", null, "Audit or advisory firm looking to build sustainability capability"), /*#__PURE__*/React.createElement("option", null, "Other"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "What is your most pressing need right now? ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      textTransform: 'none',
      letterSpacing: 0
    }
  }, "(optional)")), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Tell us what you're working on...",
    rows: 4,
    style: {
      ...inputStyle,
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onClick: () => setSent(true)
  }, "Send Message"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      border: `1px solid ${GREY}`,
      background: WHITE,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Lbl, {
    dark: true
  }, "Contact details"), [['Email', d.details.email], ['Location', d.details.location], ['Web', d.details.web]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: SOIL,
      margin: '0 0 2px'
    }
  }, k), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 15,
      color: CHARCOAL,
      margin: 0
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      border: `1px solid ${GREY}`,
      background: PAPER
    }
  }, /*#__PURE__*/React.createElement(Lbl, {
    dark: true
  }, "What happens next"), d.nextSteps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: i < d.nextSteps.length - 1 ? 20 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 300,
      fontSize: 13,
      color: GOLD,
      letterSpacing: '0.1em',
      flexShrink: 0
    }
  }, s.n), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 14,
      color: CHARCOAL,
      lineHeight: 1.55,
      margin: 0
    }
  }, s.title)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: CHARCOAL,
      ...DG,
      padding: '80px 0',
      borderBottom: `1px solid rgba(255,255,255,0.1)`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 1,
      background: 'rgba(255,255,255,0.1)'
    }
  }, [{
    title: 'For Listed Companies',
    body: "Not sure which phase you fall under? SECP's mandate applies in three phases based on turnover, assets, and employee thresholds. The scoping call gives you that clarity at no cost."
  }, {
    title: 'For Audit and Advisory Firms',
    body: 'Want to understand how a white-label arrangement would work? The scoping call focuses on which clients are already in scope, what services they\'re beginning to ask for, and how Solvevia supports your practice without competing with your client relationships.'
  }].map((card, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 40,
      background: i === 0 ? CHARCOAL : 'rgba(0,0,0,0.2)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 18,
      color: BEIGE,
      margin: '0 0 14px'
    }
  }, card.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 15,
      color: 'rgba(250,248,245,0.65)',
      lineHeight: 1.65,
      margin: 0
    }
  }, card.body)))))), /*#__PURE__*/React.createElement(FooterCTA, {
    text: d.footerCta,
    navigate: navigate
  }));
}
window.ContactPage = ContactPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Solvevia website content — all copy verbatim from brief */
window.SD = {
  NAV_LINKS: [{
    label: 'About Us',
    page: 'about'
  }, {
    label: 'How We Work',
    page: 'how-we-work'
  }, {
    label: 'Services',
    children: [{
      label: 'Advisory',
      page: 'advisory'
    }, {
      label: 'Implementation',
      page: 'implementation'
    }, {
      label: 'Reporting and Assurance',
      page: 'reporting'
    }, {
      label: 'People and Talent',
      page: 'people-talent'
    }]
  }],
  FOOTER: {
    tagline: "Pakistan's dedicated sustainability advisory and compliance partner for SECP IFRS S1/S2 requirements.",
    cols: [{
      title: 'Company',
      links: [{
        label: 'About Us',
        page: 'about'
      }, {
        label: 'How We Work',
        page: 'how-we-work'
      }, {
        label: 'Blogs',
        page: 'home'
      }, {
        label: 'Careers',
        page: 'contact'
      }]
    }, {
      title: 'Services',
      links: [{
        label: 'Advisory',
        page: 'advisory'
      }, {
        label: 'Implementation',
        page: 'implementation'
      }, {
        label: 'Reporting and Assurance',
        page: 'reporting'
      }, {
        label: 'People and Talent',
        page: 'people-talent'
      }]
    }, {
      title: 'Contact',
      links: [{
        label: 'solvevia.co',
        href: '#'
      }, {
        label: 'muzzammil@solvevia.co',
        href: 'mailto:muzzammil@solvevia.co'
      }, {
        label: 'Karachi, Pakistan',
        href: '#'
      }]
    }, {
      title: 'Legal',
      links: [{
        label: 'Privacy Policy',
        href: '#'
      }, {
        label: 'Terms of Use',
        href: '#'
      }]
    }]
  },
  TEAM: [{
    name: 'Muhammad Muzzammil Munaf',
    initials: 'MM',
    role: 'Co-Founder, Solvevia',
    credentials: 'Chartered Accountant, ICAP | Ex-PwC | Ex-KPMG | Ex-Unilever',
    bio: '10+ years of assurance and advisory experience across listed companies and financial institutions in Pakistan. Direct insight into how boards, CFOs, and audit committees are approaching SECP\'s mandate.'
  }, {
    name: 'Rizwan Mujtaba',
    initials: 'RM',
    role: 'Co-Founder, Solvevia',
    credentials: 'Business Development | Venture Strategy',
    bio: 'Career at the intersection of institutional capacity building and Pakistan\'s corporate ecosystem. Leads sustainability advisory design and delivery at Solvevia.'
  }, {
    name: 'Muhammad Ibrahim, FCA',
    initials: 'MI',
    role: 'Technical Adviser, Sustainability and Audit',
    credentials: 'FCA, ICAP | Senior Manager, Deloitte',
    bio: '16+ years of Big4 audit and assurance experience across Pakistan and internationally. Deep technical expertise in IFRS financial reporting and audit methodology.'
  }],
  HOME: {
    hero: {
      h1: 'Pakistan\'s sustainability mandate is here. We help you meet it.',
      sub: 'Solvevia is Pakistan\'s dedicated sustainability advisory partner, helping listed companies meet SECP\'s IFRS S1 and S2 requirements, and helping audit firms build the capability to serve them.'
    },
    regulatory: {
      heading: 'SECP\'s mandate is already in effect.',
      body: 'SECP made IFRS S1 and S2 sustainability reporting mandatory in December 2024. Phase I companies report from July 2025, Phase II from 2026, Phase III from 2027. Assurance is required from Year 2.\n\nIn December 2025, SECP expanded its ESG Disclosure Guidelines to cover all PSX-listed companies, aligned with the Pakistan Green Taxonomy. Boards must now form Sustainability Committees.\n\nEvery listed company in Pakistan now has sustainability reporting obligations. Most are not prepared.'
    },
    audiences: [{
      title: 'Listed Companies and Organisations',
      cta: 'I am a listed company',
      body: 'You are in scope. Your reporting deadline is approaching. Governance gaps, missing data infrastructure, and limited internal expertise stand between you and compliance. Solvevia takes you from readiness assessment to disclosure-ready reporting.'
    }, {
      title: 'Audit and Advisory Firms',
      cta: 'I am an audit or advisory firm',
      body: 'Your clients are already in scope, and they are asking you first. Most firms don\'t yet have sustainability capability. Solvevia gives you that capability under your own brand.'
    }],
    servicesIntro: {
      heading: 'Four service brackets. Full lifecycle coverage.',
      sub: 'From gap assessment to disclosure-ready reporting, one partner for the whole journey.'
    },
    services: [{
      number: '01',
      title: 'Advisory',
      bullets: 'Readiness and materiality assessment. Governance and strategy design. Climate risk assessment. Data and technology roadmap.',
      detail: 'We assess where you stand, design where you need to go, and map how to get there.',
      page: 'advisory'
    }, {
      number: '02',
      title: 'Implementation',
      bullets: 'GHG inventory and carbon accounting. ESG data systems. Policy and controls. Supplier assessments. Decarbonisation planning.',
      detail: 'We do the work. Turning advisory recommendations into systems, data, and operational reality.',
      page: 'implementation'
    }, {
      number: '03',
      title: 'Reporting and Assurance',
      bullets: 'Sustainability report preparation. IFRS S1 and S2 aligned disclosure. ESG Guidelines aligned disclosure. Assurance readiness preparation.',
      detail: 'We prepare your disclosure and make sure it holds up under independent review.',
      page: 'reporting'
    }, {
      number: '04',
      title: 'People and Talent',
      bullets: 'Sustainability learning and development. Professional certification preparation. Talent acquisition. In-house team training.',
      detail: 'Building the internal capability your organisation needs, so this doesn\'t stay outsourced forever.',
      page: 'people-talent'
    }],
    howWeWork: {
      heading: 'Six steps. First conversation to assurance-ready reporting.',
      steps: [{
        n: '01',
        title: 'Initial Scoping',
        desc: 'A focused conversation to understand your obligations and what support you need.'
      }, {
        n: '02',
        title: 'Readiness and Materiality',
        desc: 'Gap analysis, double materiality assessment, peer benchmarking, compliance roadmap.'
      }, {
        n: '03',
        title: 'Governance and Systems Design',
        desc: 'Board governance structure, sustainability committee design, data infrastructure blueprint.'
      }, {
        n: '04',
        title: 'Implementation',
        desc: 'GHG inventories built. Data systems deployed. Policies drafted. Controls embedded.'
      }, {
        n: '05',
        title: 'Report Preparation and Assurance Readiness',
        desc: 'Full IFRS S1 and S2 aligned disclosure, with documentation ready for independent review.'
      }, {
        n: '06',
        title: 'Capability and Ongoing Support',
        desc: 'Internal teams trained. Ongoing advisory as requirements evolve.'
      }]
    },
    why: {
      heading: 'Built for Pakistan. Not adapted from somewhere else.',
      points: [{
        n: '01',
        title: 'Pakistan-specific expertise',
        desc: 'Grounded in what SECP actually requires, not generic global frameworks.'
      }, {
        n: '02',
        title: 'Technical depth',
        desc: 'Deep knowledge of IFRS sustainability standards, GHG accounting, and ESG assurance, built on international professional standards.'
      }, {
        n: '03',
        title: 'Full lifecycle, single partner',
        desc: 'Advisory to talent, all within one firm. No handoffs, no accountability gaps.'
      }, {
        n: '04',
        title: 'Operational today',
        desc: 'Trained team, proven frameworks, ready now, not still building methodology while your deadline approaches.'
      }]
    },
    teamHeading: 'Chartered accountants and business builders. Big4 credentials. Deep Pakistan market knowledge.',
    footerCta: 'Your deadline is set. Let\'s make sure you are ready.'
  },
  ABOUT: {
    hero: {
      h1: 'Compliance requires more than good intentions. It requires the right partner.',
      sub: 'Solvevia helps Pakistani listed companies and audit firms navigate SECP\'s sustainability mandate, with technical rigour and deep local knowledge.'
    },
    story: {
      heading: 'Why Solvevia exists.',
      body: 'Solvevia was founded by chartered accountants with Big4 backgrounds and deep roots in Pakistan\'s corporate environment. We saw what was coming: SECP\'s IFRS S1 and S2 mandate would create demand for sustainability expertise that Pakistan\'s market wasn\'t ready to meet.\n\nMost listed companies have never produced a sustainability disclosure. Most audit firms don\'t yet have the capability to help them. The deadlines are already set.\n\nSolvevia was built to close that gap, grounded in what SECP actually requires, not a global template with Pakistan bolted on.\n\nWe cover the full journey within one firm. For companies, we are the execution partner. For firms, we are the technical capability behind their practice.'
    },
    mission: 'Help Pakistani organisations meet SECP\'s sustainability mandate with technical precision, from first assessment to assured reporting.',
    vision: 'To be Pakistan\'s most trusted sustainability advisory firm.',
    values: [{
      n: '01',
      title: 'Technical Rigour',
      desc: 'Grounded in IFRS S1/S2, the GHG Protocol, and ISSA 5000. No cutting corners.'
    }, {
      n: '02',
      title: 'Pakistan-First',
      desc: 'Built around Pakistan\'s regulatory environment, not adapted from it.'
    }, {
      n: '03',
      title: 'Full Accountability',
      desc: 'One firm, start to finish. No handoffs, no gaps.'
    }, {
      n: '04',
      title: 'Capability Building',
      desc: 'Our goal is to make our clients self-sufficient, not dependent.'
    }],
    whyNow: {
      heading: 'The window is narrowing.',
      body: 'Phase I companies are already reporting. Phase II starts in 2026, Phase III in 2027. Assurance follows from Year 2, meaning Phase I companies need assurance-ready documentation by 2027.\n\nPakistan\'s sustainability talent pool is thin. Governance gaps are widespread. Most companies have no ESG data infrastructure and no in-house expertise.\n\nSolvevia exists to close that gap, within a single firm.'
    },
    footerCta: 'Ready to understand where your organisation stands?'
  },
  HOW_WE_WORK: {
    hero: {
      h1: 'From first conversation to assurance-ready reporting. A structured six-step engagement model.',
      sub: 'Sustainability compliance is not a single deliverable. It requires simultaneous action across governance, data infrastructure, operations, reporting, and people. Solvevia manages the full journey, so nothing falls through the gaps and no deadline catches you unprepared.'
    },
    steps: [{
      n: '01',
      title: 'Initial Scoping',
      desc: 'Every engagement begins with a focused conversation. We review your current state, what obligations apply to you, which reporting phase you fall under, what internal capability exists, and what the critical deadlines are. The output is a clear picture of the scope of support required and a shared understanding of what the journey ahead looks like.',
      output: 'Scope of engagement document. Applicable SECP obligations confirmed. Timeline mapped.'
    }, {
      n: '02',
      title: 'Readiness and Materiality Assessment',
      desc: 'We conduct a structured gap analysis against IFRS S1 and S2 requirements and SECP\'s ESG Disclosure Guidelines. Alongside this, we perform a double materiality assessment to identify which sustainability topics are financially material and operationally material to your organisation. We benchmark against peers and produce a compliance roadmap with prioritised actions and clear timelines.',
      output: 'Gap analysis report. Double materiality assessment. Peer benchmarking summary. Compliance roadmap.'
    }, {
      n: '03',
      title: 'Governance and Systems Design',
      desc: 'We design the governance architecture your organisation needs for credible sustainability reporting: Sustainability Committee structures and Terms of Reference, Board-level oversight responsibilities, integration into corporate strategy, and alignment with SECP\'s Code of Corporate Governance amendments. In parallel, we design your data infrastructure blueprint and GHG inventory methodology ahead of implementation.',
      output: 'Sustainability Committee structure and TORs. Board oversight framework. Data infrastructure blueprint. GHG methodology document.'
    }, {
      n: '04',
      title: 'Implementation',
      desc: 'We translate advisory recommendations into systems, data, and operational reality. GHG inventories are built across Scope 1, 2, and 3 in line with the GHG Protocol. ESG data systems are selected, configured, and deployed. Sustainability policies, procedures, and internal controls are drafted and implemented. Supplier and vendor ESG assessments are conducted to support Scope 3 data collection.',
      output: 'Completed GHG inventory. Deployed ESG data system. Sustainability policies and procedures. Supplier ESG assessment report.'
    }, {
      n: '05',
      title: 'Report Preparation and Assurance Readiness',
      desc: 'We prepare your full sustainability disclosure in line with IFRS S1 and S2 requirements and the ESG Disclosure Guidelines, covering governance, strategy, risk management, and metrics and targets. Reports are structured for Annual Report integration or as standalone documents, aligned with the Pakistan Green Taxonomy.',
      output: 'Draft sustainability report. IFRS S1/S2 aligned disclosure. ESG Guidelines aligned disclosure. Pakistan Green Taxonomy alignment summary. Assurance readiness documentation.'
    }, {
      n: '06',
      title: 'Capability and Ongoing Support',
      desc: 'SECP mandates independent assurance from Year 2 of reporting. We prepare your organisation to meet that standard before your auditors arrive, then train internal teams and provide ongoing advisory as requirements evolve.',
      output: 'Assurance-ready evidence pack. Internal controls documentation. GHG methodology documentation. Staff training programme. Ongoing advisory retainer.'
    }],
    models: [{
      title: 'Full Execution Partner',
      desc: 'We engage directly to deliver any or all of our service brackets, from initial readiness assessment through to a completed, assurance-ready sustainability disclosure. Scoped as discrete projects or ongoing advisory retainers.',
      suits: 'Listed companies beginning preparation with deadlines in view; audit/advisory firms wanting full white-label delivery.'
    }, {
      title: 'Capability and Talent Partner',
      desc: 'For organisations building internal sustainability capability over time: structured L&D programmes, in-house workshops, and talent acquisition support.',
      suits: 'Organisations building dedicated internal sustainability functions; audit firms developing their own sustainability practice over a medium-term horizon.'
    }],
    comparison: {
      heading: 'Solvevia vs Managing It In-House',
      rows: [['Solvevia', 'Building In-House'], ['Operational immediately, no hiring cycle or ramp-up', '12–18 months minimum to hire/train/develop capability'], ['Full lifecycle coverage within one firm', 'Requires simultaneous expertise across governance, GHG accounting, data systems, reporting, assurance'], ['Pakistan-specific expertise grounded in SECP requirements', 'Extremely limited local talent pool'], ['Big4-calibre technical depth', 'Ongoing training/methodology development required'], ['Flexible engagement models', 'Full fixed cost regardless of reporting cycle demand']]
    },
    footerCta: "Let's start with a scoping conversation. No commitment required."
  },
  SERVICES: {
    advisory: {
      hero: {
        h1: 'We assess where you are, design where you need to go, and map how to get there.',
        sub: 'Solvevia\'s Advisory bracket is the starting point for every sustainability compliance journey. Before anything can be built, reported, or assured, your organisation needs a clear picture of its obligations, its gaps, and the path forward. That is what Advisory delivers.',
        cta: 'Start with a readiness assessment'
      },
      workstreams: [{
        n: '01',
        title: 'Readiness and Materiality Assessment',
        what: 'A structured evaluation of how prepared your organisation is, and which sustainability topics are most material to your business.',
        does: 'Gap analysis against IFRS S1/S2 and SECP\'s ESG Disclosure Guidelines; double materiality assessment (financial + impact materiality); peer benchmarking; a compliance roadmap with prioritised actions.',
        receive: 'Gap analysis report, double materiality assessment, peer benchmarking summary, compliance roadmap.'
      }, {
        n: '02',
        title: 'Governance and Strategy Design',
        what: 'The governance architecture required to meet SECP\'s mandatory reporting and Corporate Governance Code requirements.',
        does: 'Design Sustainability Committee structure, composition, TORs, reporting lines, Board oversight responsibilities; integrate sustainability into corporate strategy; ensure Corporate Governance Code alignment.',
        receive: 'Committee structure and TORs, Board oversight framework, strategy integration document, governance alignment assessment.'
      }, {
        n: '03',
        title: 'Operations and Climate Risk Assessment',
        what: 'Assessment of operational exposure to sustainability risks across the value chain, required under IFRS S2.',
        does: 'Assess physical and transition climate risks; scenario modelling per IFRS S2; identify operational changes needed.',
        receive: 'Climate risk assessment, IFRS S2 scenario modelling summary, operational impact identification, supply chain risk map.'
      }, {
        n: '04',
        title: 'Data and Technology Roadmap',
        what: 'The information architecture needed to capture, manage, and report sustainability data reliably enough to withstand independent assurance.',
        does: 'Map existing data flows and gaps; recommend technology platforms; produce GHG inventory methodology and boundary-setting framework.',
        receive: 'Data flow mapping, gap identification, technology platform recommendations, GHG methodology and boundary framework.'
      }],
      why: ['Grounded in SECP\'s actual requirements — built around IFRS S1/S2 as mandated, the ESG Guidelines, and the Pakistan Green Taxonomy, not generic global frameworks.', 'Double materiality done properly — a documented, defensible methodology, not a high-level workshop exercise.', 'Roadmap that is actually executable — scoped to real constraints, timelines, capacity, and budget.', 'Seamless transition to implementation — same team designs and builds.'],
      footerCta: 'Not sure where your organisation stands? Start here. A readiness assessment gives you a clear, documented picture of your compliance obligations, gaps, and path forward.'
    },
    implementation: {
      hero: {
        h1: 'We do the work. Translating advisory recommendations into systems, data, and operational reality.',
        sub: 'Advisory tells you what needs to be done. Implementation is where it actually gets done. Solvevia\'s Implementation bracket covers the full build — GHG inventories, ESG data systems, sustainability policies, supplier assessments, and decarbonisation planning.',
        cta: 'Discuss your implementation needs'
      },
      workstreams: [{
        n: '01',
        title: 'GHG Inventory and Carbon Accounting',
        what: 'The complete build of your GHG inventory, the quantitative foundation of IFRS S2 disclosure.',
        does: 'Build the inventory across Scope 1, 2, and 3 per the GHG Protocol; establish organisational/operational boundaries; select emission factors including NEPRA grid factors for Pakistan; design assurance-ready data collection and calculation methods.',
        receive: 'Completed GHG inventory, Pakistan-calibrated emission factor library, documented methodology, assurance-ready calculation workbooks, boundary documentation.'
      }, {
        n: '02',
        title: 'ESG Data Systems Deployment',
        what: 'The technology infrastructure to collect, manage, and report ESG data reliably.',
        does: 'Assess current systems; select the right ESG data platform; manage deployment — configuration, ERP/finance integration, pipeline design, testing.',
        receive: 'Deployed ESG platform, system integration, pipeline documentation, IFRS S1/S2-aligned configuration, audit-readiness testing report.'
      }, {
        n: '03',
        title: 'Policy, Procedure and Internal Controls',
        what: 'The policies, procedures, and controls needed for credible, assurance-ready reporting.',
        does: 'Draft environmental, social and governance policies, anti-harassment policy per SECP\'s Code, and the control frameworks underpinning data integrity.',
        receive: 'Environmental management policy, social/governance policy suite, anti-harassment policy, internal controls framework, implementation support.'
      }, {
        n: '04',
        title: 'Supplier and Vendor ESG Assessment',
        what: 'Supply chain ESG assessment for Scope 3 data and IFRS S2 value chain disclosure.',
        does: 'Design and run a supplier/vendor ESG assessment programme.',
        receive: 'Assessment framework, completed assessments for priority suppliers, Scope 3 data inputs, supply chain risk summary.'
      }, {
        n: '05',
        title: 'Target Setting and Decarbonisation Planning',
        what: 'Science-based emission reduction targets and a decarbonisation roadmap.',
        does: 'Support target-setting aligned with science-based methodologies and Pakistan\'s NDCs; build a roadmap with interim milestones.',
        receive: 'Emission reduction targets, decarbonisation roadmap, NDC alignment summary, IFRS S2 target disclosure language.'
      }],
      why: ['GHG methodology built for Pakistan (NEPRA grid factors, not global defaults).', 'Assurance-ready from day one.', 'Systems that integrate with what you already have.', 'Same team from advisory through implementation — no knowledge transfer gaps.'],
      footerCta: 'Ready to move from planning to execution? Implementation is where sustainability compliance becomes real.'
    },
    reporting: {
      hero: {
        h1: 'Preparing your disclosure. Ensuring it is ready for independent review.',
        sub: 'Reporting is where everything comes together — governance, climate risk, GHG data, ESG metrics, forward-looking targets — structured into a disclosure that meets SECP\'s requirements and stands up to independent scrutiny.',
        cta: 'Discuss your reporting needs'
      },
      workstreams: [{
        n: '01',
        title: 'Sustainability Report Preparation',
        what: 'Full preparation of your IFRS S1/S2 aligned sustainability disclosure.',
        does: 'Covers Governance, Strategy, Risk Management, and Metrics and Targets — aligned with the Pakistan Green Taxonomy, structured for Annual Report integration or standalone publication.',
        receive: 'Draft sustainability report, IFRS S1/S2 aligned disclosure, Pakistan Green Taxonomy alignment summary.'
      }, {
        n: '02',
        title: 'Audit Back-Office Support',
        what: 'White-label technical groundwork behind assurance engagements, for audit and advisory firms.',
        does: 'Working paper preparation, evidence compilation, methodology documentation, technical review support.',
        receive: 'Assurance working papers, evidence pack, technical review documentation.'
      }, {
        n: '03',
        title: 'Assurance Readiness',
        what: 'Preparing your disclosure to withstand independent review — SECP mandates assurance from Year 2.',
        does: 'Structure disclosures to withstand review, build evidence packs and documentation trails, design internal controls to auditing standards, ensure GHG methodology is defensible, prepare management representations.',
        receive: 'Assurance-ready evidence pack, internal controls documentation, GHG methodology documentation, management representations.'
      }],
      assuranceTable: [{
        phase: 'Phase I',
        reporting: 'From 1 July 2025',
        assurance: 'Required from 2027',
        note: 'Preparation must begin during the first reporting period.'
      }, {
        phase: 'Phase II',
        reporting: 'From 1 July 2026',
        assurance: 'Required from 2028',
        note: 'Implementation and report prep underway now.'
      }, {
        phase: 'Phase III',
        reporting: 'From 1 July 2027',
        assurance: 'Required from 2029',
        note: 'Window open but narrowing.'
      }],
      why: ['Built on what SECP actually requires.', 'Assurance-ready is a design principle, not an afterthought.', 'Same team that implemented, reports — no handoff.', 'For firms: you sign, we deliver, no conflict of interest.'],
      footerCta: 'Your first reporting deadline is set. Your assurance deadline follows. The organisations that meet both without disruption are those that started preparing early.'
    },
    'people-talent': {
      hero: {
        h1: 'Building the internal capability organisations need. Because sustainability cannot be outsourced forever.',
        sub: 'Pakistan\'s sustainability professional talent pool is extremely limited. Most finance and audit teams have never worked with IFRS S1 or S2. As SECP\'s mandate takes effect across Phase I, II, and III companies, demand will accelerate sharply and supply will not keep pace.',
        cta: 'Explore our programmes'
      },
      workstreams: [{
        n: '01',
        title: 'Sustainability Learning and Development',
        what: 'Structured programmes covering the full IFRS S1/S2 and ESG knowledge base.',
        does: 'IFRS S1/S2 concepts and disclosure requirements; ESG Disclosure Guidelines and Pakistan Green Taxonomy; GHG accounting and carbon literacy; materiality assessment methodology; governance and sustainability integration; assurance standards (intro to ISAE 3000). Delivery: cohort-based courses, in-house workshops, self-paced modules; relevant for ICAP/ACCA/CFA sustainability CPD pathways.',
        receive: 'Tailored learning programme, course materials, assessment/competency tracking, CPD-relevant content.'
      }, {
        n: '02',
        title: 'Talent Acquisition',
        what: 'Two targeted pathways to place sustainability-ready professionals.',
        does: 'Pathway 1 (Trained Professionals): source and place candidates already screened for technical IFRS S1/S2 and GHG accounting knowledge. Pathway 2 (Build and Train): identify high-potential finance/audit/ops professionals and put them through Solvevia\'s L&D programmes.',
        receive: 'Role profile definition, sourcing/screening, technical competency assessment, onboarding support; for Build and Train, a tailored L&D programme delivered alongside placement.'
      }],
      why: ['Pakistan-specific curriculum (built around SECP\'s actual requirements).', 'Developed by practitioners (chartered accountants with Big4 experience).', 'Aligned to ICAP, ACCA, and CFA certification pathways.', 'Integrated with delivery — capability building alongside live engagements.'],
      footerCta: 'The talent gap is real. The window to address it is now.'
    }
  },
  CONTACT: {
    hero: {
      h1: "Let's talk.",
      sub: 'Whether you are a listed company navigating SECP\'s sustainability mandate or an audit firm looking to build sustainability capability, the first step is a conversation. No commitment required.'
    },
    details: {
      email: 'muzzammil@solvevia.co',
      location: 'Karachi, Pakistan',
      web: 'solvevia.co'
    },
    formIntro: 'To make the most of our first conversation, it helps to know a little about you before we speak. Fill in the form below and we will be in touch within one business day.',
    nextSteps: [{
      n: '01',
      title: 'We respond within one business day.'
    }, {
      n: '02',
      title: 'Initial scoping call (30–45 min).'
    }, {
      n: '03',
      title: 'We propose a scope of engagement.'
    }, {
      n: '04',
      title: 'You decide — no pressure, no hard sell.'
    }],
    footerCta: 'Your sustainability deadline is already set. The sooner we talk, the more we can do.'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/home.jsx
try { (() => {
/* Solvevia — Homepage */
const GOLD = '#D1A454',
  CHARCOAL = '#3D3B38',
  BLACK = '#292827',
  BEIGE = '#FAF8F5',
  PAPER = '#FCF2DE',
  GREY = '#EBEAE9',
  WHITE = '#FFFFFF',
  SOIL = '#A89F8A';
const DG = {
  backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(rgba(209,164,84,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(209,164,84,0.4) 1px,transparent 1px)',
  backgroundSize: '64px 20px,64px 20px,1920px 600px,1920px 600px'
};

/* Hero data viz — SECP phase compliance card */
function HeroViz() {
  const phases = [{
    label: 'Phase I',
    sub: 'From 1 Jul 2025',
    pct: 100,
    active: true
  }, {
    label: 'Phase II',
    sub: 'From 1 Jul 2026',
    pct: 55
  }, {
    label: 'Phase III',
    sub: 'From 1 Jul 2027',
    pct: 20
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1px solid rgba(255,255,255,0.15)`,
      background: 'rgba(61,59,56,0.6)',
      padding: 28,
      width: 380,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: GOLD,
      margin: '0 0 20px'
    }
  }, "SECP IFRS S1/S2 \u2014 Phase Tracker"), phases.map((ph, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 13,
      color: ph.active ? BEIGE : 'rgba(250,248,245,0.55)'
    }
  }, ph.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 11,
      color: SOIL
    }
  }, ph.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'rgba(255,255,255,0.08)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: `${ph.pct}%`,
      background: ph.active ? GOLD : 'rgba(209,164,84,0.35)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      borderTop: `1px solid rgba(255,255,255,0.1)`,
      paddingTop: 20,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, [['Assurance required', 'From Year 2'], ['Green Taxonomy', 'Aligned'], ['ESG Guidelines', 'All PSX listed'], ['Boards must form', 'Sustainability Committee']].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '10px 12px',
      border: `1px solid rgba(255,255,255,0.08)`,
      background: 'rgba(255,255,255,0.04)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 10,
      color: SOIL,
      margin: '0 0 3px',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, k), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 12,
      color: BEIGE,
      margin: 0
    }
  }, v)))));
}
function HomePage({
  navigate
}) {
  const d = SD.HOME;
  const [activeSvc, setActiveSvc] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: BLACK,
      ...DG,
      paddingTop: 140,
      paddingBottom: 96,
      borderBottom: `1px solid rgba(255,255,255,0.1)`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: GOLD,
      margin: '0 0 20px'
    }
  }, "SECP \xB7 IFRS S1/S2 \xB7 Pakistan"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 'clamp(32px,4vw,54px)',
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
      color: BEIGE,
      margin: '0 0 24px',
      maxWidth: 600
    }
  }, d.hero.h1), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.65,
      color: 'rgba(250,248,245,0.7)',
      margin: '0 0 40px',
      maxWidth: 560
    }
  }, d.hero.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onClick: () => navigate('contact')
  }, "Talk to Us"), /*#__PURE__*/React.createElement(Btn, {
    variant: "secondary",
    onClick: () => navigate('how-we-work')
  }, "How We Work"))), /*#__PURE__*/React.createElement(HeroViz, null)))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: BEIGE,
      padding: '96px 0',
      borderBottom: `1px solid ${GREY}`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.6fr',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Lbl, {
    dark: true
  }, "The regulatory moment"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 34,
      letterSpacing: '-0.03em',
      lineHeight: 1.15,
      color: CHARCOAL,
      margin: 0
    }
  }, d.regulatory.heading)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 16,
      lineHeight: 1.75,
      color: '#555',
      margin: '0 0 32px'
    }
  }, d.regulatory.body), /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1px solid ${GREY}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr 1fr',
      background: GREY
    }
  }, ['Phase', 'Reporting from', 'Assurance required'].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '10px 16px',
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: SOIL
    }
  }, h))), [['Phase I', '1 July 2025', 'From 2027'], ['Phase II', '1 July 2026', 'From 2028'], ['Phase III', '1 July 2027', 'From 2029']].map(([p, r, a], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr 1fr',
      borderTop: `1px solid ${GREY}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 14,
      color: GOLD,
      minWidth: 100
    }
  }, p), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      fontFamily: 'var(--font-primary)',
      fontSize: 14,
      color: CHARCOAL
    }
  }, r), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      fontFamily: 'var(--font-primary)',
      fontSize: 14,
      color: CHARCOAL
    }
  }, a)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: PAPER,
      padding: '96px 0',
      borderBottom: `1px solid ${GREY}`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement(Lbl, {
    dark: true
  }, "Who we work with"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 36,
      letterSpacing: '-0.03em',
      color: CHARCOAL,
      margin: '0 0 40px'
    }
  }, "Two audiences. One mission."), /*#__PURE__*/React.createElement(AudienceCards, {
    cards: d.audiences,
    navigate: navigate,
    actions: ['contact', 'contact']
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: BLACK,
      ...DG,
      padding: '96px 0',
      borderBottom: `1px solid rgba(255,255,255,0.1)`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "Our services"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 34,
      letterSpacing: '-0.03em',
      lineHeight: 1.15,
      color: BEIGE,
      margin: '0 0 20px'
    }
  }, d.servicesIntro.heading), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 15,
      lineHeight: 1.65,
      color: 'rgba(250,248,245,0.6)',
      margin: '0 0 32px'
    }
  }, d.servicesIntro.sub), /*#__PURE__*/React.createElement(Btn, {
    variant: "secondary",
    onClick: () => navigate(d.services[activeSvc].page)
  }, "Explore ", d.services[activeSvc].title, " \u2192")), /*#__PURE__*/React.createElement("div", null, d.services.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => setActiveSvc(i),
    style: {
      borderTop: `1px solid rgba(255,255,255,0.1)`,
      padding: '28px 0',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 20,
      marginBottom: activeSvc === i ? 16 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 300,
      fontSize: 13,
      color: GOLD,
      letterSpacing: '0.1em',
      minWidth: 28
    }
  }, s.number), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: activeSvc === i ? 22 : 18,
      color: activeSvc === i ? BEIGE : 'rgba(250,248,245,0.55)',
      margin: 0,
      letterSpacing: '-0.02em',
      transition: 'all 0.15s'
    }
  }, s.title)), activeSvc === i && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 48
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 14,
      color: SOIL,
      margin: '0 0 12px',
      lineHeight: 1.6
    }
  }, s.bullets), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 15,
      color: 'rgba(250,248,245,0.7)',
      lineHeight: 1.65,
      margin: 0,
      maxWidth: 520
    }
  }, s.detail)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid rgba(255,255,255,0.1)`
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: BEIGE,
      padding: '96px 0',
      borderBottom: `1px solid ${GREY}`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Lbl, {
    dark: true
  }, "How we work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 34,
      letterSpacing: '-0.03em',
      lineHeight: 1.15,
      color: CHARCOAL,
      margin: '0 0 24px'
    }
  }, d.howWeWork.heading), /*#__PURE__*/React.createElement(Btn, {
    variant: "light",
    onClick: () => navigate('how-we-work')
  }, "See how we work")), /*#__PURE__*/React.createElement("div", null, d.howWeWork.steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '48px 1fr',
      gap: 16,
      paddingBottom: i < d.howWeWork.steps.length - 1 ? 32 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      border: `1px solid ${GOLD}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 300,
      fontSize: 11,
      color: GOLD,
      letterSpacing: '0.08em'
    }
  }, s.n)), i < d.howWeWork.steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      flex: 1,
      background: GREY,
      marginTop: 4,
      minHeight: 24
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: i < d.howWeWork.steps.length - 1 ? 0 : 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 15,
      color: CHARCOAL,
      margin: '6px 0 6px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 14,
      color: '#666',
      lineHeight: 1.6,
      margin: 0
    }
  }, s.desc)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: CHARCOAL,
      ...DG,
      padding: '96px 0',
      borderBottom: `1px solid rgba(255,255,255,0.1)`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement(Lbl, null, "Why Solvevia"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 34,
      letterSpacing: '-0.03em',
      color: BEIGE,
      margin: '0 0 48px',
      maxWidth: 640
    }
  }, d.why.heading), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 1,
      background: 'rgba(255,255,255,0.1)'
    }
  }, d.why.points.map((pt, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: CHARCOAL,
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 300,
      fontSize: 13,
      color: GOLD,
      letterSpacing: '0.1em',
      display: 'block',
      marginBottom: 16
    }
  }, pt.n), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 16,
      color: BEIGE,
      margin: '0 0 12px',
      letterSpacing: '-0.01em'
    }
  }, pt.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 14,
      color: 'rgba(250,248,245,0.6)',
      lineHeight: 1.65,
      margin: 0
    }
  }, pt.desc)))))), /*#__PURE__*/React.createElement(TeamGrid, {
    heading: d.teamHeading
  }), /*#__PURE__*/React.createElement(FooterCTA, {
    text: d.footerCta,
    navigate: navigate
  }));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/howwework.jsx
try { (() => {
/* Solvevia — How We Work page */
const GOLD = '#D1A454',
  CHARCOAL = '#3D3B38',
  BLACK = '#292827',
  BEIGE = '#FAF8F5',
  PAPER = '#FCF2DE',
  GREY = '#EBEAE9',
  WHITE = '#FFFFFF',
  SOIL = '#A89F8A';
const DG = {
  backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(rgba(209,164,84,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(209,164,84,0.4) 1px,transparent 1px)',
  backgroundSize: '64px 20px,64px 20px,1920px 600px,1920px 600px'
};
function HowWeWorkPage({
  navigate
}) {
  const d = SD.HOW_WE_WORK;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    h1: d.hero.h1,
    sub: d.hero.sub
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: BEIGE,
      padding: '96px 0',
      borderBottom: `1px solid ${GREY}`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement(Lbl, {
    dark: true
  }, "The six-step engagement model"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, d.steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '56px 1fr',
      gap: 0,
      marginBottom: i < d.steps.length - 1 ? 0 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      border: `1px solid ${GOLD}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 300,
      fontSize: 12,
      color: GOLD,
      letterSpacing: '0.08em'
    }
  }, s.n)), i < d.steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      flex: 1,
      background: GREY,
      minHeight: 32
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: i < d.steps.length - 1 ? 48 : 0,
      paddingLeft: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 20,
      color: CHARCOAL,
      margin: '6px 0 12px',
      letterSpacing: '-0.02em'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 15,
      color: '#555',
      lineHeight: 1.7,
      margin: '0 0 14px',
      maxWidth: 600
    }
  }, s.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      border: `1px solid ${GREY}`,
      background: PAPER,
      display: 'inline-block',
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: SOIL,
      marginRight: 8
    }
  }, "Typical output"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 13,
      color: CHARCOAL
    }
  }, s.output)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: PAPER,
      padding: '96px 0',
      borderBottom: `1px solid ${GREY}`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement(Lbl, {
    dark: true
  }, "Two engagement models"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 1,
      background: GREY,
      marginTop: 32
    }
  }, d.models.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: i === 0 ? WHITE : BEIGE,
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 20,
      color: CHARCOAL,
      margin: '0 0 16px',
      letterSpacing: '-0.02em'
    }
  }, m.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 15,
      color: '#555',
      lineHeight: 1.65,
      margin: '0 0 20px'
    }
  }, m.desc), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: SOIL,
      margin: '0 0 6px'
    }
  }, "Suited to"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 14,
      color: CHARCOAL,
      lineHeight: 1.6,
      margin: 0
    }
  }, m.suits)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: CHARCOAL,
      ...DG,
      padding: '80px 0',
      borderBottom: `1px solid rgba(255,255,255,0.1)`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Lbl, null, "Why a single partner matters"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 30,
      letterSpacing: '-0.03em',
      lineHeight: 1.2,
      color: BEIGE,
      margin: 0
    }
  }, "No handoffs. No gaps. One firm from start to finish.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 16,
      lineHeight: 1.75,
      color: 'rgba(250,248,245,0.7)',
      margin: 'auto 0'
    }
  }, "Most organisations navigating sustainability compliance end up managing multiple providers, and every handoff creates a gap in accountability. Solvevia covers the full lifecycle within one firm \u2014 advisory, implementation, reporting, assurance readiness, and talent \u2014 from the first conversation to the final disclosure.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: BEIGE,
      padding: '96px 0',
      borderBottom: `1px solid ${GREY}`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement(Lbl, {
    dark: true
  }, "The comparison"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 30,
      letterSpacing: '-0.03em',
      color: CHARCOAL,
      margin: '0 0 40px'
    }
  }, d.comparison.heading), /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1px solid ${GREY}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      background: GREY
    }
  }, d.comparison.rows[0].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 20px',
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 13,
      color: i === 0 ? GOLD : CHARCOAL,
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, h))), d.comparison.rows.slice(1).map((row, ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      borderTop: `1px solid ${GREY}`,
      background: ri % 2 === 0 ? WHITE : BEIGE
    }
  }, row.map((cell, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      padding: '14px 20px',
      fontFamily: 'var(--font-primary)',
      fontSize: 14,
      color: ci === 0 ? CHARCOAL : '#777',
      lineHeight: 1.5,
      borderLeft: ci === 1 ? `1px solid ${GREY}` : 'none',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: ci === 0 ? GOLD : '#aaa',
      flexShrink: 0,
      marginTop: 2
    }
  }, ci === 0 ? '✓' : '○'), cell))))))), /*#__PURE__*/React.createElement(FooterCTA, {
    text: d.footerCta,
    navigate: navigate
  }));
}
window.HowWeWorkPage = HowWeWorkPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/howwework.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/services.jsx
try { (() => {
/* Solvevia — Service pages (Advisory, Implementation, Reporting, People & Talent) */
const GOLD = '#D1A454',
  CHARCOAL = '#3D3B38',
  BLACK = '#292827',
  BEIGE = '#FAF8F5',
  PAPER = '#FCF2DE',
  GREY = '#EBEAE9',
  WHITE = '#FFFFFF',
  SOIL = '#A89F8A';
const DG = {
  backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(rgba(209,164,84,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(209,164,84,0.4) 1px,transparent 1px)',
  backgroundSize: '64px 20px,64px 20px,1920px 600px,1920px 600px'
};
function WhySolvevia({
  points
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: BEIGE,
      padding: '80px 0',
      borderBottom: `1px solid ${GREY}`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement(Lbl, {
    dark: true
  }, "Why Solvevia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 1,
      background: GREY,
      marginTop: 24
    }
  }, points.map((pt, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: WHITE,
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 300,
      fontSize: 32,
      color: GOLD,
      display: 'block',
      marginBottom: 12,
      lineHeight: 1
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 14,
      color: CHARCOAL,
      lineHeight: 1.65,
      margin: 0
    }
  }, pt))))));
}
function ServiceAudiences({
  navigate
}) {
  const cards = [{
    title: 'Listed Companies',
    body: 'Whether Phase I, II, or III, this is where your engagement begins. We deliver directly as your end-to-end sustainability partner.',
    cta: 'Talk to Us'
  }, {
    title: 'Audit and Advisory Firms',
    body: 'Full service delivery under your brand. Your firm leads the client relationship; we provide the technical capability behind it.',
    cta: 'Learn how it works'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: PAPER,
      padding: '80px 0',
      borderBottom: `1px solid ${GREY}`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement(Lbl, {
    dark: true
  }, "Who this is for"), /*#__PURE__*/React.createElement(AudienceCards, {
    cards: cards,
    navigate: navigate
  })));
}

/* Reporting-specific: assurance timeline */
function AssuranceTimeline({
  rows
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: BLACK,
      ...DG,
      padding: '80px 0',
      borderBottom: `1px solid rgba(255,255,255,0.1)`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement(Lbl, null, "The assurance timeline"), /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1px solid rgba(255,255,255,0.12)`,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr 1fr 1.4fr',
      background: 'rgba(255,255,255,0.06)'
    }
  }, ['Phase', 'Reporting from', 'Assurance required', 'Note'].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 20px',
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: SOIL
    }
  }, h))), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr 1fr 1.4fr',
      borderTop: `1px solid rgba(255,255,255,0.08)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 15,
      color: GOLD
    }
  }, r.phase), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      fontFamily: 'var(--font-primary)',
      fontSize: 14,
      color: BEIGE
    }
  }, r.reporting), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      fontFamily: 'var(--font-primary)',
      fontSize: 14,
      color: BEIGE
    }
  }, r.assurance), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      fontFamily: 'var(--font-primary)',
      fontSize: 14,
      color: 'rgba(250,248,245,0.6)',
      lineHeight: 1.5
    }
  }, r.note))))));
}
function ServicePage({
  serviceKey,
  navigate
}) {
  const d = SD.SERVICES[serviceKey];
  if (!d) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 200,
      color: BEIGE,
      textAlign: 'center',
      background: BLACK,
      ...DG
    }
  }, "Page not found");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    h1: d.hero.h1,
    sub: d.hero.sub,
    cta: d.hero.cta,
    ctaAction: () => navigate('contact')
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: BEIGE,
      padding: '96px 0',
      borderBottom: `1px solid ${GREY}`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement(Lbl, {
    dark: true
  }, "Our workstreams"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(WorkstreamAccordion, {
    items: d.workstreams
  })))), /*#__PURE__*/React.createElement(ServiceAudiences, {
    navigate: navigate
  }), serviceKey === 'reporting' && /*#__PURE__*/React.createElement(AssuranceTimeline, {
    rows: d.assuranceTable
  }), /*#__PURE__*/React.createElement(WhySolvevia, {
    points: d.why
  }), /*#__PURE__*/React.createElement(FooterCTA, {
    text: d.footerCta,
    navigate: navigate
  }));
}
window.ServicePage = ServicePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shared.jsx
try { (() => {
/* Solvevia website — shared layout components */
/* Exports: SolNav, SolFooter, C, Lbl, Btn, PageHero, FooterCTA, WorkstreamAccordion, TeamGrid, AudienceCards */

const GOLD = '#D1A454',
  CHARCOAL = '#3D3B38',
  BLACK = '#292827',
  BEIGE = '#FAF8F5',
  PAPER = '#FCF2DE',
  GREY = '#EBEAE9',
  WHITE = '#FFFFFF',
  SOIL = '#A89F8A';

/* Excel-cell grid overlay for dark sections: fine grid every cell (64x20), gold-accent grid every 30 cells */
const DG = {
  backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(rgba(209,164,84,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(209,164,84,0.4) 1px,transparent 1px)',
  backgroundSize: '64px 20px,64px 20px,1920px 600px,1920px 600px'
};

/* ── Primitives ── */
const C = ({
  children,
  s
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 40px',
    ...s
  }
}, children);
const Lbl = ({
  children,
  dark
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: 'var(--font-primary)',
    fontWeight: 600,
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: dark ? SOIL : GOLD,
    marginBottom: 16,
    marginTop: 0
  }
}, children);
const Btn = ({
  children,
  variant = 'primary',
  href,
  onClick,
  s
}) => {
  const styles = {
    primary: {
      background: GOLD,
      color: BLACK,
      border: `1px solid ${GOLD}`
    },
    secondary: {
      background: 'transparent',
      color: GOLD,
      border: `1px solid ${GOLD}`
    },
    light: {
      background: 'transparent',
      color: CHARCOAL,
      border: `1px solid ${CHARCOAL}`
    },
    dark: {
      background: CHARCOAL,
      color: BEIGE,
      border: `1px solid ${CHARCOAL}`
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'var(--font-primary)',
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: '12px 26px',
    borderRadius: 0,
    textDecoration: 'none',
    cursor: 'pointer',
    ...styles[variant],
    ...s
  };
  return href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: base
  }, children) : /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      ...base,
      outline: 'none',
      appearance: 'none'
    }
  }, children);
};

/* ── Nav ── */
function SolNav({
  navigate,
  currentPage
}) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, {
      passive: true
    });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const d = SD.NAV_LINKS;
  const bg = scrolled ? BLACK : 'transparent';
  const navGrid = scrolled ? DG : {};
  const go = (page, e) => {
    e.preventDefault();
    navigate(page);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      height: 72,
      background: bg,
      ...navGrid,
      borderBottom: scrolled ? `1px solid rgba(255,255,255,0.1)` : '1px solid transparent',
      transition: 'background 0.3s,border-color 0.3s'
    }
  }, /*#__PURE__*/React.createElement(C, {
    s: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => go('home', e),
    style: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/Solvevia-Logo-Horizontal-White.svg",
    alt: "Solvevia",
    style: {
      height: 34,
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      flex: 1,
      justifyContent: 'center'
    }
  }, d.map((link, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative'
    },
    onMouseEnter: () => link.children && setOpen(i),
    onMouseLeave: () => setOpen(false)
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      !link.children && navigate(link.page);
    },
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 400,
      fontSize: 14,
      color: 'rgba(250,248,245,0.8)',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      padding: '4px 0'
    }
  }, link.label, link.children && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      opacity: 0.5
    }
  }, "\u25BE")), link.children && open === i && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: -16,
      marginTop: 8,
      background: CHARCOAL,
      border: `1px solid rgba(255,255,255,0.12)`,
      minWidth: 220,
      padding: '6px 0',
      boxShadow: 'none'
    }
  }, link.children.map((c, j) => /*#__PURE__*/React.createElement("a", {
    key: j,
    href: "#",
    onClick: e => go(c.page, e),
    style: {
      display: 'block',
      padding: '10px 16px',
      fontFamily: 'var(--font-primary)',
      fontSize: 14,
      color: BEIGE,
      textDecoration: 'none',
      fontWeight: 400
    }
  }, c.label)))))), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onClick: () => navigate('contact'),
    s: {
      flexShrink: 0
    }
  }, "Talk to Us")));
}

/* ── Page Hero ── */
function PageHero({
  h1,
  sub,
  cta,
  ctaAction,
  dark = true,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: dark ? BLACK : BEIGE,
      ...(dark ? DG : {}),
      paddingTop: 140,
      paddingBottom: 96,
      borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : GREY}`
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 'clamp(32px,4vw,52px)',
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
      color: dark ? BEIGE : CHARCOAL,
      marginBottom: 24,
      marginTop: 0
    }
  }, h1), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.65,
      color: dark ? 'rgba(250,248,245,0.7)' : SOIL,
      marginBottom: cta ? 36 : 0,
      marginTop: 0,
      maxWidth: 620
    }
  }, sub), cta && /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onClick: ctaAction
  }, cta)), children));
}

/* ── Footer CTA section ── */
function FooterCTA({
  text,
  navigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: CHARCOAL,
      ...DG,
      padding: '80px 0',
      borderTop: `1px solid rgba(255,255,255,0.1)`
    }
  }, /*#__PURE__*/React.createElement(C, {
    s: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 32,
      letterSpacing: '-0.02em',
      color: BEIGE,
      maxWidth: 560,
      margin: 0,
      lineHeight: 1.2
    }
  }, text), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onClick: () => navigate('contact'),
    s: {
      flexShrink: 0
    }
  }, "Talk to Us")));
}

/* ── Workstream accordion ── */
function WorkstreamAccordion({
  items
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, items.map((ws, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: `1px solid ${GREY}`
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      width: '100%',
      padding: '24px 0',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 300,
      fontSize: 13,
      color: GOLD,
      letterSpacing: '0.1em',
      minWidth: 28
    }
  }, ws.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 20,
      color: open === i ? CHARCOAL : CHARCOAL,
      flex: 1,
      letterSpacing: '-0.02em'
    }
  }, ws.title), /*#__PURE__*/React.createElement("span", {
    style: {
      color: GOLD,
      fontSize: 18,
      transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
      transition: 'transform 0.2s'
    }
  }, "+")), open === i && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 32,
      paddingLeft: 48,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 24
    }
  }, [['What it is', ws.what], ['What we do', ws.does], ['What you receive', ws.receive]].map(([lbl, txt], j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      padding: 20,
      border: `1px solid ${GREY}`,
      background: PAPER
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: SOIL,
      marginBottom: 8,
      marginTop: 0
    }
  }, lbl), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 14,
      color: CHARCOAL,
      lineHeight: 1.6,
      margin: 0
    }
  }, txt)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${GREY}`
    }
  }));
}

/* ── Team grid ── */
function TeamGrid({
  heading
}) {
  const team = SD.TEAM;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: PAPER,
      padding: '96px 0',
      borderTop: `1px solid ${GREY}`
    }
  }, /*#__PURE__*/React.createElement(C, null, heading && /*#__PURE__*/React.createElement(Lbl, {
    dark: true
  }, heading), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 1,
      background: GREY,
      marginTop: 24
    }
  }, team.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: WHITE,
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      background: CHARCOAL,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      border: `1px solid rgba(0,0,0,0.1)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 16,
      color: GOLD
    }
  }, m.initials)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 17,
      color: CHARCOAL,
      margin: '0 0 4px'
    }
  }, m.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 500,
      fontSize: 13,
      color: GOLD,
      margin: '0 0 4px'
    }
  }, m.role), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 12,
      color: SOIL,
      margin: '0 0 16px',
      lineHeight: 1.5
    }
  }, m.credentials), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 14,
      color: '#555',
      lineHeight: 1.65,
      margin: 0
    }
  }, m.bio))))));
}

/* ── 2-up audience cards ── */
function AudienceCards({
  cards,
  navigate,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 1,
      background: GREY
    }
  }, cards.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: i === 0 ? WHITE : BEIGE,
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 20,
      color: CHARCOAL,
      margin: '0 0 16px',
      letterSpacing: '-0.02em'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 15,
      color: '#555',
      lineHeight: 1.65,
      margin: '0 0 24px'
    }
  }, c.body), /*#__PURE__*/React.createElement(Btn, {
    variant: "light",
    onClick: () => navigate && navigate(actions?.[i] || 'contact')
  }, c.cta))));
}
Object.assign(window, {
  SolNav,
  SolFooter: null,
  C,
  Lbl,
  Btn,
  PageHero,
  FooterCTA,
  WorkstreamAccordion,
  TeamGrid,
  AudienceCards
});

/* ── Footer ── */
function SolFooter({
  navigate
}) {
  const {
    tagline,
    cols
  } = SD.FOOTER;
  const go = (item, e) => {
    e.preventDefault();
    if (item.page) navigate(item.page);
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: BLACK,
      ...DG,
      borderTop: `1px solid rgba(255,255,255,0.1)`,
      padding: '80px 0 32px'
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr',
      gap: 40,
      paddingBottom: 48,
      borderBottom: `1px solid rgba(255,255,255,0.08)`
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/Solvevia-Logo-Horizontal-White.svg",
    alt: "Solvevia",
    style: {
      height: 28,
      marginBottom: 16,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 13,
      color: 'rgba(250,248,245,0.5)',
      lineHeight: 1.65,
      margin: 0,
      maxWidth: 260
    }
  }, tagline)), cols.map((col, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'rgba(250,248,245,0.5)',
      margin: '0 0 16px'
    }
  }, col.title), col.links.map((lk, li) => /*#__PURE__*/React.createElement("a", {
    key: li,
    href: lk.href || '#',
    onClick: lk.page ? e => go(lk, e) : undefined,
    style: {
      display: 'block',
      fontFamily: 'var(--font-primary)',
      fontSize: 14,
      color: 'rgba(250,248,245,0.6)',
      textDecoration: 'none',
      marginBottom: 10
    }
  }, lk.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 12,
      color: 'rgba(250,248,245,0.35)',
      margin: 0
    }
  }, "\xA9 2026 Solvevia. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, [{
    label: 'Privacy Policy',
    href: '#'
  }, {
    label: 'Terms of Use',
    href: '#'
  }].map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href,
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 12,
      color: 'rgba(250,248,245,0.35)',
      textDecoration: 'none'
    }
  }, l.label))))));
}
window.SolFooter = SolFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.ComparisonTable = __ds_scope.ComparisonTable;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Gradient = __ds_scope.Gradient;

__ds_ns.Star = __ds_scope.Star;

__ds_ns.WhatWePower = __ds_scope.WhatWePower;

})();
