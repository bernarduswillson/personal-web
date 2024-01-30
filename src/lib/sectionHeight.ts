export interface SectionHeight<T = string> {
  [key: string]: T;
}

export const getSectionHeight = <T>(sectionId: string): SectionHeight<T> => {
  const sectionElement = document.getElementById(sectionId);

  if (sectionElement) {
    const rect = sectionElement.getBoundingClientRect();

    return {
      height: rect.height as T,
      startPixel: (rect.top + window.scrollY) as T,
      endPixel: (rect.bottom + window.scrollY) as T,
    };
  }

  return {
    height: 0 as T,
    startPixel: 0 as T,
    endPixel: 0 as T,
  };
};
