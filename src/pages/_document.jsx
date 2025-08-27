import { Html, Head, Main, NextScript } from 'next/document';

const modeScript = `
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function updateMode() {
    const isSystemDarkMode = darkModeMediaQuery.matches;
    const isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode);

    document.documentElement.classList.toggle('dark', isDarkMode);

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode;
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none');
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none');
    }, 0);
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily();
    updateMode();
  }

  updateMode();
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions);
  window.addEventListener('storage', updateModeWithoutTransitions);
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}