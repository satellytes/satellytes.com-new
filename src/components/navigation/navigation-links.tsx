import { Trans } from 'gatsby-plugin-react-i18next';
import React from 'react';
import styled from 'styled-components';
import { Link } from '../links/links';
import { up } from '../breakpoint/breakpoint';

const SiteNavigationList = styled.ul`
  margin: 0;
`;

const NavigationListItem = styled.li`
  display: block;
`;

const SiteNavigationLink = styled(Link)<{ $isSelected: boolean }>`
  font-size: 32px;
  font-weight: bold;
  line-height: 150%;

  text-decoration: none;
  color: ${(props) => (props.$isSelected ? '#ffffff' : '#202840')};

  /**
   * necessary for Safari
   */

  &:link {
    color: ${(props) => (props.$isSelected ? '#ffffff' : '#202840')};
  }

  ${up('md')} {
    font-size: 48px;
  }

  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }
`;

export const NavigationLinks = ({ activePath }) => {
  return (
    <nav>
      <SiteNavigationList>
        <NavigationListItem>
          <SiteNavigationLink
            to="/services"
            $isSelected={activePath.includes('/services')}
          >
            <Trans i18nKey="navigation.menu.services">Leistungen</Trans>
          </SiteNavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <SiteNavigationLink
            to="/clients"
            $isSelected={activePath.includes('/clients')}
          >
            <Trans i18nKey="navigation.menu.clients">Kunden</Trans>
          </SiteNavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <SiteNavigationLink
            to="/career"
            $isSelected={activePath.includes('/career')}
          >
            <Trans i18nKey="navigation.menu.career">Karriere</Trans>
          </SiteNavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <SiteNavigationLink
            to="/office"
            $isSelected={activePath.includes('/office')}
          >
            <Trans i18nKey="navigation.menu.office">Büro</Trans>
          </SiteNavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <SiteNavigationLink
            to="/contact"
            $isSelected={activePath.includes('/contact')}
          >
            <Trans i18nKey="navigation.menu.contact">Kontakt</Trans>
          </SiteNavigationLink>
        </NavigationListItem>
      </SiteNavigationList>
    </nav>
  );
};
