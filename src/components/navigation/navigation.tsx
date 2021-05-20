import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { up } from '../breakpoint/breakpoint';
import { Grid, GridItem } from '../grid/grid';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import { SocialLinks } from './social-links';
import { LegalLinks } from './legal-links';
import { NavigationLinks } from './navigation-links';

const NavigationBackground = styled.div`
  background: #4d79ff;
  clip-path: polygon(
    0 16vw /* left top */,
    100% 0 /* right top */,
    100% 100% /* right bottom */,
    0% 100% /* left bottom */
  );
`;

const NavigationContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 80px 0 30px 0;

  ${up('md')} {
    padding: 10vw 0 80px 0;
    flex-direction: row;
  }
`;

/**
 * Meta navigation
 *
 */
const MetaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  order: 2;

  width: 100%;
  margin-top: 40px;

  ${up('md')} {
    flex-direction: column;
    align-self: flex-end;
    align-items: flex-start;
    order: 1;

    width: auto;
    margin-top: 0;
  }
`;

/**
 * Site navigation
 *
 */
const SiteNavigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
  order: 1;

  ${up('md')} {
    order: 2;
  }
`;

const SiteNavigationTitle = styled.span`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: bold;
  line-height: 110%;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ffffff;
`;

const Navigation: React.FC = (props) => {
  const { t } = useTranslation();
  const { languages, changeLanguage } = useI18next();

  const [activePath, setActivePath] = useState('');
  useEffect(() => {
    setActivePath(window.location.pathname);
  });

  return (
    <NavigationBackground {...props}>
      <Grid center>
        <GridItem xs={0} md={1} />
        <GridItem xs={12} md={10} noGap>
          <NavigationContent>
            <MetaContainer>
              <SocialLinks />
              <LegalLinks activePath={activePath} />
            </MetaContainer>

            <SiteNavigation>
              <SiteNavigationTitle>Menu</SiteNavigationTitle>
              <NavigationLinks activePath={activePath} />

              <ul className="languages">
                {languages.map((lng) => (
                  <li key={lng}>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        changeLanguage(lng);
                      }}
                    >
                      {lng}
                    </button>
                  </li>
                ))}
              </ul>
            </SiteNavigation>
          </NavigationContent>
        </GridItem>
      </Grid>
    </NavigationBackground>
  );
};
export default Navigation;
