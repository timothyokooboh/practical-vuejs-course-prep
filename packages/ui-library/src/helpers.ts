let id = 0;

const generateId = () => {
  return ++id;
};

export const useId = (prefix: string) => {
  return `${prefix}-${generateId()}`;
  // return `${Math.random().toString(36).slice(2, 9)}`;
};

export const getFocusableElements = (el: HTMLElement) => {
  let focusableElements: HTMLElement[] | undefined = [];
  const result = el.querySelectorAll(
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])',
  );

  if (result) {
    focusableElements = Array.from(result) as HTMLElement[];
  }

  return focusableElements;
};

export const handleFocusTrapping = (
  event: KeyboardEvent,
  focusableElements: HTMLElement[],
) => {
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.key === "Tab") {
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
};
