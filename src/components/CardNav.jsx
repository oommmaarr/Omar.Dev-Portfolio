"use client"
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { ArrowUpRight, Home } from 'lucide-react';
import SplitText from '@/components/SplitText';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CardNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = 'rgba(30, 20, 60, 0.95)', // Dark purple with transparency
  menuColor = '#e5e7eb', // Light gray for hamburger
  buttonBgColor = 'linear-gradient(135deg, #9333ea, #ec4899)', // Purple to pink gradient
  buttonTextColor = '#ffffff'
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('');
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const defaultItems = [
    {
      label: 'الأعمال',
      bgColor: 'linear-gradient(135deg, rgba(147, 51, 234, 0.8), rgba(99, 102, 241, 0.8))',
      textColor: '#ffffff',
      links: [
        { label: 'مشاريع الويب', href: '#projects', ariaLabel: 'عرض مشاريع الويب' },
        { label: 'التطبيقات', href: '#apps', ariaLabel: 'عرض التطبيقات' },
        { label: 'التصاميم', href: '#designs', ariaLabel: 'عرض التصاميم' }
      ]
    },
    {
      label: 'الخدمات',
      bgColor: 'linear-gradient(135deg, rgba(236, 72, 153, 0.8), rgba(219, 39, 119, 0.8))',
      textColor: '#ffffff',
      links: [
        { label: 'تطوير المواقع', href: '#web-dev', ariaLabel: 'خدمات تطوير المواقع' },
        { label: 'تصميم UI/UX', href: '#design', ariaLabel: 'خدمات التصميم' },
        { label: 'الاستشارات', href: '#consulting', ariaLabel: 'الاستشارات التقنية' }
      ]
    },
    {
      label: 'التواصل',
      bgColor: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.8))',
      textColor: '#ffffff',
      links: [
        { label: 'إرسال رسالة', href: '#contact', ariaLabel: 'إرسال رسالة' },
        { label: 'حجز استشارة', href: '#booking', ariaLabel: 'حجز استشارة' },
        { label: 'متابعني', href: '#social', ariaLabel: 'الشبكات الاجتماعية' }
      ]
    }
  ];

  const navigationItems = items || defaultItems;

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content');
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    if (!isExpanded) {
      navEl.style.height = '60px';
      navEl.style.overflow = 'hidden';
      cardsRef.current.forEach(card => {
        if (card) {
          card.style.transform = 'translateY(50px)';
          card.style.opacity = '0';
        }
      });
    }

    return {
      play: () => {
        navEl.style.transition = 'height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        navEl.style.height = calculateHeight() + 'px';
        
        setTimeout(() => {
          cardsRef.current.forEach((card, i) => {
            if (card) {
              card.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
              card.style.transitionDelay = (i * 0.08) + 's';
              card.style.transform = 'translateY(0px)';
              card.style.opacity = '1';
            }
          });
        }, 100);
      },
      reverse: () => {
        cardsRef.current.forEach(card => {
          if (card) {
            card.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            card.style.transform = 'translateY(50px)';
            card.style.opacity = '0';
          }
        });
        
        setTimeout(() => {
          navEl.style.transition = 'height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          navEl.style.height = '60px';
        }, 200);
      }
    };
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;
    return () => {
      tlRef.current = null;
    };
  }, [ease, navigationItems, isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play();
    } else {
      setIsHamburgerOpen(false);
      tl.reverse();
      setTimeout(() => setIsExpanded(false), 600);
    }
  };

  const handleLinkClick = (href) => {
    setActiveLink(href);
    if (isExpanded) {
      toggleMenu();
    }
  };

  const isLinkActive = (href) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname === href) return true;
    return false;
  };

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[99] top-[1.2em] md:top-[2em] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-xl shadow-2xl backdrop-blur-md border border-white/10 relative overflow-hidden will-change-[height]`}
        style={{ background: baseColor }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2]">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              aria-label="Go to Home Page"
              className={`transition-colors duration-300 ${
                isLinkActive('/') 
                  ? 'text-orange-500 bg-gray-200 rounded-lg flex items-center justify-center w-10 h-10' 
                  : 'text-white hover:text-orange-500'
              }`}
              onClick={() => handleLinkClick('/')}
            >
              <Home className="w-6 h-6" />
            </Link>

            <div className="logo-container flex items-center text-white font-semibold text-xl md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
              <SplitText
                text="Omar.Dev"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
          </div>

          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center p-2 cursor-pointer gap-[6px] order-2 md:order-none`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={isExpanded}   // ✅ هنا أضفنا aria-expanded
            tabIndex={0}
            style={{ color: menuColor }}
          >
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
              } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
              } group-hover:opacity-75`}
            />
          </div>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-end md:gap-[12px]`}
          hidden={!isExpanded}   // ✅ استخدمنا hidden بديل aria-hidden
        >
          {navigationItems.slice(0, 4).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%] backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
              ref={setCardRef(idx)}
              style={{ 
                background: item.bgColor,
                color: item.textColor 
              }}
            >
              <div className="nav-card-label font-bold tracking-[-0.5px] text-[18px] md:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                {item.links?.map((lnk, i) => (
                  <Link
                    key={`${lnk.label}-${i}`}
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                    className={`nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-all duration-300 hover:translate-x-1 text-[15px] md:text-[16px] ${
                      isLinkActive(lnk.href) 
                        ? 'opacity-100 font-semibold text-orange-300 rounded-lg transform translate-x-1' 
                        : 'opacity-75 hover:opacity-100'
                    }`}
                    onClick={() => handleLinkClick(lnk.href)}
                  >
                    <ArrowUpRight 
                      className={`nav-card-link-icon shrink-0 w-4 h-4 transition-all duration-300 ${
                        isLinkActive(lnk.href) ? 'text-orange-300' : ''
                      }`} 
                      aria-hidden="true" 
                    />
                    {lnk.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
