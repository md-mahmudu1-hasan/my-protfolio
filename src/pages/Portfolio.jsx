import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function portfolioLoader() {
  return [
    {
      id: 'financial-app',
      title: 'Financial App',
      category: 'UI/UX Design',
      description: 'Fusce mollis sem eu ligula ornare, ut molestie eros volutpat. Praesent condimentum...',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDoaoElpPwdQdQBZcLfN5Mco4-ChrB-Cg5pQDL8WqCC5YS25OCO7qaQpCM3Mj-6Sv8_31BXHq2PXOtkZ7U3yNTvdZq60khlOTHJ4Aj_oqG5L6688yUhjt23ahcqry564-tYgX-J4NDY-WFncFtvhn6EC0TWWCBDWahrhu2yeJVusbT41AVtsOpA_hxIW0vqWDmWNzbX-tbHhPI03BQzNa7_smNTWLTLJIrR36UGY1-gwVqe_XD1iYk4Vp8SrHb6b9sbWOAfTd81BE_F',
    },
    {
      id: 'ecommerce-app',
      title: 'E-Commerce App',
      category: 'UI/UX Design',
      description: 'Fusce mollis sem eu ligula ornare, ut molestie eros volutpat. Praesent condimentum...',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCl38WUKQIDv6jPO1Oq8R_OYOD0tWdffCcwhjlWhMlnBp3M6Ck1_CR66Tm2VsycmxaQrAlpzc8V25tGNbPG4007MfqHJp50gRIdol_3szc5-ksxAW8AAW--hQ1rWNnNrbh23OGrRAIINygWSq8g6v5awqKvM4YoiJOj52OR5S3s61yNcZets48d2S9ECixQlvPd3EpWzukTteMCd7cPmLlcNIe90KPxrzxUubekqKNBe-vkznsJkUfw1m457bep4PCVRkvh6aHnRtsq',
    },
    {
      id: 'accommodation-app',
      title: 'Accommodation App',
      category: 'UI/UX Design',
      description: 'Fusce mollis sem eu ligula ornare, ut molestie eros volutpat. Praesent condimentum...',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBpUtmgxnz42xKFhwMnnNRZyJ5sSA0N7fvKKqpxbk6L1iDGG3MbN0Q0ohKqy72RxJTIfpuyZ0zZoO3m9hjlGHf_xpuI4HgEx4ffr9BcIYKcFld1U3rFWgYl7XVk6YW2Ge9UK0agtGXjrb6Gwx56S6850VZ9922J8n8wcUXCnCEiyOKK9X84EZZQg3M14V52deHXXBLGRlU4u96nAO9LnBfdrjKaZnCTcN6soEbyaRoqJQAILtQgqa0NJAu07oZ3xM2dwZDlNrxTK9Pa',
    },
  ];
}

export function PortfolioSection({ projects }) {
  const rootRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        rootRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.portfolio-project',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.portfolio-image',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.portfolio-text',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 80%',
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="bg-background-light dark:bg-background-dark font-display min-h-screen"
    >
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-2">PORTFOLIO</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Latest Projects</h1>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 md:gap-4 border border-gray-400 dark:border-gray-500 rounded-full p-2">
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-600 dark:bg-gray-300 text-white dark:text-black">
                UI/UX Design
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:bg-gray-200/10 dark:hover:bg-gray-700">
                3D Design
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:bg-gray-200/10 dark:hover:bg-gray-700">
                Animation
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:bg-gray-200/10 dark:hover:bg-gray-700">
                Logo Design
              </button>
            </div>
          </div>

          <div className="space-y-16 md:space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`portfolio-project grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
                  index === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`portfolio-image w-full h-auto ${index === 1 ? 'order-1 md:order-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className={`portfolio-text flex flex-col justify-center ${index === 1 ? 'order-2 md:order-1' : ''}`}>
                  <p className="text-sm text-gray-400 mb-2">{project.category}</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h2>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <button className="font-medium text-gray-200 hover:text-white group flex items-center">
                    See More
                    <span className="material-icons-outlined ml-1 transform group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full bg-[#f3eada] dark:bg-[#b49a7c] py-8 md:py-12 mt-16 md:mt-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gray-800">3K</p>
              <p className="text-sm text-gray-700">Project Done</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gray-800">98+</p>
              <p className="text-sm text-gray-700">Happy Client</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gray-800">13</p>
              <p className="text-sm text-gray-700">Award Win</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gray-800">10+</p>
              <p className="text-sm text-gray-700">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSection;
