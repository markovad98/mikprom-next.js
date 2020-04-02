import React from "react";
import { useRouter } from "next/router";
import { locales, languageNames } from "../translations/config";
import { LocaleContext } from "../context/LocaleContext";

type TProps = {
  className: string;
};

const LocaleSwitcher: React.FC<TProps> = props => {
  const router = useRouter();
  const { locale } = React.useContext(LocaleContext);

  const handleLocaleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const regex = new RegExp(`^/(${locales.join("|")})`);
      router.push(
        router.pathname,
        router.asPath.replace(regex, `/${e.target.value}`)
      );
    },
    [router]
  );

  return (
    <article className="custom-select">
      <select
        className={props.className}
        value={locale}
        onChange={handleLocaleChange}
      >
        {locales.map(locale => (
          <option key={locale} value={locale}>
            {languageNames[locale]}
          </option>
        ))}
      </select>

      <div className="custom-select-arrow">
          <svg width="28" height="15" viewBox="0 0 28 15" fill="none">
              <rect width="28" height="15" fill="url(#pattern0)"/>
              <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use href="#image0" transform="translate(-0.0151099) scale(0.0206044 0.0384615)"/>
                  </pattern>
                  <image id="image0" width="50" height="26" href="data:image/png;base64,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"/>
              </defs>
          </svg>
      </div>
    </article>
  );
};

export default LocaleSwitcher;
