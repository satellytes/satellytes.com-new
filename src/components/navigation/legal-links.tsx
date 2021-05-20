import { Trans } from 'gatsby-plugin-react-i18next';
import React from 'react';
import styled from 'styled-components';
import { Link } from '../links/links';
import { up } from '../breakpoint/breakpoint';

const LegalLinkList = styled.ul`
  list-style-type: none;

  margin: 0;
  padding: 0;
  order: 1;

  ${up('md')} {
    order: 2;
  }
`;

const UnstyledListItem = styled.li`
  ${up('md')} {
    display: inline-block;

    &:not(:last-of-type) {
      margin-right: 12px;
    }
  }
`;

const LegalLink = styled(Link)<{ $isSelected: boolean }>`
  display: block;

  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  text-decoration: none;
  color: ${(props) => (props.$isSelected ? '#ffffff' : '#202840')};

  /**
   * necessary for Safari
   */
  &:link {
    color: ${(props) => (props.$isSelected ? '#ffffff' : '#202840')};
  }

  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }
`;

export const LegalLinks = ({ activePath }) => {
  return (
    <LegalLinkList>
      <UnstyledListItem>
        <LegalLink to="/imprint" $isSelected={activePath.includes('/imprint')}>
          <Trans i18nKey="navigation.legal.imprint">Impressum</Trans>
        </LegalLink>
      </UnstyledListItem>
      <UnstyledListItem>
        <LegalLink
          to="/data-privacy"
          $isSelected={activePath.includes('/data-privacy')}
        >
          <Trans i18nKey="navigation.legal.privacy">Datenschutz</Trans>
        </LegalLink>
      </UnstyledListItem>
    </LegalLinkList>
  );
};
